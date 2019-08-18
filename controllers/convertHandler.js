/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const UNITS = {
      "gal": "l",
      "l":"gal",
      "lbs":"kg",
      "kg": "lbs",
      "mi":"km",
      "km":"mi"
    }
  const regex = /[a-zA-Z]{1,3}/mg
  
  this.getNum = function(input) {
    
    var number = input.replace(regex,"")
    var result = number === ""?1:number
    try{
      return eval(result);
    }catch(err){
      return "invalid number"
    }
    
  };
  
  this.getUnit = function(input) {
    
    return UNITS[input.toLowerCase().match(regex)[0]]?input.toLowerCase().match(regex)[0]:"invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
      
    var result = UNITS[initUnit];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
        const UNITS = {
      "gal": "gallons",
      "l":"liters",
      "lbs":"pounds",
      "kg": "kilograms",
      "mi":"miles",
      "km":"kilometers"
    }
    var result= UNITS[unit];
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const RATES ={
      "gal": galToL,
      "l": 1/galToL,
      "lbs": lbsToKg,
      "kg": 1/lbsToKg,
      "mi": miToKm,
      "km": 1/miToKm
    }
  
    var result =initNum*RATES[initUnit];
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
  
    
    var result =initNum.toFixed(5) + " "+ this.spellOutUnit(initUnit) + " converts to "+ returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit) ;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
