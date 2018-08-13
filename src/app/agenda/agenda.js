import uiRouter from 'angular-ui-router';
import AgendaConfig from './agenda.config';
import AgendaService from './agenda/agenda.service';
import FullAgenda from './full-agenda/full-agenda';

export default angular.module("agenda", [
  uiRouter, 
  AgendaService, 
  FullAgenda
]).config(AgendaConfig)
  .name;