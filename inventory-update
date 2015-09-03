
///takes a 2d array of products and updates an internal inventory/////

function inventory(arr1, arr2) {
  var obj1 = {};
  var obj2={};
  ////turn both arrays into objects//
  function toObject(array1,array2) {
  
  for (var i = 0; i < array1.length; ++i){
    obj1[array1[i][1]]=array1[i][0];
  }
    for(var j=0;j<array2.length;++j){
      obj2[array2[j][1]]=array2[j][0];
    }
    
}
  
  ///
   toObject(arr1,arr2);
  
  
  ///process inventories///
  for(item in obj2){
    if(obj1.hasOwnProperty(item)){
      obj1[item]+=obj2[item];
    }
      else{
        obj1[item]=obj2[item];
      }
  }
  
  ///
 
  ///turn both or one? objects back into arrays//
  var arr3=[];
  for(key in obj1){
    arr3.push([obj1[key],key])
  }
   curInv=arr3;;
  ////
  
  ///sort by alphabet//
  

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
};
  curInv.sort(compareSecondColumn);
  ///
  return curInv;
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);
