
function add(i,j){
    return i+j;
}

function subtract(i,j){
    return i-j;
}

const divide = (i,j)=>{
    return i/j;
}

const multiple=(i,j)=>{
    return i*j;
}

let a= parseInt(prompt("Enter a value"));
let b= parseInt(prompt("Enter b value"));
let i=0
while(i++<5){
    let inp = parseInt(
        prompt(
            "Enter 1 for Add, 2 for Subtract, 3 for Multiply, 4 for Divide: "
        )
    );
switch (inp) {
    case 1:
        // console.log(add(a,b));
        alert("Addition is "+add(a,b));
        break;
    case 2:
        // console.log(subtract(a,b));
        alert("Subtraction is "+subtract(a,b));
        break;
    case 3:
        // console.log(multiple(a,b));
        alert("Multiplication is "+multiple(a,b))
        break;
    case 4:
        // console.log(divide(a,b));
        alert("Division is "+divide(a,b))
        break;
    default:
        console.log("Choose proper inp")
        break;
}
}