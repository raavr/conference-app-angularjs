import CollapseNavbarDirective from './collapse-navbar.directive';
import { NavbarComponent } from './navbar.component';

export default angular.module("navbar", [])
  .directive("collapseNavbar", CollapseNavbarDirective)
  .component("navbar", NavbarComponent)
  .name;