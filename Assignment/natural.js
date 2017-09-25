function natural() {
    var inputValue = 0;
    var factorialValue = 0;
    inputValue = document.getElementById("num").value;
    for(var i=1;i<inputValue;i++){
        factorialValue = factorialValue+i;
    }
    document.getElementById("ansValue").value = factorialValue;
}