// Basic JS

// Comment Your JavaScript Code

// This is an in-line comment

/* This is a 
multi-line comment */

// Declare JavaScript Variables
/*
var myName;
*/

// Storing Values with the Assignment Operator
/*
var a;
a = 7;
*/

// Assigning the Value of One Variable to Another
/*
var a;
a = 7;
var b;
b = a;
*/

// Initializing Variables with the Assignment Operator
/*
var a = 9;
*/

// Declare String Variables
/*
var myFirstName = "Azeem";
var myLastName = "Qamar";
*/

// Understanding Uninitialized Variables
/*
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
*/

// Understanding Case Sensitivity in Variables
/*
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
*/

// Explore Differences Between the var and let Keywords
/*
let catName = "Oliver";
let catSound = "Meow!";
*/

// Declare a Read-Only Variable with the const Keyword
/*
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";

console.log(FCC, fact);
*/

// Add Two Numbers with JavaScript
/*
const sum = 10 + 10;
*/

// Subtract One Number from Another with JavaScript
/*
const difference = 45 - 33;
*/

// Multiply Two Numbers with JavaScript
/*
const product = 8 * 10;
*/

// Divide One Number by Another with JavaScript
/*
const quotient = 66 / 33;
*/

// Increment a Number with JavaScript
/*
let myVar = 87;

myVar = ++ myVar;

console.log(myVar)
*/

// Decrement a Number with JavaScript
/*
let myVar = 11;
myVar = -- myVar;

console.log(myVar)
*/

// Create Decimal Numbers with JavaScript
/*
let myDecimal = 5.7;
*/

// Multiply Two Decimals with JavaScript
/*
const product = 2.0 * 2.5;
*/

// Divide One Decimal by Another with JavaScript
/*
const quotient = 4.4 / 2.0;
*/

// Finding a Remainder in JavaScript
/*
const remainder = 11 % 3;
*/

// Compound Assignment With Augmented Addition
/*
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
*/

// Compound Assignment With Augmented Subtraction
/*
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1
*/

// Compound Assignment With Augmented Multiplication
/*
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
*/

// Compound Assignment With Augmented Division
/*
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;
*/

// Escaping Literal Quotes in Strings
/*
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
*/

// Quoting Strings with Single Quotes
/*
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
*/

// Escape Sequences in Strings

/*
String Special Chars

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

*/
/*
const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';
console.log(myStr);
*/

// Concatenating Strings with Plus Operator
/*
const myStr = 'This is the start. ' + 'This is the end.';
*/

// Concatenating Strings with the Plus Equals Operator
/*
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.'
console.log(myStr)
*/

// Constructing Strings with Variables
/*
const myName = "Azeem";
const myStr = "My name is " + myName + ' and I am well';
*/

// Appending Variables to Strings
/*
const someAdjective = 'fun';
let myStr = 'Learning to code is ';
myStr += someAdjective;
*/

// Find the Length of a String
/*
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
*/

// Use Bracket Notation to Find the First Character in a String
/*
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);
*/

// Understand String Immutability
/*
let myStr = "Jello World";
myStr = 'Hello World';
*/

// Use Bracket Notation to Find the Nth Character in a String
/*
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);
*/

// Use Bracket Notation to Find the Last Character in a String
/*
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);
*/

// Use Bracket Notation to Find the Nth-to-Last Character in a String
/*
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);
*/

// Word Blanks
/*
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "A " + myAdjective + " " + myNoun + " " + myVerb + " away " + myAdverb + " after seeing an angry man holding a rifle.";
console.log(wordBlanks);
*/

// Store Multiple Values in one Variable using JavaScript Arrays
/*
const myArray = ['AQ', 10];
*/

// Nest one Array within Another Array
/*
const myArray = [['AQ', 10], ['MQ', 12]];
*/

// Access Array Data with Indexes
/*
const myArray = [50, 60, 70];
const myData = myArray[0];
*/

// Modify Array Data With Indexes
/*
const myArray = [18, 64, 99];
myArray[0] = 45;
*/

// Access Multi-Dimensional Arrays With Indexes
/*
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
const myData = myArray[2][1];
*/

// Manipulate Arrays With push() (.push() insert element at an end of array)
/*
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
*/

// Manipulate Arrays With pop() (.pop() removes last element of array)
/*
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
*/

// Manipulate Arrays With shift() (.shift() removes first element of array)
/*
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
*/

// Manipulate Arrays With unshift() (.unshift insert elements at the beginning of array)
/*
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
*/

// Shopping List
/*
const myList = [];
myList.push(
    ['Tissue Roll', 4], 
    ['Surf', 1], 
    ['Milkpak', 33], 
    ['Ketchup', 1], 
    ['Soap', 12], 
    ['Cooking Oil', 6]);
*/

// Write Reusable JavaScript with Functions
/*
function reusableFunction() {
    console.log('Hi World');
}
reusableFunction();
*/

// Passing Values to Functions with Arguments
/*
function functionWithArgs(val1, val2) {
    console.log(val1 + val2);
}
functionWithArgs(3, 9);
*/

// Return a Value from a Function with Return
/*
function timesFive(val) {
    return val * 5;
}
const answer = timesFive(8);
*/

// Global Scope and Functions
/*
// Declare the myGlobal variable below this line

let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;
}

// Only change the code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun2();
*/

// Local Scope and Functions
/*
function myLocalScope() {
    let myVar = 5;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);
*/

// Global vs. Local Scope in Functions (if both variables have same name, local variables inside function will take precedence over global variablels)
/*
const outerWear = 'T-Shirt';

function myOutfit() {
    let outerWear = 'sweater';
    return outerWear;
}
let answer = myOutfit();
console.log(answer);
*/

// Understanding Undefined Value returned from a Function (function return 'undefined' when return is not defined in function)
/*
let sum = 0;

function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum = sum + 5;
}


addThree();
addFive();
*/

// Assignment with a Returned Value
/*
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
*/

// Stand in Line (watch vid.)
/*
function nextInLine(arr, item) {
    arr.push(item);
    item = arr.shift();
    return item;
}
nextInLine([], 1);

const testArr = [1, 2, 3, 4, 5];

console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));
*/

