import { FullAgendaComponent } from './full-agenda.component';
import DayAgenda from '../day-agenda/day-agenda';
import Speakers from '../../speakers/speakers';

export default angular.module("agenda.full", [
  DayAgenda, 
  Speakers
]).component("fullAgenda", FullAgendaComponent)
  .name;