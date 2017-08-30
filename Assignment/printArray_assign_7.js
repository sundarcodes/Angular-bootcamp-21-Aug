function printArray() {
    var temp = [];
    var ans= "";
    var ValueArr1 =[1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1];

    for(var i=0;i<ValueArr.length; i++){
        if(temp.indexOf(ValueArr[i]) == -1){
            temp.push(ValueArr[i]);
            ans =+ ValueArr[i]+"/n";
        }
    }
    document.getElementById("ansValue").value = ans;
}



function squash(arr){
    var tmp = [];
    for(var i = 0; i < arr.length; i++){
        if(tmp.indexOf(arr[i]) == -1){
            tmp.push(arr[i]);
        }
    }
    return tmp;
}