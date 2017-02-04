export default function PresentationListResolve(PresentationService) {
      return PresentationService.getPresentations().toPromise();
}

PresentationListResolve.$inject = ['presentationService'];