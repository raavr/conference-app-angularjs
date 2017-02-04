describe("SpeakerList", () => {

    let $componentController, mockSpeakers, bindings, $rootScope, $compile;

    beforeEach(angular.mock.module('Conference-app'));
    
    beforeEach(() => {
         mockSpeakers = [{ 
            id: 1, 
            name: "Test", 
            surname: "Testy", 
            company: "Test Corp", 
            img: "speaker-1", 
            desc: "Lorem ipsum"
        }];
        bindings = { speakers: mockSpeakers };
    });
    beforeEach(angular.mock.inject(($injector) => {
        $componentController = $injector.get('$componentController');
        $rootScope = $injector.get("$rootScope");
        $compile = $injector.get("$compile");
    }));

    it('should set speakers', () => {
        let ctrl = $componentController("speakers", null, bindings);
        expect(ctrl.speakers).toEqual(mockSpeakers);
    });

    it('should not have selectedSpeaker', () => {
        let ctrl = $componentController("speakers", null, null);
        expect(ctrl.selectedSpeaker).not.toBeDefined();
    });

    it('should call selectSpeaker', () => {
        let ctrl = $componentController("speakers", null, null);
        spyOn(ctrl, 'selectSpeaker');
        ctrl.selectSpeaker(mockSpeakers[0]);
        expect(ctrl.selectSpeaker).toHaveBeenCalledWith(mockSpeakers[0]);
    });

    describe("when element was clicked", () => {
        
        let element, ctrl;

        beforeEach(() => {
            let scope = $rootScope.$new();
            element = $compile("<speakers></speakers>")(scope);
            ctrl = element.controller("speakers");
            ctrl.speakers = mockSpeakers;
            scope.$apply();
        });

        it('should call selectSpeaker', () => {
            spyOn(ctrl, "selectSpeaker");
            element.find("speaker-item").triggerHandler("click");
            expect(ctrl.selectSpeaker).toHaveBeenCalledWith(mockSpeakers[0]);
        });

        it('should set selectedSpeaker', () => {
            expect(ctrl.selectedSpeaker).not.toBeDefined();
            element.find("speaker-item").triggerHandler("click");
            expect(ctrl.selectedSpeaker).toEqual(mockSpeakers[0]);
        });

    });



});