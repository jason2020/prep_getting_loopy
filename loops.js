// Do your work here

/* Challenge 1
var array = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];
var length = array.length;

for (var i = 0; i < length; i++) {
	console.log("Value of i is:" + i);
	console.log("Value at Index is: " + array[i]);
}
*/


/* Challenge 2
var evenNumberArray = [];

for (var i = 0; i < 50; i++) {
	evenNumberArray.push(i * 2);
}

console.log(evenNumberArray);
*/

/*
var oopsArray = ['turn' , , 'down' , , 'for' , , 'what'];
var length = oopsArray.length;

for (var i = 1; i < length; i++) {
	if (i % 2 !== 0) {
		oopsArray.splice(i, 1, "nope");
	}
}

console.log(oopsArray);
*/

var oopsArray = [ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ];
var length = oopsArray.length;

for (var i = length - 1; i >= 0; i--) {
	console.log(oopsArray[i]);
}