
function display(value) {
    document.getElementById("display").value += value;
}


function clearDis(){
    document.getElementById("display").value = '';
    document.getElementById("input").value = '';
}

function clearRes(){
    document.getElementById("input").value = '';
}

function erase() {
    var inputElement = document.getElementById("display");
    var inputValue = inputElement.value;

    if (inputValue.length > 0) {
        inputValue = inputValue.slice(0, -1);
        inputElement.value = inputValue;
    }
}

function calculate() {
    var inputElement = document.getElementById("display");
    var inputValue = inputElement.value;
    
    if (inputValue.length > 0) {
    var x = document.getElementById("display").value;
    var result = eval(x);
    document.getElementById("input").value = ('= ')+result ;
    }
}

