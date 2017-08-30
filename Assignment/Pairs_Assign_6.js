function pairsArray() {
    var inputValue = 0;
    var ans = "";
    var ValueArr =  [1, 4, 3, 5, 4, 6, 7, 8, 3];
    var ValueArr2 =[1, 4, 3, 5, 4, 6, 7, 8, 3];
    inputValue = document.getElementById("num").value;
    for(var i=0;i<ValueArr.length;i++){
        for(var j=0;j<ValueArr2.length;j++){
            if(i != j){
                if((ValueArr[i]+ ValueArr2[j]) == inputValue){
                    ans +='"'+ValueArr[i] +","+ ValueArr2[j]+'"'+"\n";
                    ValueArr.splice(j,1);
                }
            }

        }

    }
    document.getElementById("ansValue").value = ans;
}
