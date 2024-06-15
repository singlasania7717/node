const http=require("http");

const server=http.createServer((request,response)=>{
    if(request.url==="/")
    {
        response.end("welcome to the home page");  // same working as default syntax ( a little cheating 😉)
    }
    else if(request.url==="/about")
    {
        response.end("welcome to the about page");               // will wait for the new request 
    }
    else
    {
        response.write(`<h1>Oops!</h1>                                
     <p>We can't seem to find the page you are looking for</p>
     <a href="/">back home</a>`)          

        response.end();
    }
    
});

server.listen(5000);