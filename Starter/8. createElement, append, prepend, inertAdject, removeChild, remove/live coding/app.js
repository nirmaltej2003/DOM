// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------
const h1=document.createElement("h1");
const body=document.body;
h1.textContent="Nancy";
h1.classList.add("Rolex");
body.appendChild(h1);


const ul=document.querySelector("ul");
const newli=document.createElement("li");
newli.innerText="Hi i am Leo";
ul.append(newli);

const fl=document.querySelector("li");
ul.insertBefore(newli,fl);


const firstp=document.querySelector("p");

firstp.insertAdjacentElement("beforebegin",i);
firstp.insertAdjacentElement("afterbegin",i);
firstp.insertAdjacentElement("afterend",i);
firstp.insertAdjacentElement("beforeend",i);

const section=document.querySelector("section");
const i=document.createElement("i");
i.innerText="Nancy";
i.style.color="skyblue";
section.prepend(i);

const newt=document.querySelector(".new-list");
const fourth=document.querySelector(".fourth")
newt.removeChild(fourth)