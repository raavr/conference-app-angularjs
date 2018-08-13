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
    return Array.from(
      { length: totalRooms },
      (_, i) => new AgendaData(i + 1, TD_TYPES[TD_TYPES.GAP].toLowerCase(), time)
    );
  }

  _concatCellsWithDefaultOnes(arr, totalRooms) {
    if (arr[0].type === TD_TYPES[TD_TYPES.PRESENTATION].toLowerCase()) {
      const gapsArray = this._getDefaultCellsForSpecificTime(arr[0].timeStart, totalRooms);
      return [...arr, ...gapsArray];
    }

    return arr;
  }

  _distinctByTime(arr) {
    return Observable.from(this._sortByRoom(arr))
      .distinctUntilChanged((a, b) => a.room === b.room)
      .toArray();
  }

  _sortByRoom(arr) {
    return arr.sort((a, b) => a.room - b.room);
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

  _createAgendaDay(agenda) {
    return this._transformAgenda(agenda.agenda, agenda.totalRooms)
      .map(agendaRow => (
        new AgendaDay(agenda.day, agendaRow, agenda.totalRooms)
      ));
  }

  getAgenda() {
    const resPromise = this.http.get("/assets/mock-data/mock-agenda.json");

    return Observable.fromPromise(resPromise)
      .map(res => res.data.agenda)
      .mergeMap(res => Observable.from(res))
      .mergeMap(agenda => this._createAgendaDay(agenda))
      .toArray();

  }

  createDaysNameArray(days) {
    return Observable.of(
      Array.from(
        { length: days },
        (_, i) => `day ${DAYS[i].toLowerCase()}`
      )
    );
  }
}

AgendaService.$inject = ['$http'];

export default angular.module("agenda.service", [])
  .service("agendaService", AgendaService)
  .name;