// Understanding Boolean Values
/*
function welcomeToBooleans() {

    return true;
}
*/

// Use Conditional Logic with If Statements
/*
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return 'Yes, that was true'
    }
    return 'No, that was false';
}
*/

// Comparison with the Equality Operator
/*
function testEqual(val) {
    if (val == 12) {
        return 'Equal';
    }
    return 'Not Equal';
}

testEqual(10);
*/

// Comparison with the Strict Equality Operator
/*
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);
*/

// Practice comparing different values
/*
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");
*/

// Comparison with the Inequality Operator
/*
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);
*/

// Comparison with the Strict Inequality Operator
/*
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);
*/

// Comparison with the Greater Than Operator
/*
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}

testGreaterThan(10);
*/

// Comparison with the Greater Than Or Equal To Operator
/*
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);
*/

// Comparison with the Less Than Operator
/*
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);
*/

// Comparison with the Less Than Or Equal To Operator
/*
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);
*/

// Comparisons with the Logical And Operator
/*
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
        }

    return "No";
}

testLogicalAnd(10);
*/

// Comparisons with the Logical Or Operator
/*
function testLogicalOr(val) {
    if (val > 20 || val < 10) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);
*/

// Introducing Else Statements
/*
function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }   else {
        result = "5 or Smaller";
    }
    return result;
}

testElse(4);
*/

// Introducing Else If Statements
/*
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }   else if (val < 5) {
        return "Smaller than 5";
    }   else {
        return "Between 5 and 10";
    }
}

testElseIf(7);
*/

// Logical Order in If Else Statements
/*
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }   else if (val < 10) {
        return "Less than 10";
    }   else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);
*/

// Chaining If Else Statements
/*
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }   else if (num < 10) {
        return "Small";
    }   else if (num < 15) {
        return "Medium";
    }   else if (num < 20) {
        return "Large";
    }   else if (num >= 20) {
        return "Huge";
    }
    return "Change Me";
}

testSize(7);
*/

// Golf Code
/*
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }   else if (strokes <= par - 2) {
        return names[1];
    }   else if (strokes == par - 1) {
        return names[2];
    }   else if (strokes == par) {
        return names[3];
    }   else if (strokes == par + 1) {
        return names[4];
    }   else if (strokes == par + 2) {
        return names[5];
    }   else {
        return names[6];
    }
    return "Change Me";
}
golfScore(5, 4);
*/

// Selecting from Many Options with Switch Statements
/*
function caseInSwitch(val) {
    let answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break
    }

    return answer;
}

caseInSwitch(1);
*/

// Adding a Default Option in Switch Statements
/*
function switchOfStuff(val) {
    let answer = val;
    switch(answer) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff"
    }
    return answer;
}

console.log(switchOfStuff(1));
*/

// Multiple Identical Options in Switch Statements
/*
function sequentialSizes(val) {
    let answer = val;
    switch(answer) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

sequentialSizes(1);
*/

// Replacing If Else Chains with Switch
/*
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
  }
  
  chainToSwitch(7);
  */

// Returning Boolean Values from Functions
/*
function isLess(a, b) {
    return a < b;
}

isLess(10, 15);
*/

// Return Early Pattern for Functions (function exits at return statement without executing code below it)
/*
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
*/

// Counting Cards
/*
let count = 0;

function cc(card) {
    if (card >= 2 && card <= 6) {
        count = count + 1;
    }   else if (card >= 7 && card <= 9) {
        count = count + 0;
    }   else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
        count = count - 1
    }
    if (count > 0) {
        return count + " Bet";    
    }   else if (count <= 0) {
        return count + " Hold";
    }
    return "Change Me";
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
*/

// Build JavaScript Objects
/*
const myDog = {
    "name": "Rocky",
    "legs": 4,
    "tails": 1,
    "friends": ["Rob", "Alex", "Stu"]
};
*/

// Accessing Object Properties with Dot Notation
/*
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
*/

// Accessing Object Properties with Bracket Notation (If the property of the object you are trying to access has a space in its name, you will need to use bracket notation. However, you can still use bracket notation on object properties without spaces.)
/*
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];
*/

// Accessing Object Properties with Variables
/*
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 16;
const player = testObj[playerNumber];
*/

// Updating Object Properties
/*
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder"
*/

// Add New Properties to a JavaScript Object
/*
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
myDog.bark = "woof";
*/

// Delete Properties from a JavaScript Object
/*
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.tails
*/

// Using Objects for Lookups
/*
function phoneticLookup(val) {
    let result = "";
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];
    return result;
}

phoneticLookup("charlie");
*/

// Testing Objects for Properties
/*
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp) == true) {
        return obj[checkProp];
    }   else {
        return "Not Found"
    }
    return "Change Me!";
}
*/

// Manipulating Complex Objects
/*
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Jennifer Lopez",
        "title": "Tourist",
        "release_year": 1999,
        "formats": [
            "CD",
            "Cassette",
            "VHS"
        ],
        "gold": false
    }
];
*/

// Accessing Nested Objects
/*
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
*/

// Accessing Nested Arrays
/*
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
*/

// Record Collection
/*
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: [
            'Let It Rock',
            'You Give Love a Bad Name'
        ]
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: [
            '1999', 
            'Little Red Corvette'
        ]
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, val) {
    if (val == "") {
        delete records[id][prop];
    }   else if (prop != "tracks") {
        records[id][prop] = val;
    }   else if (prop == "tracks" && records[id].hasOwnProperty(prop) == true) {
        records[id][prop].push(val);
    }   else if (prop == "tracks" && records[id].hasOwnProperty(prop) == false) {
        records[id][prop] = [val];
    }
    return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 1245, "tracks", "Love Affair");
updateRecords(recordCollection, 2468, "tracks", "Vertigo");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")

console.log(recordCollection[5439].tracks);
*/

// Iterate with JavaScript While Loops
/*
const myArray = [];
let i = 5;

while (i >= 0) {
    myArray.push(i);
    i--;
}

console.log(myArray);
*/

// Iterate with JavaScript For Loops (for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.)
/*
const myArray = [];

for (let i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray)
*/

