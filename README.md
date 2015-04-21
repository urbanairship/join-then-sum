# join-then-sum

Join an array of objects on a key, then sum elements in the join.

## Example

```javascript
var joinsum = require('join-then-sum')
  , data

data = [
    {
      'i': 0
      'j': 0
      'v': 1
    }
  , {
      'i': 0
      'j': 0
      'v': 2
    }
  , {
      'i': 1
      'j': 0
      'v': 3
    }
  , {
      'i': 1
      'j': 1
      'v': 4
    }
  , {
      'i': 1
      'j': 1
      'v': '5'
    }
]

joinsum(data, ['i', 'j']) 
// returns:
// [
//     {i: 0, j: 0, v: 3}
//   , {i: 1, j: 0, v: 3}
//   , {i: 1, j: 1, v: 9}
// ]
```

Relies on [join-by-keys][join-by-keys] to join arrays of objects, and the sums
up the resulting arrays, leaving join keys alone. Array values are coerced to
Number prior to summing, which means non-coercible values will result in a NaN.

## License

This project is licensed under the Apache License, Version 2.0. See
[LICENSE][license] for the full license.

[join-by-keys]: https://github.com/urbanairship/join-by-keys
[license]: ./LICENSE
