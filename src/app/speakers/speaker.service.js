import { Observable } from 'rxjs/Observable';

export class SpeakerService {

    constructor($http) {
        this.$http = $http;
    }

    getSpeakers() {
        let resPromise = this.$http.get("assets/mock-data/mock-speakers.json");
        return Observable.fromPromise(resPromise).map(res => res.data.speakers);
    }
}

SpeakerService.$inject = ['$http'];