// Iterate Odd Numbers With a For Loop
/*
const myArray = [];

for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);
*/

// Count Backwards With a For Loop
/*
const myArray = [];

for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);
*/

// Iterate Through an Array with a For Loop
/*
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);
*/

// Nesting For Loops
/*
function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
*/

// Iterate with JavaScript Do...While Loops (Do-While loop will always execute once without evaluating condition. Must initialize variable before loop or it will never end)
/*
const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
}   while (i < 5);

console.log(myArray);
console.log(i);
*/

// Replace Loops using Recursion (recursive function calls itself inside its body. Recursive function must always have a condition to stop calling itself, otherwise, it will call itself indefinitely)
/*
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }   else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([1, 5, 8, 10, 20, 30], 5));
*/

// Profile Lookup
/*
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["Javascript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let i = contacts.length; i > 0; i--) {
        if (contacts[i - 1]["firstName"] != name) {
            continue;
        }   else if (contacts[i - 1]["firstName"] == name && contacts[i - 1].hasOwnProperty(prop) == true) {
            return contacts[i - 1][prop]; 
        }   else if (contacts[i - 1]["firstName"] == name && contacts[i - 1].hasOwnProperty(prop) == false) {
            return "No such property";
        }   
    }
    return "No such contact"
}

console.log(lookUpProfile("Akira", "likes"));
*/

// Generate Random Fractions with JavaScript
/*
function randomFraction() {
    return Math.random();
}

console.log(randomFraction());
*/

// Generate Random Whole Numbers with JavaScript
/*
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());
*/

// Generate Random Whole Numbers within a Range
/*
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(randomRange(1, 2));
*/

// Use the parseInt Function (parseInt converts string into integer)
/*
function convertToInteger(str) {
    return parseInt(str);
}

console.log(parseInt("56"));
*/

// Use the parseInt Function with a Radix
/*
function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"));
*/

// Use the Conditional (Ternary) Operator
/*
function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}

console.log(checkEqual(9, 9));
*/

// Use Multiple Conditional (Ternary) Operators
/*
function checkSign(num) {
    return (num === 0) ? "zero"
    : (num > 0) ? "positive"
    : "negative";
}

console.log(checkSign(-100));
*/

// Use Recursion to Create a Countdown
/*
function countdown(n) {
    if (n < 1) {
        return [];
    }   else {
        const countArr = countdown(n - 1);
        countArr.unshift(n);
        return countArr;
    }
}

console.log(countdown(10));
*/
/*
function countdown(n) {
    if (n < 1) {
        console.log('At the end of recursion. Creating and returning an empty array.');
        return [];
    }   else {
        const arr = countdown(n - 1);
        console.log("Got the following array back from the recursive call:");
        console.log(JSON.stringify(arr));
        arr.unshift(n);
        console.log("Prefixing it with " + n + " and returning the result:");
        console.log(JSON.stringify(arr));
        return arr;
    }
}

let result = countdown(5);

console.log(result);
*/

// Use Recursion to Create a Range of Numbers
/*
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    }   else {
        const arr = rangeOfNumbers(startNum + 1, endNum);
        arr.unshift(startNum);
        return arr;
    }      
}

console.log(rangeOfNumbers(1, 10));
*/

// JS ES6

// Compare Scopes of the var and let Keywords
/*
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

checkScope();
*/

// Mutate an Array Declared with const
/*
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return console.log(s);
}

editInPlace();
*/

// Prevent Object Mutation
/*
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); 
*/
/*
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    }   catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj()

console.log(PI);
*/

// Use Arrow Functions to Write Concise Anonymous Functions

/* In JavaScript, we often don't need to name our functions, 
especially when passing a function as an argument to another 
function. Instead, we create inline functions. We don't need 
to name these functions because we do not reuse them anywhere 
else.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 provides us with the syntactic sugar to not have to 
write anonymous functions this way. Instead, you can use 
arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
When there is no function body, and only a return value, 
arrow function syntax allows you to omit the keyword return 
as well as the brackets surrounding the code. This helps 
simplify smaller functions into one-line statements:

// const myFunc = () => "value";
// This code will still return the string value by default.

console.log(myFunc);
*/
/*
const magic = () => new Date();

console.log(magic);
*/

// Write Arrow Functions with Parameters

/*
Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item * 2;
doubler(4);
doubler(4) would return the value 8.

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;
It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2) would return the value 8.
*/
/*
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
*/

// Set Default Parameters for Your Functions
/*
const increment = (number, value = 1) => number + value;

console.log(increment(2));
*/

// Use the Rest Parameter with Function Parameters
/*
const sum = (...args) => {
    //const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(3, 5, 5, 10));
*/

// Use the Spread Operator to Evaluate Arrays In-Place (Spread operator (...) unpacks or spread the array)
/*
const arr = [6, 89, 3, 45];
console.log(...arr);

the spread operator only works in-place, like in an argument 
to a function or in an array literal. The following code 
will not work:

const spreaded = ...arr;


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);
*/

// Use Destructuring Assignment to Extract Values from Objects

/*
Destructuring assignment is special syntax introduced in ES6, 
for neatly assigning values taken directly from an object.

Consider the following ES5 code:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
name would have a value of the string John Doe, and age would 
have the number 34.

Here's an equivalent assignment statement using the ES6 
destructuring syntax:

const { name, age } = user;
Again, name would have a value of the string John Doe, and 
age would have the number 34.

Here, the name and age variables will be created and assigned 
the values of their respective values from the user object. 
You can see how much cleaner this is.

You can extract as many or few values from the object as you 
want.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;

console.log(today, tomorrow);
*/

// Use Destructuring Assignment to Assign Variables from Objects

/*
Destructuring allows you to assign a new variable name when 
extracting values. You can do this by putting the new name 
after a colon when assigning the value.

Using the same object from the last example:

const user = { name: 'John Doe', age: 34 };
Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
You may read it as "get the value of user.name and assign it 
to a new variable named userName" and so on. The value of 
userName would be the string John Doe, and the value of 
userAge would be the number 34.


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

console.log(highToday, highTomorrow);
*/

// Use Destructuring Assignment to Assign Variables from Nested Objects
/*
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

console.log(lowToday, highToday);
*/

