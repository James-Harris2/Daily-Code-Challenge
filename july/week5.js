
/*
edabit.com used

*/

// Convert Age to Days
// create a function that takes the age in years and returns the age in days

// calcAge(65) => 23725
// calcAge(0) => 0
// calcAge(20) => 7300

const calcAge = age => age * 365;

calcAge(65)
// 23725

// Write a function that returns the string "something" joined with a space " " and the given argument a.


function giveMeSomething(a){
    return `something ${a}`
}

// Math.pow()

function cubes(a){
    return a ** 3
}

// console.log(Math.pow(7,3))


/*
Given an n-sided regular polygon n, 
return the total sum of internal angles (in degrees).

sumPolygon(3) ➞ 180

sumPolygon(4) ➞ 360

sumPolygon(6) ➞ 720

*/

function sumPolygon(n){
    return (n-2) * 180
}

console.log(sumPolygon(3))
console.log(sumPolygon(4));


/*
Create a function that takes length
 and width and finds the perimeter of a rectangle.
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22

*/

function findPerimeter(length, width){
    return (length + width) * 2;
}

console.log(findPerimeter(6, 7))
console.log(findPerimeter(20,11))

/*

Write a function that takes
an integer minutes and converts it to seconds.

convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120

*/

function convert(minutes){
    return minutes * 60;
}
console.log(convert(5))
console.log(convert(23));

// Write a function that converts hours into seconds.
/*
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400
*/

function howManySeconds(s){
    return 3600 * s
}
console.log(howManySeconds(2))
console.log(howManySeconds(10));
console.log(howManySeconds(24));

/*
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, 
otherwise return false.
lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true

*/

function lessThanOrEqualToZero(num) {
	return num <= 0;
}
console.log(lessThanOrEqualToZero(5))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))
