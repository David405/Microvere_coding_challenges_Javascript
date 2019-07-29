// Complete the timeInWords function below.
function timeInWords(h, m) {
    
    let a = [
  "o' clock", 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
  'twenty','twenty one','twenty two','twenty three','twenty four',
  'twenty five', 'twenty six', 'twenty seven' , 'twenty eight',
  'twenty nine','half'
  ];

  if (m<30 && m>0){
  if (m ==15){
  return a[m] +" past " +a[h];
  }
  else{
  if (m==1){
  return a[m] +" minute past " +a[h];
  }
  else{
  return a[m] +" minutes past " +a[h];
  }
  }
  }
  else{
  if (m>30){

  if (m==45){
  return a[60-m] +" to " +a[h+1];
  }
  else{
  return a[60-m] +" minutes to " +a[h+1];
  }
  }
  }
  if (m==30){
  return a[m]+" past "+a[h];
  }
  return a[h] +' '+ a[m];

}