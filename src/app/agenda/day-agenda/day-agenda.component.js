import './day-agenda.component.scss';
import template from './day-agenda.component.html';

class DayAgendaController {
  constructor() {
    this.rooms = [];
    this.activeRooms = [];
  }

  isRoomActive(room) {
    return this.activeRooms.indexOf(room) !== -1;
  }

  toggleRoomActive(room) {
    if (this.isRoomActive(room)) {
      this.activeRooms.splice(this.activeRooms.indexOf(room), 1);
    } else {
      this.activeRooms.push(room);
    }
  }

  computeTHWidth() {
    if (!this.activeRooms.length) {
      return "0%";
    }

    return Math.round(100 / this.activeRooms.length) + "%";
  }

  _fillRoomsArray() {
    this.rooms = Array.from(
      { length: this.agendaRows.totalRooms }, 
      (_, i) => i+1
    );
  }

  $onInit() {
    this._fillRoomsArray();
    this.activeRooms = this.activeRooms.concat(this.rooms);
  }
}

export const DayAgendaComponent = {
  bindings: {
    agendaRows: "<",
    isActive: "<"
  },
  template,
  controller: DayAgendaController
}