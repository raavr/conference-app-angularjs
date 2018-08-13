export default function NewsDetailResolve(NewsService, $transition$) {
  return NewsService.getSingleNews(+$transition$.params().newsId).toPromise();
}

NewsDetailResolve.$inject = ['newsService', '$transition$'];