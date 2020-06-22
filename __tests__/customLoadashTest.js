const customLoadash = require('../scripts/customLoadash.js')

const _ = customLoadash

console.log(customLoadash)

test('split an array in to parts of given length',
  () => {
    expect(_.chunk([1, 2, 3, 4], 3))
      .toStrictEqual([[1, 2, 3], [4]]);
  });

test('Creates an array with all falsey values removed. The values `false`, `null`',
  () => {
    expect(_.compact([0, 1, 2, 3, 4, null]))
      .toStrictEqual([1, 2, 3, 4]);
  });

test('Creates an array with all falsey values removed. The values `false`, `null`',
  () => {
    expect(_.compact([false, 0, 1, true, "", null, NaN]))
      .toStrictEqual([1, true]);
  });

test('Creates a slice of `array` with `n` elements dropped from the beginning',
  () => {
    expect(_.drop([1, 2, 3, 4, 5, 6], 3))
      .toStrictEqual([4, 5, 6]);
  });

test('Creates a slice of array excluding elements dropped from the beginning.',
  () => {
    expect(_.dropWhile([1, 2, 3, 4, 5, 6], (o) => o <= 4))
      .toStrictEqual([5, 6]);
  });

test('Creates a slice of array with n elements taken from the beginning.',
  () => {
    expect(_.take([1, 2, 3, 4, 5, 6], 3))
      .toStrictEqual([1, 2, 3]);
  });

test('Iterates over elements of Array, returning an array of all elements predicate returns truthy',
  () => {
    expect(_.filter([1, 2, 3, 4, 5, 6], (o) => o % 2 === 0))
      .toStrictEqual([2, 4, 6]);
  });

test('Iterates over elements of Array, returning an array of all elements predicate returns truthy',
  () => {
    expect(_.filter([1, 2, 3, 4, 5, 6], (o) => o % 2 !== 0))
      .toStrictEqual([1, 3, 5]);
  });

test('Iterates over elements of Array, returning the first element predicate returns truthy for.',
  () => {
    expect(_.find([1, 2, 3, 4, 5, 6], (o) => o % 3 === 0, 3))
      .toBe(6);
  });

test('Checks if value is in Array',
  () => {
    expect(_.includes([1, 2, 3, 4, 5], 3, -4))
      .toBe(true);
  });

test('Creates an array of values by running each element in Array thru iteratee.',
  () => {
    expect(_.map([2, 4, 8], (n) => n * n))
      .toStrictEqual([4, 16, 64]);
  });

test('Creates an array of grouped elements',
  () => {
    expect(_.zip([2, 4, 6], ['A', 'B', 'C'], [true, false, true]))
      .toContainEqual([2, 'A', true], [4, 'B', false], [6, 'C', true]);
  });

// Obejcts

test('sets a key Value Pair for an object, returns the !value!',
  () => {
    expect(_.setProp({}, 'a', 5))
      .toBe(5);
  });

test('merges own and inherited enumerable string keyed properties', () => {
	expect(_.merge({'a': [{ 'b': 2 }, { 'd': 4 }]}, {'a': [{ 'c': 3 }, { 'e': 5 }]}))
	  .toMatchObject({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
  });

test('removes the properies of the object',
  () => {
    expect(_.omit({ a: 1, b: 2, c: 3 }, ['a', 'c']))
      .toMatchObject({ b: 2 });
  });

test('removes the properies of the object for values which doesent return truthy of a function given',
  () => {
    expect(_.omitBy({ a: 1, b: '2', c: 3 }, (a) => typeof a === 'number'))
      .toMatchObject({ b: '2' });
  });

test('Creates an object composed of the picked object properties',
  () => {
    expect(_.pick({ a: 1, b: '2', c: 3 }, ['a', 'c']))
      .toMatchObject({ a: 1, c: 3 });
  });

test('Creates an object composed of the object properties predicate returns truthy for.',
  () => {
    expect(_.pickBy({ a: 1, b: '2', c: 3 }, (a) => typeof a === 'number'))
      .toMatchObject({ a: 1, c: 3 });
  });
  
test('Creates an array of own enumerable string keyed-value pairs for objects',
  () => {
    expect(_.toPairs({ a: '1', b: '2' }))
      .toStrictEqual([['a', 1], ['b', 2]]);
  });