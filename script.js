let show = document.getElementById("showWork");
let row = document.getElementsByClassName("row");
let showDiv = document.getElementById("work3");

showDiv.onclick = function(){
    for(let i=0; i<row.length; i++){
        row[i].classList.remove("rowHidden");
        showDiv.style.display = "none";
    }
}

let testmonial = document.getElementsByClassName("testmonial");
let dot = document.getElementsByClassName("dot");

let index = 1;



function testPrikaz(x){

    if(x > dot.length) { index = 1; }
    if(x < 1) { index = dot.length; }

    for(let i=0; i<dot.length; i++){
        dot[i].className = dot[i].className.replace(" active", "");
    }
    for(let i=0; i<testmonial.length; i++){
        testmonial[i].style.display = "none";
    }

    testmonial[index-1].style.display = "block";
    dot[index-1].classList += " active";
}

function tacke(x){
    testPrikaz(index = x);
}

function leftRight(x){
    testPrikaz(index += x);
}

testPrikaz(index);
