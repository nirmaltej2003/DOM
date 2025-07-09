// href
const a=document.querySelector('a');
console.log(a.href="www.youtube.com");
// value
const input=document.querySelector('input');
// console.log(input.value);
// type
console.log(input.type);
// getAttribute(attrName)
console.log(input.getAttribute("Value"));
console.log(input.getAttribute("type"));
// setAttribute(attrName, value)
console.log( input.setAttribute("value","Nancy"));
input.setAttribute("type","password");
input.setAttribute("placeholder","Enter the password");
