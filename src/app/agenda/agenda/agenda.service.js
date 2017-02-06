import { Observable } from 'rxjs/Observable';
import { DAYS, TD_TYPES } from '../../app.constant';
import { AgendaData } from './agenda-data';
import { AgendaRow } from './agenda-row';
import { AgendaDay } from './agenda-day';

class AgendaService {

    constructor($http) {
        this.http = $http;
    }

    _getDefaultCellsForSpecificTime(time, totalRooms) {
        let i = 1, 
            ad = [];

        while(i <= totalRooms) {
            ad.push(new AgendaData(i, TD_TYPES[TD_TYPES.GAP].toLowerCase(), time))
            i++;
        }

        return ad;
    }

    _concatCellsWithDefaultOnes(arr, totalRooms) {
        if(arr[0].type === TD_TYPES[TD_TYPES.PRESENTATION].toLowerCase()) {
            let gapsArray = this._getDefaultCellsForSpecificTime(arr[0].timeStart, totalRooms);
            return [...arr, ...gapsArray];
        }

        return arr;
    }

    _distinctByTime(arr) {
        return Observable.from(this._sortByRoom(arr)).distinctUntilChanged((a, b) => a.room === b.room).toArray();
    }

   _sortByRoom(arr) {
        return arr.sort((a,b) => a.room - b.room);
    }

    _transformAgenda(agenda, totalRooms) {
        return Observable.from(agenda)
            .groupBy(ad => ad.timeStart)
            .mergeMap(group => group.reduce((acc, curr) => 
                [...acc, curr], Array())
            )
            .map(p => this._concatCellsWithDefaultOnes(p, totalRooms))
            .mergeMap(p => this._distinctByTime(p))
            .map(pg => new AgendaRow(pg[0].timeStart, pg))
            .toArray();
    }

    getAgenda() {
         let day, 
             totalRooms,
             resPromise = this.http.get("/assets/mock-data/mock-agenda.json");
         
         return Observable.fromPromise(resPromise)
            .map(res => res.data.agenda)
            .mergeMap(res => Observable.from(res))
            .mergeMap(a => { 
                day = a.day; 
                totalRooms = a.totalRooms; 
                return this._transformAgenda(a.agenda, a.totalRooms);
            })
            .map(agenda => new AgendaDay(day, agenda, totalRooms))
            .toArray();
            

    }

    createDaysNameArray(days) {
        let daysArray = [], 
            i = 0;
        
        while(i < days) {
            daysArray.push("day " + DAYS[i].toLowerCase());
            i++;
        }

        return Observable.of(daysArray);
        
    }

}

AgendaService.$inject = ['$http'];

export default angular.module("agenda.service", [])
                      .service("agendaService", AgendaService)
                      .name;