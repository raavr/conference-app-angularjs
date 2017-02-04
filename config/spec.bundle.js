import 'angular';
import 'angular-mocks/angular-mocks';
import 'babel-polyfill';
import 'rxjs/Rx';

import bootstrapApplication from '../src/main.browser';

let testContext = require.context("../src", true, /.spec$/);
testContext.keys().map(testContext);

bootstrapApplication();