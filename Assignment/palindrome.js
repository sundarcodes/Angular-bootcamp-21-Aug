function ChechPalindrom() {
    var revStr= "";
    var ans ="";
    var str = document.getElementById("str").value;
    for(var j = str.length ; j>=0 ; j--){
        revStr = revStr+str.charAt(j);
    }
    if (str == revStr){
        ans =  str+" is palindrome";
    }else{
        ans =  str+" is not a palindrome";
    }
    document.getElementById("ansStr").value = ans;
}
