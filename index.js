module = module.exports = function (arr) {
    var len = arr.length,
        random,
        temp;

    if (!Array.isArray(arr)) {
        throw new Error('shuffle-array expect an array as parameter.');
    }

    while (len) {
        random = Math.floor(Math.random() * len);
        len -= 1;
        temp = arr[len];
        arr[len] = arr[random];
        arr[random] = temp;
    }

    return arr;
}