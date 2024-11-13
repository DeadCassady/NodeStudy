//3.1
async function getWithPromiseAsync() {
    const url = 'https://random-data-api.com/api/name/random_name'
    function request(){return fetch(url).then(result => result.json()).then(result => result.name).catch(error => console.log(error))}
    let names = await Promise.all([request(), request(), request()]);
    console.log(names);
}
//3.2
async function getWithAsync() {
  const url = 'https://random-data-api.com/api/name/random_name'
  const first = await fetch(url).then(f => f.json()).then(f => f.name).catch(error => console.log(error))
  const second = await fetch(url).then(f => f.json()).then(f => f.name).catch(error => console.log(error))
  const third = await fetch(url).then(f => f.json()).then(f => f.name).catch(error => console.log(error))
  console.log([first, second, third]);
}
//3.3
function getWithPromise() {
  const url = 'https://random-data-api.com/api/name/random_name' 
  fetch(url).then(f => f.json()).then(f => {console.log(f.name); return fetch(url)})
  .then(f => f.json()).then(f => {console.log(f.name); return fetch(url)})
  .then(f => f.json()).then(f => {console.log(f.name); return fetch(url)}).catch(error => console.log(error))
}
//4.1
function findAWomanWithoutAsinc(){
  const url = 'https://random-data-api.com/api/users/random_user'
  let counter =0;
  cycle(url);
  function cycle(url:any){
    fetch(url).then(f => f.json()).then(f => {
     if(f.gender=='Female'){
      counter++
      console.log(counter);
     }else{
      counter++
      cycle(url)
     }
    }).catch(error => console.log(''))
  }
}
//4.2
async function findAWoman(){
  const url = 'https://random-data-api.com/api/users/random_user'
  let gender;
  let counter =0;
  while(gender != 'Female'){
    counter++;
    gender = await fetch(url).then(f => f.json()).then(f => f.gender).catch(error => console.log(''))
  }
  console.log(counter);
}
//5
async function getIP(callback:any){
  const data = await fetch('https://api.ipify.org?format=json');
  const ip = await data.json();
  callback(ip)
}

function getCurrentIP(){
  return new Promise((resolve)=>{
    getIP((ip:any)=>{
      resolve(ip);
    })
  })
}

getIP((async function() {
  const ip = await getCurrentIP();
  console.log("Your current IP:", ip);
}))
//6
/*function getIP(){
  return new Promise((resolve)=>{
    resolve(fetch('https://api.ipify.org?format=json').then(f => f.json()))
  })
}
async function getCurrentIp(callback:any){
  const ip:any = await getIP()
  ip.onload = callback(ip)
}

getCurrentIp(async function(ip:any){
  console.log(ip)
})*/


