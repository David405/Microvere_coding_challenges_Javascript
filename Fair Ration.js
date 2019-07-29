// Complete the fairRations function below.
function fairRations(B) {
    var count = 0;
    
    for(let i=0; i<B.length-1; i++){
        if(B[i]%2!=0){
            count++;
            B[i]++;
            B[i+1]++;
        }
    }
    for(let i=0; i<B.length; i++){
        if(B[i]%2!=0){
            count=-1;
        }
    }
    if(count>-1){
        count=count*2;
        
    } else {
        count = "NO";
    }
    return count;

}
