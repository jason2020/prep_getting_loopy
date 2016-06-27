// Do your work here

/* Challenge 1 Presidents
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

function loop(array) {
	var length = array.length;

	for (var i = 0; i < length; i++) {
		console.log("Value of i is:" + i);
		console.log("Value at Index is: " + array[i]);
	}
}

loop(presidents);
*/

/* Challenge 2 The string of numbers
var stringOfNumbers = '';

function loop(str) {
	for (var i = 10; i < 21; i++) {
		str += i;
	}
	console.log(str)
}

loop(stringOfNumbers);
*/


/* Challenge 3 Add only even numbers
var evenNumberArray = [];

function loop(array) {
	for (var i = 0; i < 51; i++) {
		array.push(i * 2);
	}
	console.log(array);
}

loop(evenNumberArray);
*/

/* Challenge 4 add nope to every odd index
var oopsArray = ['turn' , , 'down' , , 'for' , , 'what'];


function loop(array) {
	var length = array.length;
	for (var i = 1; i < length; i++) {
		if (i % 2 !== 0) {
			array.splice(i, 1, "nope");
		}
	}
	console.log(array);
}

loop(oopsArray);
*/

/* Challenge 5 show the array backwards
var oopsArray = [ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ];

function loop(array) {
	var length = array.length;

	for (var i = length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

loop(oopsArray);
*/

/* Challenge 6 isNaptime
var isNapTime = false;
var napSchedule = [false, false, true, false, true, true];

function nap(schedule) {
	if (schedule == true) {
		console.log("ZzZzZzZz");
	} else {
		console.log("Gotta get to work!");
		isNapTime = true;
	}
}

function loop(array) {
	var length = array.length;
	for (i = 0; i < length; i++) {
		nap(array[i]);
	}
}

loop(napSchedule);
*/

/* Copy Array
var copyOfValuesArray = [];
var valuesArray = [99, 66, 829, 1941, 8, 76];

function copyArray (originArray, destinationArray) {
	var length = originArray.length;
	for (var i = 0; i < length; i++) {
		destinationArray.push(originArray[i]);
	}
}

copyArray(valuesArray, copyOfValuesArray);

console.log(valuesArray);
console.log(copyOfValuesArray);
*/

/* Only Strings
var miscStorage =  [[], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush'];
function generateArrayOfStrings(storage) {
	var array = [],
		length = miscStorage.length;
	for (var i = 0; i < length; i++) {
		if (typeof miscStorage[i] === "string") {
			array.push(miscStorage[i]);
		}
	}
	return array;
}

console.log(generateArrayOfStrings(miscStorage));
*/

var currentClass = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
]

function graduateAndSetNewClass(class_) {
	var length = class_.length
	for (var i = 0; i < length; i++) {
		if (class_[i].enrolled == true) {
			class_[i].graduated = true;
		} else {
			class_[i].enrolled = true;
		}
	}
}

graduateAndSetNewClass(currentClass);
console.log(currentClass);