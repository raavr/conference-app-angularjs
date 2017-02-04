import { Observable } from 'rxjs/Observable';

export class NewsService {

    constructor($http) {
        this.$http = $http;
    }

    getNews() {
        let resPromise = this.$http.get("/assets/mock-data/mock-news.json");
        return Observable.fromPromise(resPromise).map(res => res.data.news)
    }

    getSingleNews(id) {
        let resPromise = this.$http.get("/assets/mock-data/mock-news.json");
        return Observable.fromPromise(resPromise)
            .map(res => res.data.news)
            .mergeMap(ns => Observable.from(ns))
            .filter(ns => ns.id === id);
    }


}

NewsService.$inject = ["$http"];