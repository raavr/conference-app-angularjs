function MaxLenFilter() {
    return function(text, maxLen) {
        return text.length > maxLen ? (text.slice(0, maxLen) + "...") : text; 
    }
}

export default angular.module("news.filter", [])
                      .filter("maxLen", MaxLenFilter)
                      .name;