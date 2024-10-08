function Validator(){
    this.validateEmail = function(email){
        const splitEmail = email.split('@');
        const firstPart = splitEmail[0];
        const secondPart = splitEmail[1].substring(0,splitEmail[1].lastIndexOf('.'));
        const end = splitEmail[1].substring(splitEmail[1].lastIndexOf('.')+1,splitEmail[1].length);
        const regFirstLetter = /[-\.+]/g;
        const regFirstPart = /[^-\.+A-Za-z]/g;
        const regSecondPart = /[^A-Za-z0-9.!$%&’*+/=?^_-]/g;
        const regEnd = /[^A-Za-z0-9]/g;
        if(
            regFirstLetter.test(firstPart[0]) || 
            regFirstPart.test(firstPart) || 
            firstPart.length < 2 ||
            firstPart.length > 20 ||
            regSecondPart.test(secondPart)||
            secondPart.length > 15 ||
            regEnd.test(end) ||
            end.length > 5
        ){

            return false;
        }
        return true;
    };
    this.validatePhone = function(phone){
        const regPhone = /[^0-9+)( \-]/;
        const regNumbers =/[0-9]/g;
        const inBrackets = phone.substring(phone.indexOf('(')+1, phone.indexOf(')')).match(regNumbers);
        const regionCode = phone.substring(phone.indexOf('+')+1, phone.indexOf('(')).match(regNumbers);
        const allNumbers = phone.match(regNumbers);
        if(
            phone.indexOf('+') > 0 ||
            phone.indexOf('(') > phone.indexOf(')') ||
            phone.length < 10 || 
            phone.length > 25 ||
            regPhone.test(phone) ||
            allNumbers.length < 10 ||
            allNumbers.length > 12 ||
            (inBrackets!= null &&
            inBrackets.length > 3) ||
            (regionCode != null &&
            regionCode.length > 2)
        ){
            return false;
        }
        return true;
    };
    this.validatePassword = function(password){
        const regPassword = /[^A-Za-z0-9_]/g;
        const regBigLetter =/[A-Z]/;
        const regSmallLetter =/[a-z]/;
        const regNumber =/[0-9]/;
        if(
            password.length < 8 || 
            regPassword.test(password)||
            !regBigLetter.test(password) ||
            !regSmallLetter.test(password) ||
            !regNumber.test(password)
        ){

            return false;
        }
        return true;
    };
}
test();
function test(){
    testEmails();
    testPhone();
    validatePassword();
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