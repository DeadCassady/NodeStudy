
function readHttpLikeInput(){
 // див. попередню задачу
 var fs = require("fs");
 var res = "";
 var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
 let was10 = 0;
 for(;;){ 
     try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) {break; /* windows */}
     if(buffer[0] === 10 || buffer[0] === 13) {
         if (was10 > 10) 
             break;
         was10++;
     } else 
        was10 = 0;
     res += new String(buffer);
 }

 return res;
}

//let contents = readHttpLikeInput();

function outputHttpResponse(statusCode, statusMessage, headers, body) {
    // ...
    console.log(
         `HTTP/1.1 ${statusCode} ${statusMessage}
Date: ${headers.Date}
Server: ${headers.Server}
Content-Length: ${headers['Content-Length']}
Connection: ${headers.Connection}
Content-Type: ${headers['Content-Type']}

${body}`);
}

function processHttpRequest($method, $uri, $headers, $body) {
    // ... проаналізувати вхідні дані, обчислити результат
    // та спеціальною командою красиво вивести відповідь
    let statusCode = 200
    let statusMessage = 'OK'
    let body = $body
    if(/nums=/.test($uri) && ($method !=='GET' || !/sum/.test($uri))){
        statusCode = 400
        statusMessage = 'Not Found'   
        body = 'not found'
    }else if(!/nums=/.test($uri) || $method !=='GET' || !/sum/.test($uri)){
        statusCode = 400
        statusMessage = 'Bad Request'
        body = 'not found'
    }else{
        body = $uri
        .split(/[=,]/)
        .filter((char) => char.match(/[\d]/))
        .reduce((acc, nums) => (+acc) + (+nums))
    }
    const headers = {
        'Date': new Date(),
        'Server': 'Apache/2.2.14 (Win32)', 
        'Content-Length': $headers['Content-length']? $headers['Content-length']: Buffer.byteLength(JSON.stringify(body), 'utf8'),
        'Connection': 'Closed',
        'Content-Type': 'text/html; charset=utf-8'
    }
    
      

    outputHttpResponse(statusCode, statusMessage, headers, body);
}

function parseTcpStringAsHttpRequest($string) {
    const rows = $string
   .split(/[\n]/)
   .filter((row) => /[\w]/.test(row));
   const first = rows.shift().split(' ');
   const body = rows.pop();
   const headers = Object.fromEntries(
    rows.map((row) => {
        row=row.split(':')
        prop = row.shift()
        row.slice(0);
        prop = prop
        .split('-')
        .map((prop) => prop[0].toUpperCase() + prop.slice(1).toLowerCase())
        .join('-')
        val = row.toString().replace(' ','')
        return [prop, val]})
   )

   const httpRequest = {
    'method': first.shift(),
    'uri': first.shift(),
    'headers': headers,
    'body': body
   }
    return httpRequest;
}

http = parseTcpStringAsHttpRequest(`GET /sum?nums=1,2,3,4 HTTP/1.1
                                    Host: shpp.me
                                    Accept: image/gif, image/jpeg, */*
                                    Accept-Language: en-us
                                    Accept-Encoding: gzip, deflate
                                    User-Agent: Mozilla/4.0

                                    `);
processHttpRequest(http.method, http.uri, http.headers, http.body);