import { PresentationListComponent } from './presentation-list.component';
import Speakers from '../../speakers/speakers';

export default angular.module("presentations.list", [Speakers])
  .component("presentationList", PresentationListComponent)
  .name;