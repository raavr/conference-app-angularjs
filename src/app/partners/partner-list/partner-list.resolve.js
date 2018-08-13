export default function PartnerListResolve(PartnerService) {
  return PartnerService.getPartners().toPromise();
}

PartnerListResolve.$inject = ['partnerService'];