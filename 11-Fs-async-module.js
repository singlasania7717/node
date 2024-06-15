const fsModule=require("fs");   // now we will use the readFile & writeFile methods in the fs module which are asynchronus functions or methods

fsModule.readFile("./content/first.txt","utf8",(err,res)=>{        // if it finds the path then it will execute the callback funcn

    if(err) 
    { 
        console.log(err);                                    //callback-1 
    }       
    let first=res;

    fsModule.readFile("./content/second.txt","utf8",(err,res)=>{

        if(err)
        {
            console.log(err);                                  //callback-2
        }
        let second=res;

        fsModule.writeFile("./content/result-async.txt",`here is the result of: ${first} & ${second}`,(err,res)=>{
            if(err)
            {
                console.log(err);                                    //callback-3
            }
            console.log(res); // would be undeifned becuase it would write it in the file so don't worry   or it doesn't return any res in callback 
        });


    });


});

console.log("hello");  // will be executed first because these are async functions so if there is a time lag next lines will be executed