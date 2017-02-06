export default function HomeConfig($stateProvider) {
    $stateProvider.state(
         { name: "home", url: "/", component: "home" }
    );
}

HomeConfig.$inject = ['$stateProvider'];