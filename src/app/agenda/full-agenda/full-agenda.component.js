import './full-agenda.component.scss';
import template from './full-agenda.component.html';

class FullAgendaController {

    computeDayNameWidth() {
        if(!this.daysName.length) {
            return '0%';
        }

        return Math.floor(100 / this.daysName.length) + '%';
    }

    isActive(day) {
        return this.activeDay === day; 
    }

    setDayActive(index) {
        this.activeDay = index;
    }

    $onInit() {
        this.agenda = this.route[0];
        this.daysName = this.route[1];
        this.activeDay = 0;        
    }

    selectSpeaker(speaker) {
        this.selectedSpeaker = speaker;
    }

}

export const FullAgendaComponent = {
    bindings: {
        route: "<"
    },
    template: template,
    controller: FullAgendaController
}