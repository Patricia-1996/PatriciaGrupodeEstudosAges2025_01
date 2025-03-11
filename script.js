let display = document.getElementById('display');

function addvalue(valor){
    display.value += valor;
}

function clean(){ 
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch{
        display.value = 'Error';
    }
}

function del(){
    display.value = display.value.slice(0, -1);
}
 
 function calcporc(){
    let valor = parseFloat(display.value);
    if(!isNaN(valor)){
        display.value = valor/100;
    }
    else{
        display.value ='Error';
    }
 }