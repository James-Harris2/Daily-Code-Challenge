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
. Faster
. Less memory-intensive
. More readable

*/
