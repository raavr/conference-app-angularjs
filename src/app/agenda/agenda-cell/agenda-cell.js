import { AgendaCellComponent } from './agenda-cell.component';
import FullAgenda from '../full-agenda/full-agenda';

export default angular.module("agenda.cell", [])
                      .component("agendaCell", AgendaCellComponent)
                      .name;