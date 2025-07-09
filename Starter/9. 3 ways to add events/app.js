// ----------- BAD WAY-----------
// const secondbtn=document.querySelector(".second-btn");
// secondbtn.onclick=function(){
//     console.log("Nirmal loves Nancy");
// }
// ----------- GREAT WAY-----------
// const best=document.querySelector(".best");
// // function greet()
// // {
// //     console.log("Happy Birthday Nancy");
// // }
// best.addEventListener("click",()=>{
//     console.log("Hello Nancy");
// });
// ----------- Event (e) Object -----------

const para=document.querySelector(".para");
para.addEventListener("click",(event)=>{
    console.log(event)
})