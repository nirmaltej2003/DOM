const first=document.querySelector("li");
console.log(first.parentElement.parentElement.parentElement.parentElement);
let ul=document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[1].innerText);

let li=document.querySelector("li");
console.log(li.nextElementSibling.textContent);
console.log(li.nextElementSibling.nextElementSibling.textContent);

let fourth=document.querySelector(".fourth");
console.log(fourth.previousElementSibling.previousElementSibling.textContent);
