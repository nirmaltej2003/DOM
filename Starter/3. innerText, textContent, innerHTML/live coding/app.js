// innerText
// textContent
// innerHTML
const p=document.querySelector('p');
console.log(p.innerText);
console.log(p.textContent);
console.log(p.innerHTML);

const h=document.querySelector('h1');
h.innerText='Hello ';
h.innerHTML='<span>World</span>';