import './news-list.component.scss';
import template from './news-list.component.html';

class NewsListController {

    $onInit() {
        this.onList = true;
    }
}

export const NewsListComponent = {
    bindings: {
        news: "<"
    },
    template: template,
    controller: NewsListController
}