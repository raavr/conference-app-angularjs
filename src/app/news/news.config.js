import NewsListResolve from './news-list/news-list.resolve';
import NewsDetailResolve from './news-detail/news-detail.resolve';

export default function NewsConfig($stateProvider) {
  $stateProvider
    .state(
      {
        name: "newsList",
        url: "/news",
        component: "newsList",
        resolve: {
          news: NewsListResolve
        }
      }
    ).state(
      {
        name: "news",
        url: "/news/{newsId}",
        component: "newsDetail",
        resolve: {
          news: NewsDetailResolve
        }
      }
    );
}

NewsConfig.$inject = ['$stateProvider'];