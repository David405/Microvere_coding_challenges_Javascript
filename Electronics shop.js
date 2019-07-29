function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let max = -1;
    
    for(let i = 0; i < keyboards.length; i++){
        var temp = 0;
        for(let j = 0; j < drives.length; j++){
            if(keyboards[i] + drives[j] <= b){
                temp = keyboards[i] + drives[j];
                max = temp > max ? temp : max;
            }
        }
    }
    return max;
}