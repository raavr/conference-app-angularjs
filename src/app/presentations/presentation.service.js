import { Observable } from 'rxjs/Observable';

class PresentationService {

    constructor($http) {
        this.$http = $http;
    }

    getPresentations() {
        let resPromise = this.$http.get("assets/mock-data/mock-presentations.json");
        return Observable.fromPromise(resPromise).map(res => res.data.presentations);
    }
}

PresentationService.$inject = ['$http'];

export default angular.module("presentations.service", [])
                      .service("presentationService", PresentationService)
                      .name;