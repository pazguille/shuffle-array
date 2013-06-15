module = module.exports = function (arr) {
    var len = arr.length,
        random,
        temp;

    while (len) {
        random = Math.floor(Math.random() * len);
        len -= 1;
        temp = arr[len];
        arr[len] = arr[random];
        arr[random] = temp;
    }

    return arr;
}