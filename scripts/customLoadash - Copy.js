const chunks = (array, chunkSize = 1) => {
	let chunkArr = []
	let tmpArr = []
	for (let i = 0; i <= array.length; i++) {

		if (i === 0) {
			tmpArr[tmpArr.length] = array[i]
		}

		if (i % chunkSize !== 0 && array[i] !== undefined) {
			tmpArr[tmpArr.length] = array[i]
		}

		if (i % chunkSize === 0 && i !== 0 && array[i] !== undefined) {
			chunkArr[chunkArr.length] = tmpArr
			tmpArr = []
			tmpArr[tmpArr.length] = array[i]
		}

		if (i === array.length) {
			chunkArr[chunkArr.length] = tmpArr
		}
	}
	return chunkArr
}

chunks(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 3) // 8 / 9
chunks(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 3) // 9 / 10 / 7
chunks(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], 7) // 

const compact = (array) => {
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== false && array[i] !== '' && array[i] !== null && array[i] !== undefined && !isNaN(array[i]) && array[i] !== 0) {
			newArray[newArray.length] = array[i]
		}
	}
	return newArray
}

compact([0, 1, false, 2, '', 3, null, NaN])

const concat_ = (array1, array2) => {
	let longer = array1
	let shorter = array2
	if (array1.length < array2.length) {
		longer = array2
		shorter = array1
	}
	for (let i = 0; i < longer.length; i++) {
		shorter[shorter.length] = longer[i]
	}
	return shorter
}

concat_([1],[2, [3], [[4]]])
concat_([1, 4, 6], [5, "d", [345], [[4354]]])


const drop = (array, num = 1) => {
	let droppedArr = []

	for (let i = array.length - 1; i >= num; i--) {
		droppedArr[droppedArr.length] = array[i]
	}
	let tmpArr = []
	for (let i = droppedArr.length - 1; i >= 0; i--) {
		tmpArr[tmpArr.length] = droppedArr[i]
	}
	droppedArr = tmpArr
	return droppedArr
}

drop([1, 2, 3])
drop([1, 2, 3], 2)
drop([1, 2, 3], 5)
drop([1, 2, 3], 0)

let users = [
	{ 'user': 'barney',  'active': false },
	{ 'user': 'fred',    'active': false },
	{ 'user': 'pebbles', 'active': true }
]

const dropWhile = (array, func) => {
	let dropWhileArr = []
	for (let i = 0; i < array.length; i++) {
		if(func[array[i]]) {
			continue
		}
		dropWhileArr[dropWhileArr.length] = array[i]
	}
	return dropWhileArr
}

dropWhile(users, function(o) { return !o.active; })


const take = (array, num = 1) => {
	const takeArr = []
	let smaller = num
	if (array.length < num) {
		smaller = array.length
	}
	for (let i = 0; i < smaller; i++) {
		takeArr[takeArr.length] = array[i]
	}
	return takeArr
}

take([1, 2, 3])
take([1, 2, 3], 2)
take([1, 2, 3], 5)
take([1, 2, 3], 0)

let users2 = [
	{ 'user': 'barney', 'age': 36, 'active': true },
	{ 'user': 'fred',   'age': 40, 'active': false }
  ];

const filter = (array, func) => {
	const fileteredArr = [];
    for (let i = 0; array.length > i; i ++) {
		if (func(array[i])) {
			fileteredArr[fileteredArr.length] = array[i]
		  }
	}
    return fileteredArr;
  }

filter(users2, function(o) { return !o.active; })

let users3 = [
	{ 'user': 'barney',  'age': 36, 'active': true },
	{ 'user': 'barney',  'age': 36, 'active': true },
	{ 'user': 'fred',    'age': 40, 'active': false },
	{ 'user': 'pebbles', 'age': 1,  'active': true }
  ]

const find = (array, func, index = 0) => {
	const foundArr = []
	for(let i = index; i < array.length; i++) {
		if(func(array[i])){
			foundArr[foundArr.length] = array[i]
		}
	}
	return foundArr
}

find(users3, function(o) { return o.age < 40; }, 1)


const includes = (collection, search, index = 0) => {
	if (index < 0) {
		index = collection.length + index
	}
	if(Array.isArray(collection)) {
		for (let i = index; i< collection.length; i++) {
			if (collection[i] === search) {
				return true
			}
		}
	}
	if (typeof collection === 'object' && !Array.isArray(collection)){
		const keys = Object.keys(collection)
		for(let i = index; i < keys.length; i++) {
			if (collection[keys[i]] === search) {
				return true
			}
			return false
		}
	}
	if (typeof collection === 'string') {
		if(collection.includes(search)) {
			return true
		}
	}
	return false
}

