# shuffle-array

Randomize the order of the elements in a given array using the [Fisher-Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

## Installation

    $ component install pazguille/shuffle-array

See: [https://github.com/component/component](https://github.com/component/component)

### Standalone
Also, you can use the standalone version:
```html
<script src="shuffle-array.js"></script>
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
shuffle([1,2,3,4,5], 2); // returns [4, 3]
```

## Contact
- Guillermo Paz (Frontend developer - JavaScript developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
### The MIT License
Copyright (c) 2013 [@pazguille](http://twitter.com/pazguille)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.