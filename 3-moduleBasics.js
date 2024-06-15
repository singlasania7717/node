//CommonJS modules ( every file is a module) by default
//share the minimum not everything( we are incharge)

//exports : we can decide the type wheather as an object ( if multiple items ) or a single variable or function



const names = require("./4-names");    //will recieve the complete exports object not just the individual properties
const functions=require("./5-functions");   // will return an object 
// console.log(names);
// console.log(names.name1);
// console.log(functions.sayHi);

functions.sayHi(names.name1);
functions.sayHi(names.name2);
functions.sayHi("susan");
// functions.sayHi(names.secret);  will not work 


//alternative syntax file recieved 
const data=require("./6-alternative-syntax");
console.log(data);
