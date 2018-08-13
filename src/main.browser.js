import appName from './app/app';

function bootstrapProduction() {
  document.addEventListener("DOMContentLoaded", bootstrap);
}

export default function bootstrap() {
  angular.element(() => angular.bootstrap(document, [appName]));
}

bootstrap();