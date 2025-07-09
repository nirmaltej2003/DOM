// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");
// input.addEventListener("keypress",()=>
// {
//     console.log("Key Pressed");
// })
// input.addEventListener("keyup",()=>
// {
//     console.log("Keyup");
// })
// input.addEventListener("keydown",()=>
// {
//     console.log("Keydown");
// })
input.addEventListener("keypress",(e)=>{
    // console.log(e.charCode)
    // console.log(e.Code)
    // console.log(e.ctrlKey)
    // console.log(e.key)
    console.log(e.shiftKey)
})