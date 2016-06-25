// Do your work here

/* Challenge 1
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

/* Challenge 2
var stringOfNumbers = '';

function loop(str) {
	for (var i = 10; i < 21; i++) {
		str += i;
	}
	console.log(str)
}

loop(stringOfNumbers);
*/


/* Challenge 3
var evenNumberArray = [];

function loop(array) {
	for (var i = 0; i < 51; i++) {
		array.push(i * 2);
	}
	console.log(array);
}

loop(evenNumberArray);
*/

/* Challenge 4
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

/* Challenge 5
var oopsArray = [ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ];

function loop(array) {
	var length = array.length;

	for (var i = length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

loop(oopsArray)
*/