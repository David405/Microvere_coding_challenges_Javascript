// Complete the equalizeArray function below.
function equalizeArray(arr) {
    
    arr.sort((a, b) => a - b);
    let count = 0, j = 0;
    
        for(let i = 1; i<arr.length; i++){
            if(arr[j] != arr[i]){
              j++;
             count++;
           }
        }
        return count;
}
