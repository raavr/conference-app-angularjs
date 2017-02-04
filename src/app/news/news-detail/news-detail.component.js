import './news-detail.component.scss';
import template from './news-detail.component.html';

class NewsDetailController {

    $onInit() {
        this.onList = false;
    }
}

export const NewsDetailComponent = {
    bindings: {
        news: "<"
    },
    template: template,
    controller: NewsDetailController
}