 import { Observable } from 'rxjs/Observable';
 
 export default function FullAgendaResolve(agendaService) {
     let f1 = agendaService.getAgenda();
     return Observable.zip(f1, f1.flatMap(a => agendaService.createDaysNameArray(a.length))).toPromise();
}

FullAgendaResolve.$inject = ['agendaService'];
 
 