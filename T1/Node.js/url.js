const url = require('url');

// URL to be parsed
const a = "https://localhost:5001/text/hello.html?user=text&age=20#text";

// Parsing the URL
const parsedUrl = new URL(a);

// Logging the different parts of the URL
console.log("Protocol:", parsedUrl.protocol);  // "https:"
console.log("Host:", parsedUrl.host);          // "localhost:5001"
console.log("Pathname:", parsedUrl.pathname);  // "/text/hello.html"
console.log("Search params:", parsedUrl.search); // "?user=text&age=20"
console.log("Hash:", parsedUrl.hash);          // "#text"

// Accessing individual query parameters
console.log("User:", parsedUrl.searchParams.get('user')); // "text"
console.log("Age:", parsedUrl.searchParams.get('age')); // "20"


// https://username:password@www.example.com:8080/path/to/file?user=admin&age=25#section2

// Breakdown:
// Scheme (Protocol): https

// Username: username (optional)

// Password: password (optional)

// Host: www.example.com

// Port: 8080 (optional)

// Path: /path/to/file

// Query String: ?user=admin&age=25

// Fragment: #section2

const urlString = "https://username:password@www.example.com:8080/path/to/file?user=admin&age=25#section2";
var url1 = new URL(urlString);

// Accessing different URL parts:
console.log(url1.protocol);  // "https:"
console.log(url1.username);  // "username"
console.log(url1.password);  // "password"
console.log(url1.host);      // "www.example.com:8080"
console.log(url1.hostname);  // "www.example.com"
console.log(url1.port);      // "8080"
console.log(url1.pathname);  // "/path/to/file"
console.log(url1.search);    // "?user=admin&age=25"
console.log(url1.hash);      // "#section2"

// Accessing query parameters
console.log(url1.searchParams.get('user'));  // "admin"
console.log(url1.searchParams.get('age'));   // "25"
