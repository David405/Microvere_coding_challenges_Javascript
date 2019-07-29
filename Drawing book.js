/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    let Total = Math.floor(n/2);

    let turns = Math.floor(p/2);
    
    let inverse = Total-turns;
    
    return Math.min(turns, inverse);
}
