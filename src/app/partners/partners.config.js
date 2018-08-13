import PartnerListResolve from './partner-list/partner-list.resolve';

export default function PartnersConfig($stateProvider) {
  $stateProvider.state(
    { 
      name: "partners", 
      url: "/partners", 
      component: "partnerList", 
      resolve: { 
        partnersGroups: PartnerListResolve 
      } 
    }
  );
}

PartnersConfig.$inject = ['$stateProvider'];