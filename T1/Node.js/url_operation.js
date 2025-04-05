const url = require("url");
function evaluate(input) {
  const parsedUrl = url.parse(input, true);
  const query = parsedUrl.query; // Extract query parameters
  let a = parseInt(query.a);
  let b = parseInt(query.b);
  let c = parseInt(query.c);
  let d = parseInt(query.d);
  // Check if all parameters are >0
  if (a < 0 || b < 0 || c < 0 || d < 0) {
    return "Invalid input. Please provide valid numbers";
  }
  const result = a * c - a / d + b;
  console.log(`Result of expression (a*c - a/d + b) = ${result}`);
}

module.exports = evaluate;
