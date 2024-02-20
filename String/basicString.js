// Strings in Javasccript

// Creating Strings in Javascript
const string = new String("Hello World !!");
const string2 = "Hello World !!"; // using double quotes or single quotes
const string3 = `Hello World ${string2}!!`; // Backticks

// Another way to write console statement that nobody tells you
console.log`Hello`; // behaves differently

// Strings length
const strlen = "this is the string";
console.log(strlen);
console.log(strlen.length);

// Accessing Characters
console.log(string[3]);
console.log(string.charAt(3));

// Looping
for (let i = 0; i < strlen.length; i++) {
  // console.log(strlen(i));
}

// Modifying Strings
console.log(strlen.replace("string", "replace string")); // this method didnt modified existing string it returns new string

// Concat
const newStr = strlen.concat(" and this is the concat string that we added");
console.log(newStr);

// Searching in String
strlen.indexOf("string");
strlen.indexOf("g");
console.log(strlen.lastIndexOf("g"));

console.log(newStr.startsWith("t"));
console.log(newStr.endsWith("d"));

// Converting Case
const toBeConverted = {name: "Nachiket"}
String(toBeConverted)
