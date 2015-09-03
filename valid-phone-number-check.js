///checks a string of numbers and symbols, then returns true if its a valid US telephone number, false if its not
////////
function telephoneCheck(str) {
  var tester=/1+\d{10}/g;
  catch1=/\({1}\d{10}\){1}/g;
  catch2=/\-1\s/g;
 
  function fullTest(number){
     number=number.replace(/[\D*]/gi, "");
      if(number.length===10){
      return true;
       }
      if(number.length===11){
         
          if(tester.test(number)){
          return true;
           }
         else{
          return false;
             }
       }
   else{
     return false;
   }  
  }
 if(catch1.test(str)||catch2.test(str)){
      return false;
       }
  else{
    return fullTest(str);
  }
}
