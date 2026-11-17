const http = require("http");
const fs = require("fs");

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req,res) => {
    console.log("요청 발생");
    //console.log(req);
    console.log(req.method);
    //res.setHeader("Content-Type", "text/plain");
    //res.write("Hello, Node");
    //res.end();
    //res.setHeader("Content-Type", "text/html");
    //const readStream = fs.createReadStream(__dirname+"/sever01.html","utf8");
    //readStream.pipe(res);
    const { method, url } = req;
    res.setHeader("Content-Type", "text/plain");
    if( method === "GET" && url === "/home" ) {
        res.statusCode = 200;
        res.end("HOME");
    } else if( method === "GET" && url === "/about" ) {
        res.statusCode = 200;
        res.end("ABOUT");
    } else {
        res.statusCode = 404;
        res.end("NOT FOUND");
    }

});
server.listen(PORT, ()=>{
    console.log("${PORT}번 포트로 서버 실행");
});