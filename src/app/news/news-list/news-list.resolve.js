import { Observable } from 'rxjs/Observable';
import { TOTAL_NEWS } from '../../app.constant';

export default function NewsListResolve(NewsService) {
      return NewsService.getNews().flatMap(ns => Observable.from(ns)).take(TOTAL_NEWS).toArray().toPromise();
}

NewsListResolve.$inject = ['newsService'];