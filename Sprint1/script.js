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

function backspace(){
    display.value = display.value.slice(0, -1);
}
 
 function calcperc(){
    let valor = parseFloat(display.value);
    if(!isNaN(valor)){
        display.value = valor/100;
    }
    else{
        display.value ='Error';
    }
 }

 function squareroot(){
    let valor = parseFloat(display.value);
    if(!isNaN(valor)){
        display.value = Math.sqrt(valor);
    }
    else{
        display.value ='Error';
    }
 }

 function cuberoot(){
    let valor = parseFloat(display.value);
    if(!isNaN(valor)){
        display.value = Math.cbrt(valor);
    }
    else{
        display.value ='Error';
    }
 }

  function trigonometric(tipo){
    let valor = parseFloat(display.value);
    if(!isNaN(valor)){
        let radianos = valor * (Math.PI/180);
        if(tipo == 'sin') display.value = Math.sin(radianos);
        else if(tipo == 'cos') display.value = Math.cos(radianos);
        else if (tipo == 'tan') display.value = Math.tan(radianos);
    }
    else{
        display.value = 'Error';
    }
  }

   function logarithm(){
    let valor = parseFloat(display.value);
    if(!isNaN(valor)){
        display.value = Math.log10(valor);

    }else{
        display.value ='Error';
    }

   }