import './home.component.scss';
import template from './home.component.html';

import { Observable, Subject } from 'rxjs';
import { MAX_NEWS_HOMEPAGE, MAX_SPEAKER_HOMEPAGE, MAX_PARTNERGROUP } from '../app.constant';

class HomeController {

    constructor(speakerService, newsService, partnerService) {
        this.speakerService = speakerService;
        this.newsService = newsService;
        this.partnerService = partnerService;
        this.unsub$ = new Subject();
    }

    $onInit() {
        this.speakerService.getSpeakers()
            .mergeMap(ns => Observable.from(ns))
            .take(MAX_SPEAKER_HOMEPAGE)
            .toArray()
            .takeUntil(this.unsub$)
            .subscribe(speakers => this.speakers = speakers);

        this.newsService.getNews()
            .mergeMap(ns => Observable.from(ns))
            .take(MAX_NEWS_HOMEPAGE)
            .toArray()
            .takeUntil(this.unsub$)
            .subscribe(ns => this.news = ns);

        this.partnerService.getPartners(MAX_PARTNERGROUP.HOMEPAGE)
            .takeUntil(this.unsub$)
            .subscribe(pg => this.partnersGroups = pg);
    }

    $onDestroy() {
        this.unsub$.next();
        this.unsub$.complete();
    }

}

HomeController.$inject = ['speakerService', 'newsService', 'partnerService'];

export const HomeComponent = {
    template: template,
    controller: HomeController
}