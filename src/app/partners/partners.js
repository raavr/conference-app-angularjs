import uiRouter from 'angular-ui-router';
import PartnerService from './partner.service';
import PartnerList from './partner-list/partner-list';
import PartnersConfig from './partners.config';

export default angular.module("partners", [uiRouter, PartnerService, PartnerList])
                      .config(PartnersConfig)
                      .name;