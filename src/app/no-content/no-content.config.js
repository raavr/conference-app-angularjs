export default function NoContentConfig($stateProvider) {
  $stateProvider.state(
    {
      name: "no-content",
      url: "/no-content",
      component: "noContent"
    }
  );
}

NoContentConfig.$inject = ['$stateProvider'];