// Complete the encryption function below.
function encryption(s) {
    let rows = Math.floor(Math.sqrt(s.length));
let columns = Math.ceil(Math.sqrt(s.length));
while ((rows*columns)< s.length){
rows++;
}

let message = '';

for (let i=0; i<columns;i++){
for (let j=0; j<rows;j++){
let char= s[i + j*columns]
if (char==null){
message += '';
}
else{
message += char;

}
console.log(message);

}
message += ' ';
}

return message
}

