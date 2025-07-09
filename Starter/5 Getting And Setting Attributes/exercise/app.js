// 1. Select the anchor tag
const a=document.querySelector('a');
console.log(a);
// 2. Use getAttribute(attrName) to check the attribute.
console.log(a.getAttribute("href"));
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)
const two=document.querySelector(".a-two");
two.setAttribute("href", "https://www.google.com");
console.log(two);
