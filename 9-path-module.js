const path = require("path");
const pathModule=require("path");

//property returns the directory deparator (depends on the system)
console.log(pathModule.sep);


//will join the directories to generate a normalized path 
const filePath = pathModule.join('content', 'subfolder', 'test.txt');
console.log(filePath);

//will return the base vlaue of the path 
const base = pathModule.basename(filePath);
console.log(base);

//method will creat an absolute path from the given path segments and return it 
const absolutePath=pathModule.resolve(__dirname,"content","subfolder","test.txt");
console.log(absolutePath);