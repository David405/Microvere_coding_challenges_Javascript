// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {
    var count = 0;
 var temp_count = Math.floor( n / c );
 while( true ) {
     var free_choco = temp_count + (count % m);
     count += temp_count;

     if( free_choco < m ) {
         break;
     }

     temp_count = Math.floor(free_choco / m);
 }

 return count;
}
