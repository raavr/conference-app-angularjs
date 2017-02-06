import AppFooterModule from './app-footer';

describe("AppFooterComponent", () => {

    let $rootScope, $compile;
    beforeEach(angular.mock.module(AppFooterModule));
    beforeEach(angular.mock.inject(($injector) => {
        $rootScope = $injector.get("$rootScope");
        $compile = $injector.get("$compile");
    }));

    it('should display "Code of conduct" text', () => {

        let scope = $rootScope.$new();
        let element = $compile("<app-footer></app-footer>")(scope);
        let content = element.find(".footer-nav-list > li > a").html();
        scope.$apply();

        expect(content).toContain("Code of conduct");
    })

});