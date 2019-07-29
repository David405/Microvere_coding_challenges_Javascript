function pickingNumbers(a) {
    // Write your code here
     
    var mySet= new Set();
    var maxCount=0;
    for(var i=0; i<a.length; i++){
        var count=0;
        if(!mySet.has(a[i])){
            mySet.add(a[i]);
            for(var j=0; j<a.length; j++){
                if(a[j]==a[i] || a[j]==a[i]+1){
                    count++;
                }       
            }
            maxCount= Math.max(maxCount,count);
        }
    }
    return maxCount;
}