function onSubmit() {
    var inputValue;
    var ans = 0;
    var cnt = 0;
    //var checkProvider = [3,5]
    inputValue = document.getElementById("num").value;
    for(i = inputValue;i > 1; i--){
       if(i && !(i&(i-1))){
           cnt++;
       }
    }
      document.getElementById("ansValue").value = cnt;
}