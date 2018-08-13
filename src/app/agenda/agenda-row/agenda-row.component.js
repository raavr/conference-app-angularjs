import './agenda-row.component.scss';
import template from './agenda-row.component.html';
import { DAYS, TD_TYPES } from '../../app.constant';

function AgendaRowLinkFun(scope) {

  scope.getColspanValue = function (cell) {
    return cell.type === TD_TYPES[TD_TYPES.GENERAL].toLowerCase() 
      ? scope.activeRooms.length
      : 1;
  }

  scope.getTdClass = function (cell) {
    let classList = cell.type;
    if (cell.room) {
      classList += ' ' + cell.type + '-' + cell.room;
    }

    return classList;
  }

  scope.isRoomActive = function (room) {
    return scope.activeRooms.indexOf(room) !== -1;
  }
}

export default function AgendaRowDirective() {
  return {
    restrict: "A",
    scope: {
      row: "=",
      activeRooms: "="
    },
    template,
    link: AgendaRowLinkFun
  }
}