import { PartnerListComponent } from './partner-list.component';
import PartnerGroup from '../partner-group/partner-group';

export default angular.module("partners.partner-list", [PartnerGroup])
  .component("partnerList", PartnerListComponent)
  .name;