const container = document.querySelector(".container");
createSquares(16);


    


function createSquares(number){

    container.innerHTML= "";
    for(let i=0; i<number*number;i++){
    let div = document.createElement("div");
    div.classList.add("square");
        div.addEventListener("mouseenter",()=>{
        div.classList.add("color");
    });
    div.style.width = `${100 / number}%`;
    container.appendChild(div);
}
}

const button = document.querySelector(".button");
button.addEventListener("click",(e)=> {
    let number = prompt("Enter Number");
    createSquares(number);
});
