const _= require("lodash");                  // common convention _ as variable name 


const items=[1,[2,[3,[4]]]];                    // array of arrays 
const newItems=_.flattenDeep(items);            // this method will just remove the sq. brackets
console.log(newItems);