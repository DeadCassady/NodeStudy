function Validator(){
    this.validateEmail = function(email){
        const regEmail = /^(?![\.\-\+])[a-zA-Z0-9\.\-\+]{2,20}@[a-zA-Z0-9\.\!\$\%\&\'\*\+\/\=\?\^\_\-]{1,15}\.[a-zA-Z]{1,5}$/;
        return regEmail.test(email);
    };
    this.validatePhone = function(phone){
        const regPhone = /^[\s\-]*(\+38)?[\s\-]*(\(?([\s\-]*[\d]){3}\)?)([\s\-]*[\d]){7}$/
        return regPhone.test(phone) && phone.length<=25;
    };
    this.validatePassword = function(password){
        const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d_]{8,}$/
        return regPassword.test(password)
    };
}

test();
function test(){
    //testEmails();
    testPhone();
    //validatePassword();
}

function testEmails(){
 let validater = new Validator();
 /**
  * expected true
  */
 console.log("fi@secondpart.end ", validater.validateEmail('fi@secondpart.end'));
 console.log('first-part@.se=cond%p.art.end ', validater.validateEmail('first-part@.se=cond%p.art.end'));
 console.log('first.part@se=cond%part.r', validater.validateEmail('first.part@se=cond%part.r'));
 /**
  * expected false
  */
 console.log('f@secondart.end,', validater.validateEmail('f@secondart.end,'));
 console.log('first-part@.se=cond@part.end', validater.validateEmail('first-part@.se=cond@part.end'));
 console.log('-firstpart@.se=cond%.enddeded', validater.validateEmail('-firstpart@.se=cond%.enddeded'));
 console.log('firs_tpart@.se.en', validater.validateEmail('firs_tpart@.se.en'));
 console.log('firstpart@.se.enddeded', validater.validateEmail('firstpart@.se.enddeded'));
};
function testPhone(){
    let validater = new Validator();
    /**
     * expected true
     */
    console.log('+380995678901', validater.validatePhone('+380995678901'));
     console.log('+38 (099) 567 8901', validater.validatePhone('+38 (099) 567 8901'));
     console.log('+38 099 5 6 7 8 9  01', validater.validatePhone('+38 099 5 6 7 8 9  01'));
     console.log('(09-9) 567-890-1', validater.validatePhone('(09-9) 567-890-1'));
     console.log('--  (099) 567 890-1', validater.validatePhone('--  (099) 567 890-1'));
  
    /**
     * expected false
     */
     console.log('+38 (099) 567 8901 0', validater.validatePhone('+38 (099) 567 8901 0'));
     console.log('+38 099 a0000000', validater.validatePhone('+38 099 a0000000'));
     console.log('+38 (0989) 567 8901', validater.validatePhone('+38 (0989) 567 8901'));
     console.log('+48 (0989) 567 8901', validater.validatePhone('+48 (0989) 567 8901'));
};
function validatePassword(){
    let validater = new Validator();
    /**
     * expected true
     */
     console.log('C00l_Pass', validater.validatePassword('C00l_Pass'));
     console.log('SupperPas1', validater.validatePassword('SupperPas1'));
    /**
     * expected false
     */
    console.log('Cool_pass', validater.validatePassword('Cool_pass'));
    console.log('C00l', validater.validatePassword('C00l'));
    console.log('c00l', validater.validatePassword('c00l'));
};