// Code your solution in this file!


 const returnFirstTwoDrivers  = function(drivers) {
 const returnFirstTwoDrivers = drivers.slice(0,2);
    return returnFirstTwoDrivers;
 }

 const returnLastTwoDrivers = function (drivers) {
   const returnLastTwoDrivers = drivers.slice(2);
   return returnLastTwoDrivers;
 }
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier (num1) {
   return function (num1) {
      return num1 * 5;
   }
}

function fareDoubler(num2) {
return num2 * 2;
}

function fareTripler (num3) {
   return num3 * 3;
}
const selectDifferentDrivers = function(drivers, cb){
return cb(drivers);
} 
