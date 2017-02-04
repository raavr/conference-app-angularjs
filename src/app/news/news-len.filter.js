export function MaxLenFilter() {
    return function(text, maxLen) {
        return text.length > maxLen ? (text.slice(0, maxLen) + "...") : text; 
    }
}