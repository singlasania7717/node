function sayHi(name){
    console.log(name);
}

//console staments are global so will be accesed without exports on require 
// console.log(module); // empty exports 
module.exports={sayHi};    // if a single item can use without the {} so module.exports=sayHi;
// console.log(module);   // shared items   