let display = document.getElementById("head_dis");
let num = document.querySelectorAll(".num");
let operator = document.querySelectorAll(".operator");
let equal = document.getElementById("equal");
let clear =  document.getElementById("clear");
let firstNum = "";
let secondNum = "";
let opt = "";
let clr = "";
let isFirst = true;

for(let i =0;i<num.length;i++){
    num[i].addEventListener('click',function(){
        if(isFirst==true){
            firstNum += num[i].innerText;
            display.innerText = firstNum;
        }
        else{
            secondNum += num[i].innerText;
            display.innerText = secondNum;
        }
        
    })
}

for(let i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        isFirst =false;
        opt = operator[i].innerText;
        display.innerText = opt;
    })
}

equal.addEventListener('click',function(){
    display.innerText = calculation(firstNum,secondNum,opt);
})
clear.addEventListener('click',function(){
    display.innerText= clearData();
})

function calculation(firstNum,secondNum,opt){
    switch(opt){
        case "+":{
            return(Number(firstNum) + Number(secondNum));
            break;
        }
        case "-":{
            return(Number(firstNum) - Number(secondNum));
            break;
        }
        case "*":{
            return(Number(firstNum) * Number(secondNum));
            break;
        }
        case "/":{
            return(Number(firstNum)/Number(secondNum));
        }
    }
}

function clearData(clr){
        firstNum = "";
        secondNum ="";
        opt ="";
        isFirst = true;
        return 0;
}