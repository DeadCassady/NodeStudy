function outputHttpResponse(statusCode, statusMessage, headers, body) {
       // ...
       console.log(
   `   HTTP/1.1 ${statusCode} ${statusMessage}
   Date: ${headers.Date}
   Server: ${headers.Server}
   Content-Length: ${headers['Content-Length']}
   Connection: ${headers.Connection}
   Content-Type: ${headers['Content-Type']}
   
   ${body}`);
   }
   
   function processHttpRequest($method, $uri, $headers, $body) {
        const uriFormat = /\/api\/checkLoginAndPassword/
        const contentTypeFormat = /application\/x-www-form-urlencoded/
        let fs
        try {
        fs = require('fs').readFileSync("passwords.txt", 'utf8')
        } catch (err) {
        console.error('500 - Internal Server Error', err);
        }
       let statusCode = 200
       let statusMessage = 'OK'
       let body;
       if(uriFormat.test($uri) &&
       contentTypeFormat.test($headers['Content-Type'])
        ){ 
        statusCode = 200
        statusMessage = 'OK' 
            if(splitLoginPassword(fs, $body).includes(true)) {
                body = '<h1 style="color:green">FOUND</h1>'
            }else{
                body = '<h1 style="color:red">NOT FOUND</h1>'
            }
       }else{
        statusCode = 400
        statusMessage = 'Not Found'
        body = 'not found'
       }
       const headers = {
           'Date': new Date(),
           'Server': 'Apache/2.2.14 (Win32)', 
           'Content-Length': $headers['Content-length']? $headers['Content-length']: Buffer.byteLength(JSON.stringify(body), 'utf8'),
           'Connection': 'Closed',
           'Content-Type': $headers['Content-Type']
       }
       outputHttpResponse(statusCode, statusMessage, headers, body);
   }

   function splitLoginPassword(entry, $body){
     $body = $body.split(/[&=]/)
     let body = {
        'login' : $body[1],
       'password' : $body[3]
    }
    entry = entry
     .split(/[\n]/)
     .map((element)=>{

        element = element.replace(/\r/, '').split(':')
        return {'login': element.shift(), 'password':element.shift()}
     })
     
     const match = entry
     .map((element)=> (element.login === body.login && 
        element.password === body.password))

    return match
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
   
   http = parseTcpStringAsHttpRequest(
`POST /api/checkLoginAndPassword HTTP/1.1
Accept: */*
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/4.0
Content-Length: 35

login=student&password=12345`);
   processHttpRequest(http.method, http.uri, http.headers, http.body);