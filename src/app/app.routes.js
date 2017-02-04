import SpeakerListResolve from './speakers/speaker-list/speaker-list.resolve';
import PresentationListResolve from './presentations/presentation-list/presentation-list.resolve';
import PartnerListResolve from './partners/partner-list/partner-list.resolve';
import NewsDetailResolve from './news/news-detail/news-detail.resolve';
import NewsListResolve from './news/news-list/news-list.resolve';
import FullAgendaResolve from './agenda/full-agenda/full-agenda.resolve';

export const ROUTES = [
    { name: "home", url: "/", component: "home" },
    { name: "speakers", url: "/speakers", component: "speakers", resolve: { speakers: SpeakerListResolve } },
    { name: "presentations", url: "/presentations", component: "presentations", resolve: { presentations: PresentationListResolve } },
    { name: "partners", url: "/partners", component: "partnerList", resolve: { partnersGroups: PartnerListResolve } },
    { name: "news", url: "/news/{newsId}", component: "newsDetail", resolve: { news: NewsDetailResolve } },
    { name: "newsList", url: "/news", component: "newsList", resolve: { news: NewsListResolve }},//,  resolvePolicy: { async: 'RXWAIT' }}
    { name: "agenda", url: "/agenda", component: "agenda", resolve: { route: FullAgendaResolve }}, 
    { name: "no-content", url: "/no-content", component: "noContent" }
];