function reversenum(num) {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);

    num = parseInt(num / 10);
  }
  return rev;
}
function square(num) {
  return num * num;
}
function checknum(num) {
  a = square(num); 
  b = square(reversenum(num)); 
  if (a == reversenum(b)) {
    console.log("Equal");
  } else {
    console.log("Not equal");
  }
}
module.exports.checknum = checknum
