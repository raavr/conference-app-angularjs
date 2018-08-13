import FullAgendaResolve from './full-agenda/full-agenda.resolve';

export default function AgendaConfig($stateProvider) {
  $stateProvider.state(
    { 
      name: "agenda", 
      url: "/agenda", 
      component: "fullAgenda", 
      resolve: { 
        route: FullAgendaResolve 
      } 
    },
  );
}

AgendaConfig.$inject = ['$stateProvider'];