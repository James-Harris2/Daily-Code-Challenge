
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
