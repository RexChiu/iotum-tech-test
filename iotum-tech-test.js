const assert = require('assert');

// Question 1
// function to print integers from 1-100
// prints Foo if multiple of 3, Bar if multiple of 5, FooBar if multiple of 3 and 5
// Inputs: N/A
// Outputs: String containing numbers, Foo, Bar, or FooBar
function foobar() {
  let outputString = [];
  for (let i = 1; i <= 100; i++) {
    // if not multiple of 3 or 5, print number
    if (i % 3 != 0 && i % 5 != 0) {
      outputString.push(i);
    }
    // case of multiple of 3 or 5
    // add Foo or Bar respectively
    else {
      let foobar = "";
      if (i % 3 == 0) {
        foobar += "Foo";
      }
      if (i % 5 == 0) {
        foobar += "Bar";
      }
      outputString.push(foobar);
    }
  }
  // joins the outputString array together with spaces
  return outputString.join(" ");
}

// Question 1 Test Cases
let outputString;
// Case 1, given input
outputString = foobar();
assert(outputString.includes("1 2 Foo 4 Bar Foo 7 8 Foo Bar 11 Foo 13 14 FooBar"));
console.log("Q1 Case 1 Passed");

// Question 2
// function to determine the number of even numbers that appear in a range of 0..n
// Inputs: Integer n
// Outputs: Integer of number of even numbers in range 0..n
function countEven(n) {
  let numEven = 0;
  for (let i = 0; i <= n; i++) {
    // if i is a multiple of 2, increment numEven
    if (i % 2 == 0) {
      numEven++;
    }
  }
  return numEven;
}

// Question 2 Test Cases
let input, output;
// Case 1, given input
input = 3;
output = 2;
assert.strictEqual(countEven(input), output);
console.log("Q2 Case 1 Passed");
// Case 2, n == 0
input = 0;
output = 1;
assert.strictEqual(countEven(input), output);
console.log("Q2 Case 2 Passed");
// Case 2, n is even
input = 4;
output = 3;
assert.strictEqual(countEven(input), output);
console.log("Q2 Case 3 Passed");

// Question 3
// determine range of possible values for a
/*

Min value = 1 + 1 + 1 = 3
Max value = 6 + 6 + 6 = 18
Range of possible values = 3..18

*/

// Question 4
// function to remove the duplicates of an array
// Inputs: Array of Strings
// Outputs: Array of Strings with no duplicates
function removeDuplicates(arr) {
  // stores unique entries into a hashmap
  let hashmap = {};
  for (let string of arr) {
    // if doesn't exist in hashmap, add it in
    if (hashmap[string] === undefined) {
      hashmap[string] = string;
    }
  }
  // extract the unique keys from the hashmap
  return Object.keys(hashmap);
}

// Question 4 Test Cases
let inputArr, outputArr;
// Case 1, given input
inputArr = ['one', 'one', 'two', 'three', 'three', 'two'];
outputArr = ['one', 'two', 'three'];
assert.deepStrictEqual(removeDuplicates(inputArr), outputArr);
console.log("Q4 Case 1 Passed");
// Case 2, already no duplicates
inputArr = ['one', 'two', 'three'];
outputArr = ['one', 'two', 'three'];
assert.deepStrictEqual(removeDuplicates(inputArr), outputArr);
console.log("Q4 Case 2 Passed");
// Case 3, empty array
inputArr = [];
outputArr = [];
assert.deepStrictEqual(removeDuplicates(inputArr), outputArr);
console.log("Q4 Case 3 Passed");

// Question 5
/*

To build a simple web based chat application, I would choose to use React for the frontend, NodeJS as middleware, and Firebase Real Time Database as DB.
My reasoning for React is that it is a reactive framework and can easily render any changes to the app such as new chats.
It is also easy to do form validation via controlled inputs and has the possibility of using Redux to handle global state (logins, messages).
NodeJS is chosen because it is a fast message broker backend, if there is no need for CPU intensive tasks like string manipulation, it is very lean and fast.
To be more specific, I would use the Express-WS package, to allow for REST routes for register/login, but WebSockets for the chat itself.
Finally, I choose Firebase Real Time Database because of its simplicity and speed. Each chat can be stored as a JSON object (Username, Text), with the possibility of adding sub-threads/reactions.
It is also incredibly quick at retrieval of data, which will help with the initial loading of previous messages in the chat app.

To start coding the application, I prefer to build small working iterations that span the entire stack and expanding onto it.
I would first create a react boilerplate app, make it connect to the NodeJS websocket on componentMount, and create a chatbar component.
The chatbar component would be a controlled input form, that will call a function to send the data and append the chat to an array to be rendered by React.
Then I would add the NodeJS logic to capture the websocket packet, and finally I would add saving the message onto the DB by appending chat objects onto a node.
Essentially my workflow would be Front -> Backend, with it being runnable and testable every step of the way.

In terms of expanding on that one chatbar, I would add retrieval of the existing messages from the database on load, with the chats being handled by a ChatMessages component, rendering chat components.
Once that is done, REST login/register can be added, to give a username to the submitted chats.
As the application can be expanded, different chatrooms, sub-threads, and reactions can all be added without any significant rewrites.

*/