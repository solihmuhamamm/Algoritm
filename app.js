//-----------masala1--------------
function summOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(summOfArray([1, 2, 3, 4, 5]));
//-----------masala2--------------
function generateAndSumm(sum) {
  var result = 0;
  for (var i = 1; i <= sum; i++) result += i;
  console.log(result);
}
generateAndSumm(10);
