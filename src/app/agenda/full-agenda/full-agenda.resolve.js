import { Observable } from 'rxjs/Observable';

export default function FullAgendaResolve(agendaService) {
  const agenda = agendaService.getAgenda();
  return Observable.zip(
    agenda, 
    agenda.flatMap(a => agendaService.createDaysNameArray(a.length))
  ).toPromise();
}

FullAgendaResolve.$inject = ['agendaService'];
