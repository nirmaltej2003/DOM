// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);
// 2. getElementById
console.log(document.getElementById("main"));
// 3. getElementsByClassName
console.log( document.getElementsByClassName("cls"));
// 4. querySelector
console.log(document.querySelector("#id-1"));
// 5. querySelectorAll
console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("li").length);
// ---------------------------------------
// Storing data in variables

const h1=document.querySelectorAll("li");
console.log("h1");