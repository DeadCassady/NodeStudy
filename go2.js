function readHttpLikeInput(){
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

let contents = readHttpLikeInput();

// ось цю функцію, власне, і треба написати
function parseTcpStringAsHttpRequest(string) { 
    
    const rows = string
   .split(/[\n]/)
   .filter((row) => /[\w]/.test(row));
   const first = rows.shift().split(' ');
   const body = rows.pop();
   const headers = Object.fromEntries(
    rows.map((row) => {
        row=row.split(':')
        prop = row.shift()
        prop = prop
        .split('-')
        .map((prop) => prop[0].toUpperCase() + prop.slice(1).toLowerCase())
        .join('-')

        val = row.toString().replace(' ','')
        return [prop, val]})
   )

   const http = {
    'method': first.shift(),
    'uri': first.shift(),
    'headers': headers,
    'body': body
   }
    return http;
}

http = parseTcpStringAsHttpRequest(contents); 
console.log(JSON.stringify(http, undefined, 2));