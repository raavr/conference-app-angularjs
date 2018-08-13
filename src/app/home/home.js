import uiRouter from 'angular-ui-router';
import HomeConfig from './home.config';
import { HomeComponent } from './home.component';
import Speakers from '../speakers/speakers';
import Partners from '../partners/partners';
import News from '../news/news';

export default angular.module("home", [
  uiRouter, 
  Speakers, 
  Partners, 
  News
]).config(HomeConfig)
  .component("home", HomeComponent)
  .name;