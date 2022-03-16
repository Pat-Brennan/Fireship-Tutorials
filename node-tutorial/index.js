//* Node!
//? An open-source, cross-platform, BACKEND JavaScript RUNTIME ENVIRONMENT
//? that runs on the V8 engine and executes JavaScript code OUTSIDE OF THE BROWSER

//* Global
//? A name space object that can be accessed ANYWHERE in the code
//? console.log() for example!
console.log('Hello World!');

//? process lets you check the current running process, like what OS you're using!
console.log(process.platform);
//? Or who the user is!
console.log(process.env.USERNAME);

//? The first luckyNum will not print, because it hasn't been DEFINED yet
console.log(global.luckyNum);
global.luckyNum = 23;
console.log(global.luckyNum);

//? global can be compared to the WINDOW OBJECT in the browser from a frontend perspective

//* Events
//? An asynchronous event-driven JavaScript runtime

//? Function will run when the 'exit' event has occured
//? That's why it's called a CALLBACK function
//? In otherwords, "call this function on 'exit'"
process.on('exit', function () {
	//Something will happen!
});

//? EventEmitter is built into node
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

//? When 'lunch' is passed in, execute callback funtion
eventEmitter.on('lunch', () => {
	console.log('yum yum yum! 🍕🍔🍟');
});

//? Running the event twice, will run the callback function twice
//? This is good when dealing with CPU intensive processes
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

//* The File System
//? Can read, write, and delete files.
//? and can do things in a blocking or non-blocking way

//? SYNC === BLOCKING
//? BLOCKING implies that the function will need to finish all of it's work
//? before ANY OF YOUR OTHER CODE CAN RUN

const { readFile, readFileSync } = require('fs');

//? An example of BLOCKING code
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);
console.log('DO THIS ASAP'); // This will not run first

//? An example of NON-BLOCKING code
//? Node registers the callback but does not run it after
readFile('./hello.txt', 'utf8', (err, txt) => {
	console.log(txt); // This will run second
});

console.log('DO THIS FIRST PLZ'); // This will run first

//? Another non-blocking way using PROMISES
// const { readFile } = require('fs').promises;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }

//* Module: a JS file that exports it's code
//? In COMMON JS: We use the REQUIRE Keyword to BRING IN MODULES (fs, or events for example)
//? In ES MODULES: We use IMPORT/EXPORT keywords

const myModule = require('./my-module'); // Brings in the module I created
console.log(myModule); // prints what's in the my-module object

//* NPM: NODE PACKAGE MANAGER
//? Owned by Github, and Github is owned by Microsoft

//* JSON: JAVASCIPT OBJECT NOTATION
//? package.JSON file keeps track of your DEPENDENCIES

//* Dependencies:
//? An essential functionality, library, or piece of code that's
//? essential for a different part of the code to work.

//* Express.js:
//? A minimal web application FRAMEWORK.
//? One of the most popular 3rd party node modules

//* Node_Modules Directory:
//? Location of the SOURCE CODE for DEPENDENCIES
//! YOU SHOULD NEVER WRITE CODE IN HERE!!!

//! ----------- START OF APPLICATON CODE ------------

const express = require('express');

const app = express();

//? .get: Requesting data from server, NOT MODIFYING OR UPDATING
//? First Argument: the URL being visited
//? Second Argument: A callback function. Every request to this URL
//? can be thought of as an EVENT
//? Request = users incoming data
//? Response = your outgoing data
app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('Sorry, I broke it!')
        }
        response.send(html);
    })
});

//? An Async/Await way to write what's above
app.emit('/', async (request, response) => {
    response.send(await readFile('./home.html', 'utf8'));
})

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`));
