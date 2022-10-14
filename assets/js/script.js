
// scrivo nel display 
function n(number){
    document.getElementById('display').value += number;  
}

// Calcolo il risultato
function result(){
    document.getElementById("display").value=eval(document.getElementById("display").value);
}

// Pulisco il display
function clean(){
    document.getElementById('display').value="";
}

// calcolo radice quadrata

function square(){
    document.getElementById('display').value= Math.sqrt(eval(document.getElementById('display').value))
}

// calcolo quarato

function power(){
    document.getElementById('display').value= Math.pow(eval(document.getElementById('display').value), 2)
}