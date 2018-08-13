import { Observable } from 'rxjs/Observable';

export class SpeakerService {
  constructor($http) {
    this.$http = $http;
  }

  getSpeakers() {
    const resPromise = this.$http.get("assets/mock-data/mock-speakers.json");
    return Observable.fromPromise(resPromise).map(res => res.data.speakers);
  }
}

SpeakerService.$inject = ['$http'];

export default angular.module("speakers.service", [])
  .service("speakerService", SpeakerService)
  .name;