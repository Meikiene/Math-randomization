//Create an array of adjectives or adverbs
var adjWords = [
"kind",
"smart",
"funny",
"strong"
];
//Ask a person for his or her name
var userAnswer = prompt("Enter First Name");
//Generate a random number
var x = Math.floor(Math.random() * adjWords.length);
//Let the user know what kind of person are. For example,
//username followed or preceded by the array item.
window.alert(adjWords[x] + " " + userAnswer);
