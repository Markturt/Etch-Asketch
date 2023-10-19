let sides=parseInt(prompt("Enter the number of squares per side",16));

let container=document.querySelector(".Container");
let color=document.querySelector('input[type="color"]');
let disPlay=document.querySelector(".display");

if(sides<=100){ 
    for(let i=1;i<=sides;i++){
        let divRow=document.createElement("div");
        let rowWidth=1200;

        divRow.className="Row"+ i;
        divRow.style.display="flex";
        divRow.style.width=rowWidth+"px";
        for(let j=1;j<=sides;j++){
            let divColumn=document.createElement("div");
            let button=document.createElement("button");

            divColumn.className="Column" + j;
            divColumn.style.width=(rowWidth/sides)+"px";
            button.style.padding="auto";
            button.style.height="20px";
            button.style.width="100%" ;
            button.style.backgroundColor="lightgrey";
            button.style.boxSizing="border-box";
            divColumn.style.margin="2px";

            button.addEventListener("mouseout",(e)=>{
                button.style.backgroundColor=color.value;
            });
            button.addEventListener("mouseover",(e)=>{
                button.style.backgroundColor="lightgrey";
            });
            divColumn.appendChild(button);
            divRow.appendChild(divColumn);
        }
        container.appendChild(divRow);
        container.style.width=rowWidth+"px";
        container.style.border="3px solid red";
    }
}
else{
    disPlay.style.display="none";
}
