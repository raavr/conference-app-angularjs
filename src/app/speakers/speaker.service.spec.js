import { Observable } from 'rxjs/Observable';
import ServiceModule from './speaker.service';

describe("SpeakerService", () => {

  let $httpMock, mSpeakerService, fakeSpeakers, response;

  beforeEach(angular.mock.module(ServiceModule));
  beforeEach(() => {
    fakeSpeakers = [{
      id: 1,
      name: "Test",
      surname: "Testy",
      company: "Test Corp",
      img: "speaker-1",
      desc: "Lorem ipsum"
    }, {
      id: 2,
      name: "Temp",
      surname: "Temppy",
      company: "Temp Corp",
      img: "speaker-2",
      desc: "Lorem ipsum"
    }];
  });

  beforeEach(angular.mock.inject(($injector, speakerService) => {
    $httpMock = $injector.get("$httpBackend");
    mSpeakerService = speakerService;
    response = $httpMock.when("GET", "assets/mock-data/mock-speakers.json");
  }));

  it("should return speakers", () => {
    response.respond({ data: { speakers: fakeSpeakers } });
    mSpeakerService.getSpeakers()
      .subscribe(s => {
        expect(s).toEqual(fakeSpeakers);
      });
  });

  it("should not return any speakers", () => {
    response.respond({ data: { speakers: [] } });
    mSpeakerService.getSpeakers()
      .subscribe(s => {
        expect(s.length).toBe(0);
      });
  });

});