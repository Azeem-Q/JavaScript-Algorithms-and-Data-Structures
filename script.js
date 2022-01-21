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
        delete records.id.prop;
    }   else {
        records.id = {
            prop: val,
        }
    }
    return records.id;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));