export default function AppConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/no-content');
    $locationProvider.html5Mode(true);
}

AppConfig.$inject = ['$urlRouterProvider', '$locationProvider'];