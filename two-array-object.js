/**
 * Convert the keys array into an object using Array.prototype.reduce.
 *  In the reduce callback function, set the current value as a key in
 *  the accumulator object, with the value set to whatever element is
 *  at the current index in the values array.
 *
 *  MDN reduce -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */
 function twoArrayObject(keys, values) {
    return keys.reduce((obj, cur, idx) => {
      obj[cur] = idx < values.length ? values[idx] : null;
      return obj;
    }, {});
  }
  
/*
twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

*/
