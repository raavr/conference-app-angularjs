import './presentation-list.component.scss';
import template from './presentation-list.component.html';

class PresentationListController {

    selectSpeaker(speaker) {
        this.selectedSpeaker = speaker;
    }

}

export const PresentationListComponent = {
    bindings: {
        presentations: "<"
    },
    template: template,
    controller: PresentationListController
}