// Use Destructuring Assignment to Assign Variables from Arrays (comma is used to navigate the array index)
/*
let a = 8, b = 6;
[a, b] = [b, a];
console.log(a, b);
*/

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
/*
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
*/

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
/*
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};"

const half = ({max, min}) => (max + min) / 2;

console.log(half(stats));
*/

// Create Strings using Template Literals
/*
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);
*/

// Write Concise Object Literal Declarations Using Object Property Shorthand
/*
const createPerson = (name, age, gender) => ({name, age, gender})

console.log(createPerson('Azeem', 33, "Male"));
*/

// Write Concise Declarative Functions with ES6
/*
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
*/

// Use class Syntax to Define a Constructor Function (Constructor Function act as a blueprint to define new functions quickly)(constructor method must be defined inside class)
/*
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);
*/

// Use getters and setters to Control Access to an Object
/*
class Thermostat {
    constructor(f) {
        this._f = f;
    }   get temperature() {
            return (5 / 9) * (this._f - 32);
    }   set temperature(c) {
            return this._f = (c * 9) / 5 + 32;
    }
}   

const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
*/

// Create a Module Script
/*
<script type="module" src="index.js"></script>
*/

// Use export to Share a Code Block
/*
const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase();
}

export {uppercaseString, lowercaseString};
*/
// Reuse JavaScript Code Using import
/*
import {uppercaseString, lowercaseString} from './string_functions.js'
console.log(uppercaseString('asd'));
*/

// Use * to Import Everything from a File
/*
import * as stringFunctions from './string_functions.js';
*/

// Create an Export Fallback with export default
/*
export default function subtract(x, y) {
    return x - y;
}
*/

// Import a Default Export
/*
import subtract from './string_functions.js';
console.log(subtract(7, 4));
*/

// Create a JavaScript Promise
/*
const makeServerRequest = new Promise((resolve, reject) => {

});
*/

// Complete a Promise with resolve and reject
/*
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
    if (responseFromServer) {
        resolve('We got the data');
    }   else {
        reject('Data not received');
    }
});
*/

// Handle a Fulfilled Promise with then
/*
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
    if (responseFromServer) {
        resolve('We got the data');
    }   else {
        reject('Data not received');
    }
});

makeServerRequest.then(result => {
    console.log(result)
});
*/

// Handle a Rejected Promise with catch
/*
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
    if (responseFromServer) {
        resolve('We got the data');
    }   else {
        reject('Data not received');
    }
});

makeServerRequest.then(result => {
    console.log(result);
})  .catch(error => {
    console.log(error);
});
*/

// JS Regex

// Using the Test Method
/*
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

console.log(result);
*/

// Match Literal Strings
/*
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

console.log(result);
*/

// Match a Literal String with Different Possibilities
/*
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

console.log(result);
*/

// Ignore Case While Matching
/*
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

console.log(result);
*/

// Extract Matches
/*
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result);
*/

// Find More Than the First Match
/*
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

console.log(result);
*/

// Match Anything with Wildcard Period
/*
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

console.log(result);
*/

// Match Single Character with Multiple Possibilities
/*
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

console.log(result);
*/

// Match Letters of the Alphabet
/*
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

console.log(result);
*/

// Match Numbers and Letters of the Alphabet
/*
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

console.log(result);
*/

// Match Single Characters Not Specified
/*
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

console.log(result);
*/

// Match Characters that Occur One or More Times
/*
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

console.log(result);
*/

// Match Characters that Occur Zero or More Times
/*
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
let chewieRegex = /Aa*/;    /*
let result = chewieQuote.match(chewieRegex);

console.log(result);
*/

// Find Characters with Lazy Matching
/*
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result  = text.match(myRegex);

console.log(result);
*/

// Find One or More Criminals in a Hunt
/*
let str1 = 'C';
let str2 = 'CC';
let str3 = 'P1P5P4CCCcP2P6P3';
let str4 = 'P6P2P7P4P5CCCCCP3P1'
let str5 = ''
let str6 = 'P1P2P3'
let str7 = 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'

let reCriminals = /C+/g;
let result = str7.match(reCriminals);

console.log(result);
*/

// Match Beginning String Patterns
/*
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

console.log(result);
*/

// Match Ending String Patterns
/*
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

console.log(result);
*/

// Match All Letters and Numbers
/*
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);
*/

// Match Everything But Letters and Numbers
/*
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result);
*/

// Match All Numbers
/*
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

console.log(result);
*/

// Match All Non-Numbers
/*
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

console.log(result);
*/

// Restrict Possible Usernames
/*
let username = "JackOfAllTrades";
let username2 = "JACK";
let username3 = "J";
let username4 = "Jo";
let username5 = "Oceans11";
let username6 = "RegexGuru";
let username7 = "007";
let username8 = "9"
let username9 = "A1"
let username10 = "BadUs3rnam3";
let username11 = "Z97";
let username12 = "c57bT3";
let username13 = "AB1"
let username14 = "J%4"
let userCheck = /^[a-z]{2,}$|(^[a-z]+([0-9]+){2,}$)|^[a-z]{2,}\d$/gi
let result = userCheck.test(username12);
let rcheck = username14.match(userCheck);

console.log(rcheck);
console.log(result);
*/

// Match Whitespace
/*
let sample = "Whitespace is important in seperating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

console.log(result);
*/

// Match Non-Whitespace Characters
/*
let sample = "Whitespace is important in seperating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

console.log(result);
*/

// Specify Upper and Lower Number of Matches
/*
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/g;
let result = ohRegex.test(ohStr);

console.log(result);
*/

// Specify Only the Lower Number of Matches
/*
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

console.log(result);
*/

// Specify Exact Number of Matches
/*
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);

console.log(result);
*/

// Check for All or None
/*
let favWord = "favorite";
let favWordBrit = "favourite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
let result2 = favRegex.test(favWordBrit);

console.log(result, result2);
*/

// Positive and Negative Lookahead
/*
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2,})/g
let result = pwRegex.test(sampleWord);
let result2 = sampleWord.match(pwRegex);

console.log(result2, result);
*/

