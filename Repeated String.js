// Complete the repeatedString function below.
function repeatedString(s, n) {
    
    var strLength = Math.floor(n/s.length);
    var strRemainder = n%s.length;
    var count = 0;
    
    for (let i = 0; i<s.length; i++){
        if (s[i]==='a'){
            count++;
        }
    }
    count = count*strLength;
    
    for (let j=0; j<strRemainder; j++){
        if (s[j]==='a'){
            count++;
        }
    }
    return count;
}