
const pi = 3.14;
let submit = document.getElementById("submitBtn").addEventListener("click",()=>{
    let a  = Number(document.getElementById("num1").value);
    let b= document.getElementById("calc")
    b.style.display='none';
    let r = document.getElementById("print");
    r.innerHTML=`<h2>The are of circle is ${pi*a*a}</h2>`;
    // r.value = pi*a*a;
})