// Check For Mixed Grouping of Characters
/*
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) ([\S]* |[\s]*)Roosevelt$/;
let result = myRegex.test(myString);
let result2 = myString.match(myRegex);

console.log(result2, result);
*/

// Reuse Patterns Using Capture Groups
/*
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
let result2 = repeatNum.match(reRegex);

console.log(result, result2);
*/

// Use Capture Groups to Search and Replace
/*
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);

console.log(result);
*/

// Remove Whitespace from Start and End
/*
let hello = "   Hello, World!  ";
let wsRegex = /(\s+)(\s+)/g;
let result = hello.replace(wsRegex, "")
//let result = hello.match(wsRegex);

console.log(result);
*/

// JS Debugging

// Use the JavaScript Console to Check the Value of a Variable
/*
let a = 5;
let b = 1;
a++;
console.log(a);
let sumAB = a + b;
console.log(sumAB);
*/

// Understanding the Differences between the freeCodeCamp and Browser Console
/*
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();
*/

// Use typeof to Check the Type of a Variable
/*
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof(seven));
console.log(typeof(three));5
*/

// Catch Misspelled Variable and Function Names
/*
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
*/

// Catch Unclosed Parentheses, Brackets, Braces and Quotes
/*
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);
*/

// Catch Mixed Usage of Single and Double Quotes
/*
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
*/

// Catch Use of Assignment Operator Instead of Equality Operator
/*
let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
    result = "Equal!";
}   else {
    result = "Not equal!";
}

console.log(result);
*/

// Catch Missing Open and Closing Parenthesis After a Function Call
/*
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result = getNine();
console.log(result);
*/

// Catch Arguments Passed in the Wrong Order When Calling a Function
/*
function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);

console.log(power);
*/

// Catch Off By One Errors When Using Indexing
/*
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    for (let i = 0; i < len; i++) {
        console.log(firstFive[i]);
    }
}

countToFive();
*/

// Use Caution When Reinitializing Variables Inside a Loop
/*
function zeroArray(m, n) {
    let newArray = [];
    //let row = [];
    for (let i = 0; i < m; i++) {
        let row = []
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
for (i of matrix) {
    console.log(i);
}
*/

// Prevent Infinite Loops with a Valid Terminal Condition
/*
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}
myFunc();
*/

// JS Basic Data Structures

// Use an Array to Store a Collection of Data
/*
let yourArray = [1, 'two', true, 3, 4];
console.log(yourArray.length);
*/

// Access an Array's Contents Using Bracket Notation
/*
let myArray = ["a", "b", "c", "d"];
myArray[1] = 2;

console.log(myArray);
*/

// Add Items to an Array with push() and unshift()
/*
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
}


console.log(mixedNumbers(['IV', 5, 'six']));
*/

// Remove Items from an Array with pop() and shift()
/*
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
*/

// Remove Items Using splice()
/*
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);
*/

// Add Items Using splice()
/*
function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
*/

// Copy Array Items Using slice()
/*
function forecast(arr) {
    let newArr = arr.slice(2, 4);
    return newArr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
*/

// Copy an Array with the Spread Operator
/*
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));
*/

// Combine Arrays with the Spread Operator
/*
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}

console.log(spreadOut());
*/

// Check For The Presence of an Element With indexOf()
/*
function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

// Iterate Through All an Array's Items Using For Loops
/*
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) < 0) {
            //console.log(i.indexOf(elem))
            newArr.push(arr[i]);
        }   else {
            continue;
        }
    }
    return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
*/

// Create complex multi-dimensional arrays
/*
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', ['shift', 6, 7, 'deep'], 1000, 'method'],
    ['concat', [false, true, ['spread', 'array', 'deeper']]],
    ['mutate', 1327.98, ['splice', ['slice', ['push', 'deepest']]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
*/

// Add Key-Value Pairs to JavaScript Objects
/*
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);
*/

// Modify an Object Nested Within an Object
/*
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45;

console.log(userActivity);
*/

// Access Property Names with Bracket Notation
/*
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}

console.log(checkInventory('apples'));
*/

// Use the delete Keyword to Remove Object Properties
/*
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
*/

// Check if an Object has a Property
/*
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj){
    if ('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj) {
        return true;
    }   else {
        return false;
    }
}

console.log(isEveryoneHere(users));
*/

// Iterate Through the Keys of an Object with a for...in Statement
/*
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
};

function countOnline(userObj) {
    let ol = 0;
    for (let user in users) {
        //console.log(user);
        if (userObj[user].online == true) {
            ol += 1;
        }   else {
            continue;
        }
    }
    return ol;
}

console.log(countOnline(users));
*/

// Generate an Array of All Object Keys with Object.keys()
/*
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age:32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
*/

// Modify an Array Stored in an Object
/*
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));
*/

// Basic Algorithm Scripting

// Convert Celsius to Fahrenheit
/*
function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

console.log(convertToF(30));
*/

// Reverse a String
/*
function reverseString(str) {
    let revArr = []
    for (let i of str) {
        revArr.push(i);
    }
    revArr = revArr.reverse();
    return revArr.join('');
}

console.log(reverseString("hello"));
*/

// Factorialize a Number
/*
function factorialize(num) {
    let product = 1;
    for (let n = 1; n <= num; n++) {
        product *= n;
    }
    return product;
}

console.log(factorialize(5));
*/

// Find the Longest Word in a String
/*
function findLongestWordLength(str) {
    let strArr = str.split(' ');
    let maxLength = 0;
    for (let i of strArr) {
        if (maxLength < i.length) {
            maxLength = i.length;
        }   else {
            continue;
        }
    }
    return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
*/

// Return Largest Numbers in Arrays
/*
function largestOfFour(arr) {
    let arrOfLargest = [];
    let largestNum = 0;
    for (let subarr of arr) {
        for (let i of subarr) {
            if (largestNum < i) {
                largestNum = i;
            }   else if (largestNum == 0 && i < 0) {
                largestNum = i;
                continue;
            }   else {
                continue;
            }
        }
        arrOfLargest.push(largestNum);
        largestNum = 0;
    }
    return arrOfLargest;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
*/

