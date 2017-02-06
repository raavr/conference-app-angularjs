import uiRouter from 'angular-ui-router';
import NoContentConfig from './no-content.config';
import { NoContentComponent } from './no-content.component';

export default angular.module("no-content", [uiRouter])
                      .config(NoContentConfig)
                      .component("noContent", NoContentComponent)
                      .name;