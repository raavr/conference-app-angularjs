'use strict';
import 'bootstrap/dist/css/bootstrap.css';
import './app.style.scss';

import { AppComponent } from './app.component';
import AppConfig from './app.config';
import Speakers from './speakers/speakers';
import Home from './home/home';
import Presentations from './presentations/presentations';
import Partners from './partners/partners';
import NoContent from './no-content/no-content';
import News from './news/news';
import Navbar from './navbar/navbar';
import Footer from './app-footer/app-footer';
import Agenda from './agenda/agenda';


 export default angular.module("Conference-app", [
         Navbar, 
         Footer, 
         Home, 
         Speakers, 
         Presentations, 
         Partners, 
         News, 
         NoContent, 
         Agenda
     ]).config(AppConfig)
       .component("app", AppComponent)
       .name;