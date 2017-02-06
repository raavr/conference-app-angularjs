import PresentationListResolve from './presentation-list/presentation-list.resolve';

export default function PresentationsConfig($stateProvider) {
    $stateProvider.state(
        { name: "presentations", url: "/presentations", component: "presentationList", resolve: { presentations: PresentationListResolve } },
    );
}

 PresentationsConfig.$inject = ['$stateProvider'];