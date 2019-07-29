// Complete the hurdleRace function below.
function hurdleRace(k, height) {
    
    let max = Math.max(...height);
    let dose;
    
    if ( max>k ){
        dose = max-k;
    } else {
        return 0;
    }
    return dose;
}