includes([1, 2, 3], 1)
includes([1, 2, 3], 1, 2)
includes({ 'a': 1, 'b': 2 }, 1)
includes('abcd', 'bc')

const square = (n) => {
	return n * n
}

const map = (collection, func) => {
	const mapArr = []
	if (Array.isArray(collection)) {
		for (let i = 0; i < collection.length; i++) {
			mapArr[mapArr.length] = func(collection[i])
		}
	}
	if (typeof collection === 'object' && !Array.isArray(collection)) {
		const keys = Object.keys(collection)
		for (let i = 0; i < keys.length; i++) {
			mapArr[mapArr.length] = func(collection[keys[i]])
		}
	}
	return mapArr
}

map([4, 8], square)
map({ 'a': 4, 'b': 8 }, square)


const zip = (...array) => {
	let argsArr = []
	argsArr[argsArr.length] = array
	let zippedArr = []
	zippedArr.length = 2
	zippedArr[0] = []
	zippedArr[1] = []
	for (let i = 0; i < argsArr.length; i++) {
		for (let j = 0; j < argsArr[i].length; j++) {
			for (let k = 0; k < argsArr[i][j].length; k++) {
				if (k % 2 === 0) {
					zippedArr[0][zippedArr[1].length] = argsArr[i][j][k]
				}
				if (k % 2 !== 0) {
					zippedArr[1][zippedArr[1].length] = argsArr[i][j][k]
				}
			}
		}
	}
	return zippedArr
}

zip(['a', 'b'], [1, 2], [true, false])
zip(['a', 'b', 'c', 'd'], [1, 2, 3, 4], [true, false, 'else', 'what'])

const merge = (obj1, obj2) => {
	let obj1Key = Object.keys(obj1)
	let finalObject = {}
	finalObject[obj1Key] = []
	for (let i = 0; i < obj1[obj1Key].length; i++) {
		finalObject[obj1Key][i] = { ...obj1[obj1Key][i], ...obj2[obj1Key][i] }
	}
	return finalObject
}

var object = {
	'a': [{ 'b': 2 }, { 'd': 4 }]
  }
   
var other = {
	'a': [{ 'c': 3 }, { 'e': 5 }]
  }
merge(object, other)


const setProp = (obj, propName, propValue) => {
    return obj[propName] = propValue;
  }

const omit = (obj, stringOrStingArray) => {
	const omittedObj = {};
	const paths = stringOrStingArray;
	let i;
	for (i in obj) {
		let keyNotInPaths = true;
		for (let j = 0; j < paths.length; j += 1) {
		if (paths[j] === i) {
			keyNotInPaths = false;
		}
		}
		if (keyNotInPaths) {
			setProp(omittedObj, i, obj[i]);
		}
	}
	return omittedObj;
	
}

const objectToOmit = { 'a': 1, 'b': '2', 'c': 3 };
omit(objectToOmit, ['a', 'c'])

const omitBy = (object, func) => {
	let finalObject = {}
	for (let [key, value] of Object.entries(object)){
		if (!func(value)) {
			setProp(finalObject, key, value)
		}
		
	}
	return finalObject
}

omitBy(objectToOmit, function(o){return o > 1})

const objectToPick = { a: 1, b: 2, c: 3 };

const pick = (object, whatToPick) => {
	let finalObject = {}
	for (let [key, value] of Object.entries(object)){
		for (let i = 0; i < whatToPick.length; i++){
			if (key === whatToPick[i]) {
				setProp(finalObject, key, value)
			}
		}
	}
	return finalObject
}


pick(objectToPick, ['a', 'c'])

const pickBy = (object, func) => {
	let finalObject = {}
	for (let [key, value] of Object.entries(object)){
		if (func(key)) {
			setProp(finalObject, key, value)
		}
		
	}
	return finalObject
}

pickBy(objectToPick, function(o){return o === 'a' || o === 'b'})

function Foo() {
	this.a = 1;
	this.b = 2;
  }
   
Foo.prototype.c = 3;

const toPairs = (object) => {
    let arrayOfPairs = []
	for (let [key, value] of Object.entries(object)) {
		arrayOfPairs[arrayOfPairs.length] = [key, value]
	}
    return arrayOfPairs
  }

toPairs(new Foo)