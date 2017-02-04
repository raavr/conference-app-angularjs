export default function SpeakerListResolve(SpeakerService) {
      return SpeakerService.getSpeakers().toPromise();
}

SpeakerListResolve.$inject = ['speakerService'];