// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
    let count = 0;
for (let start = 0, end = arr.length - 3; start <= end; start++) {
    const num1 = arr[start] + d;
    const num2 = num1 + d;
    if (arr.includes(num1) && arr.includes(num2))
        count += 1;
}
return count;
}