import { AGENDA as fakeAgenda } from '../agenda/fake-agenda';

describe("FullAgenda", () => {

    let bindings, ctrl, selectedSpeaker;

    beforeEach(angular.mock.module('Conference-app'));

    beforeEach(() => {
        selectedSpeaker = { 
            id: 1, 
            name: "Test", 
            surname: "Testy", 
            company: "Test Corp", 
            img: "speaker-1", 
            desc: "Lorem ipsum"
        };
        bindings = { route: fakeAgenda };
    });
    
    beforeEach(angular.mock.inject(($injector) => {
        let $componentController = $injector.get('$componentController');
        ctrl = $componentController("agenda", null, bindings);
    }));

    it('should set agenda', () => {
       
        expect(ctrl.agenda).not.toBeDefined();
        ctrl.$onInit();
        expect(ctrl.agenda).toEqual(fakeAgenda[0]);
        
    });

    it('should set days name', () => {
       
        expect(ctrl.daysName).not.toBeDefined();
        ctrl.$onInit();
        expect(ctrl.daysName).toEqual(fakeAgenda[1]);
        
    });

    it('should select speaker', () => {
        expect(ctrl.selectedSpeaker).not.toBeDefined();
        ctrl.selectSpeaker(selectedSpeaker);
        expect(ctrl.selectedSpeaker).toBe(selectedSpeaker);
    });

    it('should compute width of dayName element', () => {
        ctrl.daysName = ['one day', 'two day', 'three day'];
        let calculatedWidth = ctrl.computeDayNameWidth();
        expect(calculatedWidth).toEqual("33%");
    });

    it('should compute width of dayName element when daysName is empty', () => {
        ctrl.daysName = [];
        let calculatedWidth = ctrl.computeDayNameWidth();
        expect(calculatedWidth).toEqual('0%');
    });

    it('should initially set activeDay to default value', () => {
        expect(ctrl.activeDay).not.toBeDefined();
        ctrl.$onInit();
        expect(ctrl.activeDay).toBe(0);
    });


});