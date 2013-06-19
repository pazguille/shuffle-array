(function (window) {
    'use strict';

    /**
     * Randomize the order of the elements in a given array.
     * @param {arr} arr - The given array.
     * @param {boolean} [copy] - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
     * @returns {array}
     */
    function shuffle(arr, copy) {
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