// Confirm the Ending
/*
function confirmEnding(str, target) {
    if (str.substring(str.length - target.length) == target) {
        return true;
    }   else {
        return false;
    }
}

console.log(confirmEnding("Congratulation", "on"));
*/

// Repeat a String Repeat a String
/*
function repeatStringNumTimes(str, num) {
    let repeatStr = ""
    if (num < 0) {
        return '';
    }   else {
        for (let i = 0; i < num; i++){
            repeatStr += str;;
        }
    }
    return repeatStr;
}

console.log(repeatStringNumTimes("abc", 3));
*/

// Truncate a String
/*
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    }   else {
        return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
*/

// Finders Keepers
/*
function findElement(arr, func) {
    for (let i of arr) {
        if (func(i) == true) {
            return i;
        }   else {
            continue;
        }
    }
    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
*/

// Boo who
/*
function booWho(bool) {
    if (bool == true && typeof(bool) != "number" || bool == false && typeof(bool) != "number") {
        return true;
    }   else {
        return false;
    }
}

console.log(booWho(null));
*/

// Title Case a Sentence
/*
function titleCase(str) {
    str = str.toLowerCase();
    let strArr = str.split(' ');
    let capitalStr = '';
    for (let i of strArr) {
        capitalStr += i.charAt(0).toUpperCase() + i.slice(1) + ' ';
    }
    return capitalStr.trim();
}

console.log(titleCase("I'm a little tea pot"));
*/

// Slice and Splice
/*
function frankenSplice(arr1, arr2, n) {
    let mergedArr = arr2.slice(0);
    mergedArr.splice(n, 0, ...arr1);
    return mergedArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
*/

// Falsy Bouncer
/*
function bouncer(arr) {
    let trueArr = []
    for (let i of arr) {
        if (Boolean(i) == true) {
            trueArr.push(i);
        }   else {
            continue;
        }
    }
    return trueArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
*/

// Where do I Belong
/*
function getIndexToIns(arr, num) {
    let sortedArr = arr.sort((a, b) => a - b);
    for (let i of sortedArr) {
        if (i >= num) {
            return arr.indexOf(i);
        }   else {
            continue;
        }
    }
    return sortedArr.length;
}

console.log(getIndexToIns([2, 5, 10], 15));
*/

// Mutations
/*
function mutation(arr) {
    let subarr = '';
    for (let i of arr) {
        subarr += i + ' ';
    }
    subarr = subarr.trim();
    subarr = subarr.toLowerCase();
    let newArr = subarr.split(' ');
    let finalArr = [];
    for (let i of newArr[0]) {
        for (let j of newArr[1]) {
            if (newArr[0].indexOf(j) < 0) {
                return false;
            }   else {
                continue;
            }
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
*/

// Chunky Monkey
/*
function chunkArrayInGroups(arr, size) {
    //arrLength = arr.length;
    let subArr = [];
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        subArr = arr.slice(i, size + i);
        newArr.push(subArr);
    }
    return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
*/

// Object Oriented Programming

// Create a Basic JavaScript Object
/*
let dog = {
    name: 'Rocky',
    numLegs: 4
};
*/

// Use Dot Notation to Access the Properties of an Object
/*
let dog = {
    name: "Spot",
    numLegs: 4
};

console.log(dog.name, dog.numLegs);
*/

// Create a Method on an Object
/*
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return `This dog has ${dog.numLegs} legs.`}
};

console.log(dog.sayLegs());
*/

// Make Code More Reusable with the this Keyword
/*
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return `This dog has ${this.numLegs} legs.`}
};

console.log(dog.sayLegs());
*/

// Define a Constructor Function
/*
function Dog() {
    this.name = "Rocky";
    this.color = "Brown";
    this.numLegs = 4
}
*/

// Use a Constructor to Create Objects
/*
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}

let hound = new Dog();
*/

// Extend Constructors to Receive Arguments
/*
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Rocky", "White");

console.log(terrier);
*/

// Verify an Object's Constructor with instanceof
/*
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(2);

console.log(myHouse instanceof House);
*/

// Understand Own Properties
/*
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];


for (let prop in canary) {
    if (canary.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
}

console.log(ownProps);
*/

// Use Prototype Properties to Reduce Duplicate Code
/*
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.numLegs = 4;
*/

// Iterate Over All Properties
/*
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }   else {
        prototypeProps.push(prop);
    }
}
console.log('ownProp', ownProps);
console.log('prototypeProp', prototypeProps);
*/

// Understand the Constructor Property
/*
function Dog(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    }   else {
        return false;
    }
}
*/

// Change the Prototype to a New Object
/*
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    numLegs: 4,
    eat: function() {
        console.log('much much much');
    },
    describe: function() {
        `My name is ${this.name}`;
    }
};
*/

// Remember to Set the Constructor Property when Changing the Prototype
/*
function Dog(name) {
    this.name = name;
}
  
  // Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};
*/

// Understand Where an Object’s Prototype Comes From
/*
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle));
*/

// Understand the Prototype Chain
/*
function Dog(name) {
    this.name = name;
}
  
let beagle = new Dog("Snoopy");
  
Dog.prototype.isPrototypeOf(beagle);  // yields true
  
// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
*/

// Use Inheritance So You Don't Repeat Yourself
/*
function Animal() {};

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};
function Cat(name) {
    this.name = name;
    this.eat = Animal.prototype.eat;
}

function Bear(name) {
    this.name = name;
    this.eat = Animal.prototype.eat;
}
*/

// Inherit Behaviors from a Supertype
/*
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
*/

// Set the Child's Prototype to an Instance of the Parent
/*
function Animal () {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

console.log(beagle.eat());
*/

// Reset an Inherited Constructor Property
/*
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);
*/

// Add Methods After Inheritance
/*
function Animal() {}
Animal.prototype.eat = function() {
    console.log("nom nom nom");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log("Woof!");
}


let beagle = new Dog();

beagle.bark();
*/

// Override Inherited Methods (JS Look for methods from child to parent)
/*
function Bird() {}

Bird.prototype.fly = function() {
    return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird."
};

let penguin = new Penguin();
console.log(penguin.fly());
*/

