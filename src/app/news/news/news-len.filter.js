function MaxLenFilter() {
  return (text, maxLen) => text.length > maxLen 
    ? (text.slice(0, maxLen) + "...") 
    : text;
}

export default angular.module("news.filter", [])
  .filter("maxLen", MaxLenFilter)
  .name;