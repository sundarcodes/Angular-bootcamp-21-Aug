function fizzCnt() {
    var inputValue = 0;
    var ans = "";
    //var checkProvider = [3,5]
    inputValue = document.getElementById("num").value;
    for(var i=1;i<=inputValue;i++){
        if(i%3 == 0 ){
            ans += (i == inputValue) ? "Fizz" :  "Fizz"+",";
        }else if (i%5 == 0){
            ans += (i == inputValue) ? "Buzz" : "Buzz"+",";
        }else{
            ans += (i == inputValue) ? i : i+",";
        }
    }
    document.getElementById("ansValue").value = ans;
}