import { NewsDetailComponent } from './news-detail.component';
import NewsCategories from '../news-categories/news-categories';
import News from '../news/news';

export default angular.module("news.detail", [
  News, 
  NewsCategories
]).component("newsDetail", NewsDetailComponent)
  .name;