//* Node!
//? An open-source, cross-platform, BACKEND JavaScript RUNTIME ENVIRONMENT
//? that runs on the V8 engine and executes JavaScript code OUTSIDE OF THE BROWSER

//* Global
//? A name space object that can be accessed ANYWHERE in the code
//? console.log() for example!
console.log('Hello World!');

console.log(process.platform);

//? The first luckyNum will not print, because it hasn't been DEFINED yet
console.log(global.luckyNum);
global.luckyNum = 23;
console.log(global.luckyNum);

//? global can be compared to the WINDOW OBJECT in the browser from a frontend perspective
