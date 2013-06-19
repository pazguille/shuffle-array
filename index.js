/**
 * Randomize the order of the elements in a given array.
 * @param {array} arr - The given array.
 * @param {boolean} [copy] - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
 * @returns {array}
 */
module = module.exports = function (arr, copy) {

    if (!Array.isArray(arr)) {
        throw new Error('shuffle-array expect an array as parameter.');
    }

    var aray = arr,
        len = arr.length,
        random,
        temp;

    if (copy === true) {
        aray = arr.slice();
    }

    while (len) {
        random = Math.floor(Math.random() * len);
        len -= 1;
        temp = aray[len];
        aray[len] = aray[random];
        aray[random] = temp;
    }

    return aray;
};