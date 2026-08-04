let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
// }

function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Hi i am Code!");
}

btn.addEventListener("click",sayHello);
btn.addEventListener("click",sayName);

// btn.onclick = sayHello;


// Event Listener
// addEventListener

// element.addEventListener( event, callback )

// btn. addEventListener("click", function () {
// console. log ("button clicked");
// }) ;