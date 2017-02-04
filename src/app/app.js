'use strict';
import uiRouter from 'angular-ui-router';

import 'bootstrap/dist/css/bootstrap.css';
import './app.style.scss';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpeakerItemComponent } from './speakers/speaker-item/speaker-item.component';
import { SpeakerListComponent } from './speakers/speaker-list/speaker-list.component';
import { SpeakerModalComponent } from './speakers/speaker-modal/speaker-modal.component';
import { PresentationListComponent } from './presentations/presentation-list/presentation-list.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PartnerGroupComponent } from './partners/partner-group/partner-group.component';
import { PartnerListComponent } from './partners/partner-list/partner-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsComponent } from './news/news/news.component';
import { NewsCategoriesComponent } from './news/news-categories/news-categories.component';
import { NoContentComponent } from './no-content/no-content.component';
import { AgendaCellComponent } from './agenda/agenda-cell/agenda-cell.component';
import AgendaRowDirective from './agenda/agenda-row/agenda-row.component';
import CollapseNavbarDirective from './navbar/collapse-navbar.directive';
import { DayAgendaComponent } from './agenda/day-agenda/day-agenda.component';
import { FullAgendaComponent } from './agenda/full-agenda/full-agenda.component';
import { SpeakerService } from './speakers/speaker.service';
import { NewsService } from './news/news.service';
import { MaxLenFilter } from './news/news-len.filter';
import { PartnerService } from './partners/partner.service';
import { PresentationService } from './presentations/presentation.service';
import { AgendaService } from './agenda/agenda/agenda.service';
import AppConfig from './app.config';

 export default angular.module("Conference-app", [uiRouter])
        .config(AppConfig)
        .service("speakerService", SpeakerService)
        .service("newsService", NewsService)
        .service("partnerService", PartnerService)
        .service("presentationService", PresentationService)
        .service("agendaService", AgendaService)
        .filter("maxLen", MaxLenFilter)
        .component("app", AppComponent)
        .component("home", HomeComponent)
        .component("speakers", SpeakerListComponent)
        .component("speakerItem", SpeakerItemComponent)
        .component("navbar", NavbarComponent)
        .component("appFooter", AppFooterComponent)
        .component("partnerGroup", PartnerGroupComponent)
        .component("partnerList", PartnerListComponent)
        .component("speakerModal", SpeakerModalComponent)
        .component("presentations", PresentationListComponent)
        .component("newsDetail", NewsDetailComponent)
        .component("newsList", NewsListComponent)
        .component("news", NewsComponent)
        .component("newsCategories", NewsCategoriesComponent)
        .component("noContent", NoContentComponent)
        .component("agenda", FullAgendaComponent)
        .component("dayAgenda", DayAgendaComponent)
        .directive("agendaRow", AgendaRowDirective)
        .component("agendaCell", AgendaCellComponent)
        .directive("collapseNavbar", CollapseNavbarDirective)
        .name;