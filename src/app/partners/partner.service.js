import { Observable } from 'rxjs/Observable';
import { MAX_PARTNERGROUP } from '../app.constant';

export class PartnerService {
    constructor($http) {
        this.$http = $http;
    }

    getPartners(maxPartnersGroup = MAX_PARTNERGROUP.PARTNERPAGE) {
        let resPromise = this.$http.get("/assets/mock-data/mock-partners.json");
        return Observable.fromPromise(resPromise)
            .map(res => res.data.partners)
            .mergeMap(partners => Observable.from(partners))
            .groupBy(partner => partner.type)
            .mergeMap(group => group.reduce((acc, curr) => 
                [...acc, curr], Array())
            )
            .map(pg => ({ type: pg[0].type, items: pg }))
            .take(maxPartnersGroup)
            .toArray();
    }
}

PartnerService.$inject = ['$http'];