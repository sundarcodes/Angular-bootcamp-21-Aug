function naturalCnt() {
    var inputValue = 0;
    var ans = 0;
    //var checkProvider = [3,5]
    inputValue = document.getElementById("num").value;
    for(var i=1;i<inputValue;i++){
        if(i%3 == 0 || i%5 == 0){
            ans = ans+i;
    }
    }
    document.getElementById("ansValue").value = ans;
}
