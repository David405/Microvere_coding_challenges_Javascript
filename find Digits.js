// Complete the findDigits function below.
function findDigits(n) {
    let divisibleDigits = 0;
   let integer = n.toString().split("");
 
   integer.forEach(digit => {
     if (n % parseInt(digit) === 0) {
       divisibleDigits++;
     }
   });
   return divisibleDigits;
 }