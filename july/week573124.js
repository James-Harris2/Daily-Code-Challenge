// JS Algo & DataS Part 1

/*
LECTURE notes

write a func that calculates
the sum of ALL numbers
1 up to (n)

*/

function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i; 
    }
    return total;
}

console.log(addUpTo(6)) /* 21*/


/*

WHAT DOES BETTER MEAN?
. Faster (How long does it take to execute)
. Less memory-intensive
. More readable

*/

function addUpTo(n){
    return n * (n + 1) / 2;
}
console.log(addUpTo(10))

/*

function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i
    }
    return total;
}


// Testing the speed and performance of the addUpTo ****Long func*****

var t1 = performance.now();
addUpTo(100000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

*/



// THis ALGO RUNS FASTER || MORE EFFICIENT


/*
function addUpTo(n){
    return n * (n + 1) / 2;
}

var time1 = performance.now()
addUpTo(100000000)
var time2 = performance.now()
console.log(`Time Elasped: ${(time2 - time1) / 1000} seconds.`)

*/