const container = document.querySelector(".container");
createSquares(16);

function randomColor(){
    let r = Math.floor(Math.random() * (256 - 0) ) + 0;
    let g = Math.floor(Math.random() * (256 - 0) ) + 0;
    let b = Math.floor(Math.random() * (256 - 0) ) + 0;
    return "rgb("+r+","+g+","+b+")";
}
    


function createSquares(number){

    container.innerHTML= "";
    for(let i=0; i<number*number;i++){
    let div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseenter",()=>{
        div.style.backgroundColor = randomColor();
        div.style.opacity = 0.1;
    }, {once : true});
    div.addEventListener("mouseenter",()=>{
        console.log(div.style.opacity);
        div.style.opacity = parseFloat(div.style.opacity) +0.1;
    });
    div.style.width = `${(800 / number)-2}px`;
    div.style.height = `${(800 / number)-2}px`;

    container.appendChild(div);
}
}

const button = document.querySelector(".button");
button.addEventListener("click",(e)=> {
    let number = prompt("Enter Number");
    createSquares(number);
});
