# shuffle-array [![Build Status](https://secure.travis-ci.org/pazguille/shuffle-array.png)](http://travis-ci.org/pazguille/shuffle-array) [![devDependency Status](https://david-dm.org/pazguille/shuffle-array/dev-status.png)](https://david-dm.org/pazguille/shuffle-array#info=devDependencies)

> Randomize the order of the elements in a given array using the [Fisher-Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

## Installation

    $ component install pazguille/shuffle-array

See: [https://github.com/component/component](https://github.com/component/component)

    $ npm install shuffle-array

### Standalone
Also, you can use the standalone version:
```html
<script src="dist/shuffle-array.js"></script>
```

## How-to
```js
var shuffle = require('shuffle-array'),
    collection = [1,2,3,4,5];

shuffle(collection);

console.log(collection); // returns [4, 3, 1, 5, 2]
```

## API

### shuffle(arr, [copy])
Randomizes the order of the elements in a given `array`.
- `arr` - The given array.
- `copy` [optional] - Sets if should return a shuffled copy of the given array. By default it's a falsy value.

```js
shuffle([1,2,3,4,5]); // returns [4, 3, 1, 5, 2]

// Return a copy of the given array
shuffle([1,2,3,4,5], true); // returns [4, 3, 1, 5, 2] (copied)
```

### shuffle.pick(arr, [picks])
Pick one or more `random` elements from the given `array`.
- `arr` - The given array.
- `picks` [optional] - Specifies how many random elements you want to pick. By default it picks 1.

```js
shuffle.pick([1,2,3,4,5]); // returns 5

// Return a random collection with 2 elements
shuffle.pick([1,2,3,4,5], 2); // returns [4, 3]
```

## Maintained by
- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
Licensed under the MIT license.

Copyright (c) 2014 [@pazguille](http://twitter.com/pazguille).
