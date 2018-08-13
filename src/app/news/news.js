import uiRouter from 'angular-ui-router';
import NewsList from './news-list/news-list';
import NewsDetail from './news-detail/news-detail';
import NewsConfig from './news.config';
import NewsService from './news.service';

export default angular.module("news", [
  uiRouter, 
  NewsService, 
  NewsList, 
  NewsDetail
]).config(NewsConfig)
  .name;