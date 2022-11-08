const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('this is our history')
    }

    
    res.end(`<h1>opps </h1>`)
})

server.listen(5001)