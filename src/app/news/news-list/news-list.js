import { NewsListComponent } from './news-list.component';
import NewsCategories from '../news-categories/news-categories';
import News from '../news/news';

export default angular.module("news.list", [News, NewsCategories])
                      .component("newsList", NewsListComponent)
                      .name;