// Use a Mixin to Add Common Behavior Between Unrelated Objects
/*
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("I am gliding");
    }
};

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();
*/

// Use Closure to Protect Properties Within an Object from Being Modified Externally
/*
function Bird() {
    let weight = 15;
    this.getWeight = function() {
        return weight;
    }
};
*/

// Understand the Immediately Invoked Function Expression (IIFE)
/*
(function() {
    console.log("A cozy nest is ready");
})();
*/

// Use an IIFE to Create a Module
/*
let motionModule = (function() {
    return {
        glideMixin: function(obj) {
            obj.glide = function() {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function(obj) {
            obj.fly = function() {
                console.log("Flying, wooosh!");
            };
        }
    }
})();

let bird = {
    name: "Donald",
    numLegs: 2
};

motionModule.glideMixin(bird);

let funModule = (function() {
    return {            
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})()

bird.glide();
*/

// JS Functional Programming

// Learn About Functional Programming
/*
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4TeamFCC = getTea(40);

console.log(tea4TeamFCC);
*/

// Understand Functional Programming Terminology
/*
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];
    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);
*/

// Understand the Hazards of Using Imperative Code
/*
const Window = function(tabs) {
    this.tabs = tabs;
};

Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab');
    return this;
};

Window.prototype.tabClose = function(index) {
    const tabsBeforeIndex = this.tabs.splice(0, index);
    const tabsAfterIndex = this.tabs.splice(1);
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
    return this;
};

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);

const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);

const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

const finalTabs = socialWindow.tabOpen()
.join(videoWindow.tabClose(2))
.join(workWindow.tabClose(1).tabOpen());

console.log(finalTabs.tabs);

//console.log(workWindow.tabs.splice(1 + 1));
*/

// Avoid Mutations and Side Effects Using Functional Programming
/*
let fixedValue = 4;

function incrementer() {
    return fixedValue + 1;
}

console.log(incrementer());
*/

// Pass Arguments to Avoid External Dependence in a Function
/*
let fixedValue = 4;

function incrementer(value) {
    return value + 1;
}

console.log(incrementer(fixedValue));
*/

// Refactor Global Variables Out of Functions
/*
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(list, bookName) {
    let funcList = [...list];
    funcList.push(bookName);
    return funcList;
}

function remove(list, bookName) {
    let funcList = [...list];
    const book_index = funcList.indexOf(bookName);
    if (book_index >= 0) {
        funcList.splice(book_index, 1);
        return funcList;
    }
}

console.log(add(bookList, "A Brief History of Time"));

console.log(bookList);
*/

// Use the map Method to Extract Data from an Array
/*
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
];

//const ratings = [];
//for (let i = 0; i < watchList.length; i++) {
//    ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
//}

const ratings = watchList.map(movie => ({title: movie["Title"], rating: movie["imdbRating"]}));

console.log(JSON.stringify(ratings));
*/

// Implement map on a Prototype
/*
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i of this) {
        newArray.push(callback(i));
    }
    return newArray;
};

const new_s = s.myMap(function(item) {
    return item * 2;
});

console.log(new_s);
*/

// Use the filter Method to Extract Data from an Array
/*
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
];

const ratings = watchList.map(movie => ({title: movie["Title"], rating: movie["imdbRating"]}));

//console.log(JSON.stringify(ratings));

const filteredList = ratings.filter(movie => {
    let ratingNumber = parseFloat(movie.rating); 
    if (ratingNumber >= 8.0) {
        return movie;
    }
})

console.log(JSON.stringify(filteredList));
*/

// Implement the filter Method on a Prototype
/*
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (let i of this) {
        if (callback(i) == true) {
            newArray.push(i);
        }
    }
    return newArray;
}

const new_s = s.myFilter(function(item) {
    return item % 2 ===1;
});

console.log(new_s);
*/

// Return Part of an Array Using the slice Method
/*
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3));
*/

// Remove Elements from an Array Using slice Instead of splice
/*
function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

console.log(nonMutatingSplice(inputCities));
*/

// Combine Two Arrays Using the concat Method
/*
function nonMutatingConcat(original, attach) {
    return original.concat(attach);
}

const first = [1, 2, 3];
const second = [4, 5];

console.log(nonMutatingConcat(first, second));
*/

// Add Elements to the End of an Array Using concat Instead of push
/*
function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
}

const first = [1, 2, 3];
const second = [4, 5];

console.log(nonMutatingPush(first, second));
*/

// Use the reduce Method to Analyze Data
/*
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
];

function getRating(watchList) {
    let cNolanMovies = watchList.filter(movie => {
        if (movie.Director == "Christopher Nolan") {
            return movie;
        }
    });
    let cNolanRatings = cNolanMovies.map(movie => {
        return {title: movie.Title, rating: parseFloat(movie.imdbRating)}
    });

    // console.log(JSON.stringify(cNolanRatings));
    let ratingSum = cNolanRatings.reduce((a, b) => {
        return a + b.rating;
    }, 0);

    let averageRating = ratingSum / cNolanMovies.length;
    return averageRating;
}

console.log(getRating(watchList));
*/

// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
/*
const squareList = arr => {
    let finalArr = arr.filter(a => {
        if (a >=0 && a % 1 === 0) {
            return a;
        }
    })
    return finalArr.map(a => {
        return Math.pow(a, 2);
    });
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);

console.log(squaredIntegers);
*/

// Sort an Array Alphabetically using the sort Method
/*
function alphabeticalOrder(arr) {
    return arr.sort((a, b) => {
        return a === b ? 0 : a > b ? 1 : -1;
    });
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
*/

// Return a Sorted Array Without Changing the Original Array
/*
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    let newArr = arr.slice(0);
    return newArr.sort((a, b) => {
        return a - b;
    })
}

console.log(nonMutatingSort(globalArray));
*/

// Split a String into an Array Using the split Method
/*
function splitify(str) {
    return str.split(/\W/);
}

console.log(splitify("Hello World,I-am code"));
*/

// Combine an Array into a String Using the join Method
/*
function sentensify(str) {
    let strArr = str.split(/\W/);
    return strArr.join(' ');
}

console.log(sentensify("May-the-force-be-with-you"));
*/

