function hello() {
    console.log("Hello");
}

hello();

function print1to5() {
    for(let i=1; i<=5; i++) {
        console. log(i);
    }
}

print1to5();


let arr = [1,2,3,4,5];

arr.forEach((el) => {
    console.log(el);
})

let num = [1, 2, 3, 4];
let double = num.map (function(el) {
    return el*2;
}) ;

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 91];
let even = nums.filter( (num) = (num % 2 == 0) );