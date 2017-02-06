import SpeakerListResolve from './speaker-list/speaker-list.resolve';

export default function SpeakersConfig($stateProvider) {
    $stateProvider.state(
         { name: "speakers", url: "/speakers", component: "speakerList", resolve: { speakers: SpeakerListResolve } },
    );
}

SpeakersConfig.$inject = ['$stateProvider'];