// Apply Functional Programming to Convert Strings to URL Slugs
/*
function urlSlug(title) {
    let lowerCase = title.toLowerCase();
    lowerCase = lowerCase.trim();
    let arr = lowerCase.split(' ');
    let filteredArr = [];
    arr.filter(i => {
        if (i != '') {
            filteredArr.push(i);
        }
    })
    //console.log(filteredArr);
    return filteredArr.join('-');
}

console.log(urlSlug(" Winter Is  Coming"));
*/

// Use the every Method to Check that Every Element in an Array Meets a Criteria
/*
function checkPositive(arr) {
    return arr.every(i => {
        return i >= 0;
    });
}

console.log(checkPositive([1, 2, 3, -4, 5]));
*/

// Use the some Method to Check that Any Elements in an Array Meet a Criteria
/*
function checkPositive(arr) {
    return arr.some(a => {
        return a >= 0;
    });
}

console.log(checkPositive([1, 2, 3, -4, 5]));
*/

// Introduction to Currying and Partial Application
/*
function add(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}

console.log(add(10)(20)(30));
*/

// JS Intermediate Algorithm Scripting

// Sum All Numbers in a Range
/*
function sumAll(arr) {
    arr.sort((a, b) => {
        return a - b;
    });
    let completeArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        completeArr.push(i);        
    }
    return completeArr.reduce((a, b) => {
        return a + b;
    }, 0)
}

console.log(sumAll([10, 5]));
*/

// Diff Two Arrays
/*
function diffArray(arr1, arr2) {
    const newArr = [];
    for (let i of arr1) {
        if (arr2.indexOf(i) >= 0) {
            continue;
        }   else {
            newArr.push(i);
        }
    }
    for (let i of arr2) {
        if (arr1.indexOf(i) >= 0) {
            continue;
        }   else {
            newArr.push(i);
        }
    }

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/

// Seek and Destroy
/*
function destroyer(arr) {
    let argsArr = [];
    for (let i = 1; i < arguments.length; i++) {
        argsArr.push(arguments[i]);
    }
    while (arr.some(i => {
        for (let j of argsArr) {
            return i == j;
        }
    }) == true) {
        for (let arg of argsArr) {
            let arrIndex = arr.indexOf(arg);
            if (arrIndex >= 0) {
                arr.splice(arrIndex, 1);
            }   else {
                continue
            }
        }
    } 

    
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/

// Wherefore art thou
/*
function whatIsInAName(collection, source) {
    const arr = []
    let sourceKeys = Object.keys(source);
    //let sKeysLength = sourceKeys.length;
    collection.filter(a => {
        //console.log(a)
        let trueArr = []
        for (let i of sourceKeys) {
            if (source[i] == a[i]) {
                trueArr.push(true);
            }   else {
                trueArr.push(false);
            }
        }
        //console.log(trueArr);
        if (trueArr.every(a => {
            return a == true
        })) {
            arr.push(a);
        }
    })
    return arr;
}

let answer = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

console.log(JSON.stringify(answer));
*/

// Spinal Tap Case
/*
function spinalCase(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].replace(/([A-Z])/g, "-$1");
    }
    str = strArr.join(' ');
    str = str.toLowerCase();
    strArr = str.split(/[\W_]/);
    //console.log(strArr);
    //str = str.replace(/([A-Z])/g, "-$1");
    //console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == '') {
            strArr.splice(i, 1);
        }
    }
    //console.log(strArr);
    str = strArr.join('-');
    return str;
}

console.log(spinalCase('The_Andy_Griffith_Show'));
*/

// Pig Latin
/*
function translatePigLatin(str) {
    if (str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u') {
        return str + 'way'
    }   else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
                return str.slice(i) + str.slice(0, i) + 'ay'
            }
        }
    }
    return str + 'ay';
    
}

console.log(translatePigLatin("rhythm"));
*/

// Search and Replace
/*
function myReplace(str, before, after) {
    after = after.toLowerCase();
    let strArr = str.split(' ');
    let replaceIndex = strArr.indexOf(before);
    if (strArr[replaceIndex] != strArr[replaceIndex].toLowerCase()) {
        after = after[0].toUpperCase() + after.slice(1);
    }
    //console.log(replaceIndex)
    strArr.splice(replaceIndex, 1, after);
    return strArr.join(' ');
    //console.log(strArr);
}

console.log(myReplace("His name is Tom", "Tom", "john"));
*/

// DNA Pairing
/*
function pairElement(str) {
    let strArr = str.split('');
    let dnaArr = []
    for (let i of strArr) {
        if (i == 'A') {
            dnaArr.push([i, 'T']);
        }   else if (i == 'T') {
            dnaArr.push([i, 'A']);
        }   else if (i == 'C') {
            dnaArr.push([i, 'G']);
        }   else if (i == 'G') {
            dnaArr.push([i, 'C']);
        }   else {
            continue;
        }
    }
    return dnaArr;
}

console.log(pairElement("ATCGA"));
*/

// Missing letters
/*
function fearNotLetter(str) {
    let completeArr = []
    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
        completeArr.push(String.fromCharCode(i));
    }
    //console.log(completeArr);
    let strArr = str.split('');
    let startIndex = completeArr.indexOf(strArr[0]);
    let endIndex = completeArr.indexOf(strArr[strArr.length - 1]);
    //console.log(endIndex);
    for (let i = startIndex; i <= endIndex; i++) {
        if (strArr.indexOf(completeArr[i]) < 0) {
            return completeArr[i];
        }
    }
    //return undefined;
    //console.log(strArr);
}

console.log(fearNotLetter("abcdefghjklmno"));
*/

// Sorted Union
/*
function uniteUnique(arr) {
    let argsArr = [...arguments]
    let combinedArr = []
    for (let i of argsArr) {
        combinedArr.push(...i);        
    }
    return [...new Set(combinedArr)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
*/

// Convert HTML Entities

function convertHTML(str){
    let strArr = str.split(' ');
    let  encodedArr = [];
    for (let i of strArr) {
        encodedArr.push(encodeURIComponent(i));
    }
    return encodedArr.join(' ');
}

console.log(convertHTML("Dolce & Gabbana"));