const fsModule=require("fs");                // or const {readFileSync,writeFileSync}=require("fs");   its like comparing LHS=RHS in maths 
console.log(fsModule.readFileSync("4-names.js","utf8"));               // or ./4-names.js
console.log(fsModule.readFileSync("content/second.txt","utf8"));      //or ./content/second.txt

const first=fsModule.readFileSync("content/first.txt","utf8");
const second=fsModule.readFileSync("content/second.txt","utf8");

fsModule.writeFileSync("content/result-sync.txt",`here is the result: ${first} and ${second}`,{flag:"a"});
//if file already exist then will be overwritten otherwise will be created (defalut)
// else pass in the third parameter and object : {flag:"a"} ( stands for append)

