import { NewsComponent } from './news.component';
import NewsFilter from './news-len.filter';

export default angular.module("news.post", [NewsFilter])
  .component("news", NewsComponent)
  .name;