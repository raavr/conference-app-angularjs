import { ROUTES } from './app.routes';

export default function AppConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    ROUTES.forEach((route) => $stateProvider.state(route));
    $urlRouterProvider.otherwise('/no-content');
    $locationProvider.html5Mode(true);
}

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];