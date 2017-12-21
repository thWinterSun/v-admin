export function getCookie () {
    let arr = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr === document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}
