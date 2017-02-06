import AgendaRowDirective from './agenda-row.component';
import AgendaCell from '../agenda-cell/agenda-cell';

export default angular.module("agenda.row", [AgendaCell])
                      .directive("agendaRow", AgendaRowDirective)
                      .name;