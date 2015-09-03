function friendly(str) {
  var duplicate=1;
  //////check for dupes////
   function check(thing1, thing2) {
    for(var i = thing1.length; i--;) {
        if(thing1[i] !== thing2[i])
            duplicate=0;
    }
}
  check(str[0],str[1]);
  
  ///declare vars///
  str1=str[0].split('-');
 str2=str[1].split('-');
  
  ////convert function///
  var monthify=function(month){
    if(month==="01"){
      return "January";
    }
    if(month==="02"){
      return "February";
    }
    if(month==="03"){
      return "March";
    }
    if(month==="04"){
      return "April";
    }
    if(month==="05"){
      return "May";
    }
    if(month==="06"){
      return "June";
    }
    if(month==="07"){
      return "July";
    }
    if(month==="08"){
      return "August";
    }
    if(month==="09"){
      return "September";
    }
    if(month==="10"){
      return "October";
    }
    if(month==="11"){
      return "November";
    }
    if(month==="12"){
      return "December";
    }
    
  }
  
  function datify(date){
    if(date==="11"||date==="12"||date==="13"){
      return date+"th";
    }
    else{
      
       date=date.split("");
      
      if(date[1]==="1"){
        return date.join("")+"st";
      }
      if(date[1]==="2"){
        return date.join("")+"nd";
      }
      if(date[1]==="3"){
        return date.join("")+"rd";
      }
      
      else{
        
        return date.join("")+"th";
      }
    }
  }
  
  function datefix(date){
    date=date.split("");
    if(date[0]==="0"){
      date.splice(0,1);
      
      return date.join("");
      
    }
    else{
      
      return date.join("");
    }
  }
  
  ////function to remove reduntant values.////
function remover(thang1,thang2){
  if(duplicate===0){
    if(thang1[1]===thang2[1]&&thang1[0]===thang2[0]){
    thang2.splice(1,1);
    }
  
    if(thang1[0]===thang2[0]){
     thang1.splice(0,1);
    thang2.splice(0,1);
    }
    if(Number(thang2[0])===Number(thang1[0])+1 && Number(thang1[1])+Number(thang2[1])===14){
      thang1.splice(0,1);
    thang2.splice(0,1);
    }
  }
 
}
remover(str1,str2);
  
 
 
  ////apply convert/////
  function applyConvert(raw){
    if(raw.length===3){
     raw.push(raw.shift());
      raw[0]=monthify(raw[0]);
      raw[1]=datify(raw[1]);
      raw[1]=datefix(raw[1]);
      
      raw[0]=raw[0]+" "+raw[1]+", "+raw[2];
      raw.splice(1,2);
      
    }
    else if(raw.length===1){
      raw[0]=datify(raw[0]);
      raw[0]=datefix(raw[0]);
    }
    else if(raw.length===2){
      raw[0]=monthify(raw[0]);
      raw[1]=datify(raw[1]);
      raw[1]=datefix(raw[1]);
      
       raw[0]=raw[0]+" "+raw[1];
      raw.splice(1,1);
    }
    
    
  }
  //////return string but only one if duplicate//
if(duplicate===1){
  applyConvert(str1)
  return str1;
  
}
  if(duplicate===0){
    applyConvert(str1);
    applyConvert(str2);
    return str1.concat(str2);
    
  }
   
  
}
