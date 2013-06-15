(function (window) {
    'use strict';

    /**
     * Randomize the order of the elements in a given array.
     * @param {arr} arr - The given array.
     * @returns {array}
     */
    function shuffle(arr) {
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

    /**
     * Expose Shuffle
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('shuffle', [], function () {
            return shuffle;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = shuffle;

    // Default
    } else {
        window.shuffle = shuffle;
    }

}(this));