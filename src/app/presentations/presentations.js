import PresentationsConfig from './presentations.config';
import uiRouter from 'angular-ui-router';
import PresentationService from './presentation.service';
import PresentationList from './presentation-list/presentation-list';

export default angular.module("presentations", [uiRouter, PresentationService, PresentationList])
                      .config(PresentationsConfig)
                      .name;