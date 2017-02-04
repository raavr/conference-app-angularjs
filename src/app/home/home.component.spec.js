import { Observable } from 'rxjs/Observable';
import { MAX_PARTNERGROUP, MAX_SPEAKER_HOMEPAGE, MAX_NEWS_HOMEPAGE } from '../app.constant';

const speakersMock = [{ 
        id: 1, 
        name: "Test", 
        surname: "Testy", 
        company: "Test Corp", 
        img: "test", 
        desc: "Lorem ipsum"
    },
    { 
        id: 2, 
        name: "Test2", 
        surname: "Testy", 
        company: "Test Corp", 
        img: "test", 
        desc: "Lorem ipsum"
    },
    { 
        id: 3, 
        name: "Test3", 
        surname: "Testy", 
        company: "Test Corp", 
        img: "test", 
        desc: "Lorem ipsum"
    },
    { 
        id: 4, 
        name: "Test4", 
        surname: "Testy", 
        company: "Test Corp", 
        img: "test", 
        desc: "Lorem ipsum"
    }
];

const partnerGroupMock = [
  { 
    items: [{
        companyName : "Company Name",
        id : 1,
        img : "sponsor-1",
        type : "platinum"
    }], 
    type : "platinum"
  },
  {
    items: [
      {
        companyName : "Company Name",
        id : 2,
        img : "sponsor-2",
        type : "gold"
      },
      {
        companyName : "Company Name",
        id : 3,
        img : "sponsor-3",
        type : "gold"
      }
    ], 
    type : "gold"
  },
  {
    items: [
      {
        companyName : "Company Name",
        id : 4,
        img : "sponsor-4",
        type : "silver"
      },
      {
        companyName : "Company Name",
        id : 5,
        img : "sponsor-5",
        type : "silver"
      }
    ], 
    type : "silver"
  }
];

const newsMock = [
  {
      "id": 1,
      "title": "Become a sponsore",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "date": 1482447838000
  },
    {
      "id": 2,
      "title": "What do you really want?",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "date": 1482447838000
  },
    {
      "id": 3,
      "title": "Who are you?",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "date": 1482447838000
  },
  {
      "id": 4,
      "title": "Hello world",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "date": 1482447838000
  }
];

const SpeakerServiceMock = {
    getSpeakers: () => {
        return Observable.of(speakersMock);
    }
}

const PartnerServiceMock = {
    getPartners : () => {
        return Observable.from(partnerGroupMock).take(MAX_PARTNERGROUP.HOMEPAGE).toArray();
    }
}

const NewsServiceMock = {
    getNews: () => {
        return Observable.of(newsMock);
    }
}

describe("HomeComponent", () => {
    let $componentController, ctrl;
    beforeEach(angular.mock.module("Conference-app"));
    beforeEach(angular.mock.module(($provide) => {
        $provide.value("speakerService", SpeakerServiceMock);
        $provide.value("partnerService", PartnerServiceMock);
    }));

    beforeEach(angular.mock.inject(($injector) => {
        $componentController = $injector.get("$componentController");
        ctrl = $componentController("home", null, null);
    }));
    
    it("should set speakers", () => {
        
        expect(ctrl.speakers).not.toBeDefined();
        ctrl.$onInit();
        
        const speakersHomepage = speakersMock.slice(0, 3);
        expect(ctrl.speakers).toEqual(speakersHomepage);
    });

    it('should set only few speakers (determined by MAX_HOMEPAGE value)', () => {

        expect(ctrl.speakers).not.toBeDefined();
        ctrl.$onInit();
        expect(ctrl.speakers.length).toEqual(MAX_SPEAKER_HOMEPAGE);
        
    });

    it('should set partners', () => {

        expect(ctrl.partnersGroups).not.toBeDefined();
        ctrl.$onInit();
        const partnersGrouponHomepage = partnerGroupMock.slice(0,2);
        expect(ctrl.partnersGroups).toEqual(partnersGrouponHomepage);
        
    });

     describe("when getNews()", () => {
        let spyNewsService;
        
        beforeEach(() => {
            spyNewsService = spyOn(ctrl.newsService, "getNews").and.returnValue(Observable.of(newsMock));
        })

        it('should call getNews method', () => {
            
            expect(ctrl.newsService.getNews).not.toHaveBeenCalled();
            ctrl.$onInit();
            expect(ctrl.newsService.getNews).toHaveBeenCalled();

        });

        it('should set only few news (determined by MAX_HOMEPAGE value)', () => {
        
            expect(ctrl.news).not.toBeDefined();
            ctrl.$onInit();
            expect(ctrl.news.length).toBe(MAX_NEWS_HOMEPAGE);

        });

        it('should set empty array of news', () => {
        
            spyNewsService.and.returnValue(Observable.of([]));
            expect(ctrl.news).not.toBeDefined();
            ctrl.$onInit();
            expect(ctrl.news.length).toBe(0);

        });

        it('should set news', () => {

            expect(ctrl.news).not.toBeDefined();
            ctrl.$onInit();

            let newsHomePage = newsMock.slice(0, 3);
            expect(ctrl.news).toEqual(newsHomePage);

        });

     });

});


