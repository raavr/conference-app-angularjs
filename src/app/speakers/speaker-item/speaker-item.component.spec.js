import SpeakerItemModule from './speaker-item';

describe("SpeakerItem", () => {

  let $componentController, mockSpeaker, bindings, $compile, $rootScope;

  beforeEach(angular.mock.module(SpeakerItemModule));

  beforeEach(() => {
    mockSpeaker = {
      id: 1,
      name: "Test",
      surname: "Testy",
      company: "Test Corp",
      img: "speaker-1",
      desc: "Lorem ipsum"
    };
    bindings = { speaker: mockSpeaker };
  });

  beforeEach(angular.mock.inject(($injector) => {
    $componentController = $injector.get('$componentController');
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
  }));

  it('should bind speaker', () => {
    const ctrl = $componentController("speakerItem", null, bindings);
    expect(ctrl.speaker).toEqual(mockSpeaker);
  })

  it('should show speaker name', () => {
    const scope = $rootScope.$new();
    const element = $compile('<speaker-item></speaker-item>')(scope);
    const speakersCtrl = element.controller("speakerItem");
    speakersCtrl.speaker = mockSpeaker;
    scope.$apply();

    const speakerName = element.find(".speaker-name").html();
    expect(speakerName).toEqual(mockSpeaker.name + ' ' + mockSpeaker.surname);
  });

});