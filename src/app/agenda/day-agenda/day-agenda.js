import { DayAgendaComponent } from './day-agenda.component';
import AgendaRow from '../agenda-row/agenda-row';

export default angular.module("agenda.day", [AgendaRow])
  .component("dayAgenda", DayAgendaComponent)
  .name;