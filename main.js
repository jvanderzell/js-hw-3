$(document).ready(function() {
	console.log("ready!");

//Exercise #1
for (var i = 0; i < 101; i++) {
	console.log(i, "* 9 = ", i*9);
};




//Exercise #2
var classmates = ["Lucille", "Michael", "George Michael"];

for (var i = 0; i < classmates.length; i++) {
	console.log(classmates[i], " is in the class");
};

//Exercise #3
for (var i = 1; i < 101; i++) {
	if(i%15===0) {
		console.log("FizzBuzz");
	} else if(i%3===0) {
		console.log("Fizz");
	} else if(i%5===0) {
		console.log("Buzz")
	} else {
	 console.log(i);
	}
};


});