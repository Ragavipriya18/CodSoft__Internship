document.addEventListener("DOMContentLoaded", function(){
    console.log("document is ready")
    const display =  document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue ="";

    function Result(){
        const result = eval(currentValue);
        currentValue = result.toString();
        display.value = currentValue;

    }

   
   for(let i=0;i<buttons.length;i++){
    const button =  buttons[i];
    button.addEventListener('click',function(){
       const value = button.innerText;


        if(value == "AC"){
            currentValue = "";
            display.value = currentValue;
        }
        else if(value == "="){
            Result();
        }
        else if(value == "+"){
            currentValue += '+';
            display.value = currentValue;
        }
        else if(value == "-"){
            currentValue += '-';
            display.value = currentValue;
        }
        else if(value == "×"){
            currentValue += '*';
            display.value = currentValue;
        }
        else if(value == "÷"){
            currentValue += '/';
            display.value = currentValue;
        }
        else if(value == "%"){
            currentValue += '*0.01';
            display.value = currentValue;
        }
        else if(value == "sin"){
            currentValue += 'Math.sin';
            display.value = currentValue;
        }
        else if(value == "cos"){
            currentValue += 'Math.cos';
            display.value = currentValue;
        }
        else if(value == "tan"){
            currentValue += 'Math.tan';
            display.value = currentValue;
        }
        else if(value == "ln"){
            currentValue += 'Math.log';
            display.value = currentValue;
        }
        else if(value == "Π"){
            currentValue += 'Math.PI';
            display.value = currentValue;
        }
        else if(value == "log"){
            currentValue += 'Math.log10';
            display.value = currentValue;

        }
        else if(value == "e"){
            currentValue += 'Math.E';
            display.value = currentValue;
        }
        else if(value == "√"){
            currentValue += 'Math.sqrt';
            display.value = currentValue;
        }
     
        else{
            
            currentValue +=value;
            console.log("Clicked value:",currentValue);
            display.value = currentValue;
        }

      
    })
   }










});













  