import './agenda-cell.component.scss';
import template from './agenda-cell.component.html';

export const AgendaCellComponent = {
  bindings: {
    cell: "<"
  },
  template,
  require: { 
    parent: "^^fullAgenda" 
  }
}