import { SpeakerListComponent } from './speaker-list.component';
import speakerModal from '../speaker-modal/speaker-modal';
import speakerItem from '../speaker-item/speaker-item';

export default angular.module("speakers.list", [speakerModal, speakerItem])
       .component("speakerList", SpeakerListComponent)
       .name;