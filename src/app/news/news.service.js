import { Observable } from 'rxjs/Observable';

class NewsService {

    constructor($http) {
        this.$http = $http;
    }

    getNews() {
        let resPromise = this.$http.get("/assets/mock-data/mock-news.json");
        return Observable.fromPromise(resPromise).map(res => res.data.news)
    }

    getSingleNews(id) {
        return this.getNews()
            .mergeMap(ns => Observable.from(ns))
            .filter(ns => ns.id === id);
    }


}

NewsService.$inject = ["$http"];

export default angular.module("news.service", [])
                      .service("newsService", NewsService)
                      .name;