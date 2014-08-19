/*!
 * shuffle-array - v0.0.2
 *
 * Copyright (c) 2014, Guille Paz <guille87paz@gmail.com>
 * Released under the MIT license.
 */
(function(window) {
'use strict';

/**
 * Randomize the order of the elements in a given array.
 * @param {array} arr - The given array.
 * @param {boolean} [copy] - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
 * @returns {array}
 */
function shuffle(arr, copy) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle expect an array as parameter.');
  }

  var collection = arr,
      len = arr.length,
      random,
      temp;

  if (copy === true) {
    collection = arr.slice();
  }

  while (len) {
    random = Math.floor(Math.random() * len);
    len -= 1;
    temp = collection[len];
    collection[len] = collection[random];
    collection[random] = temp;
  }

  return collection;
};

/**
 * Pick one or more random elements from the given array.
 * @param {array} arr - The given array.
 * @param {number} picks [optional] - Specifies how many random elements you want to pick. By default it picks 1.
 * @returns {Object}
 */
shuffle.pick = function(arr, picks) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle.pick() expect an array as parameter.');
  }

  if (typeof picks === 'number' && picks !== 1) {
    var len = arr.length,
        collection = arr.slice(),
        random = [],
        index;

    while (picks) {
      index = Math.floor(Math.random() * len);
      random.push(collection[index]);
      collection.splice(index, 1);
      len -= 1;
      picks -= 1;
    }

    return random;
  }

  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Expose
 */
// AMD
if (typeof window.define === 'function' && window.define.amd !== undefined) {
  window.define('shuffle-array', [], function () {
    return shuffle;
  });
// CommonJS
} else if (typeof module !== 'undefined' && module.exports !== undefined) {
  module.exports = shuffle;
// Browser
} else {
  window.shuffle = shuffle;
};


}(this));