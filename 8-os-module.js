const osModule=require("os");

//funtion returns the current user info
console.log(osModule.userInfo());

//method returns the system uptime in seconds 
console.log(`the system uptime is ${osModule.uptime()} seconds`);

const currentOS={
    name:osModule.type(),
    release:osModule.release(),
    freemem:osModule.freemem(),
    totalmem:osModule.totalmem()
}

console.log(currentOS);