import './speaker-list.component.scss';
import template from './speaker-list.component.html';

class SpeakerListController {
  
  selectSpeaker(speaker) {
    this.selectedSpeaker = speaker;
  }
}

export const SpeakerListComponent = {
  bindings: {
    speakers: "<"
  },
  template,
  controller: SpeakerListController
}