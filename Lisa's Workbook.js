// Complete the workbook function below.
function workbook(n, k, arr) {
    let specialProblem=0;
    let page = 1;
    
    for (let i=0; i<arr.length; i++){
        const problem = arr[i];
        
        for(let p = 1; p <= problem; p++) {
            if(p === page) {
                specialProblem++;
            }  
        if(p !== problem && p % k === 0) {
                page++;
            }
        }
        page++;
    }
    return specialProblem;
}
