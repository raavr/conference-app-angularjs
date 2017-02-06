import SpeakersConfig from './speakers.config';
import uiRouter from 'angular-ui-router';
import speakerList from './speaker-list/speaker-list';
import speakerService from './speaker.service';

export default angular.module("speakers", [uiRouter, speakerService, speakerList])
                      .config(SpeakersConfig)
                      .name;