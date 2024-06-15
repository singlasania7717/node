// const items=["item1","item2"];      //array

module.exports.items=["item1","item2"];   //directly exporting at the time of declaraing


const person={                //object
    name:"bob",
    age:17
}

module.exports.singlePerson=person;   // first declared then exported as object named singlePerson 
//or
// module.exports.person={              //name will be person not singlePerson
//     name:"bob",
//     age:17
// }


// remember both exports are even spearate but will be exported as a single object 