import chalk from "chalk"
import validator from "validator"

var e1 = "lju@gmail.com"
var e2 = ""
var e3 = "lju"

console.log(validator.isEmail(e1),validator.isLowercase(e3),chalk.blue.underline.bold(validator.isEmpty(e2))) //true true true

// Email Validation:

// validator.isEmail('email@example.com'): Checks if the string is a valid email address.

// URL Validation:

// validator.isURL('https://example.com'): Checks if the string is a valid URL.

// String Validation:

// validator.isAlpha('Hello'): Checks if the string contains only letters.

// validator.isAlphanumeric('Hello123'): Checks if the string contains only letters and numbers.

// Number Validation:

// validator.isNumeric('123'): Checks if the string is numeric.