/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
          var input = '32.1L';
      assert.equal(convertHandler.getNum(input),32.1);
      done();
    });
    
    test('Fractional Input', function(done) {
          var input = '35/5L';
      assert.equal(convertHandler.getNum(input),7);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
          var input = '10/2.5L';
      assert.equal(convertHandler.getNum(input),4);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
          var input = '32-/-/2L';
      assert.equal(convertHandler.getNum(input),"invalid number");
      done();
    });
    
    test('No Numerical Input', function(done) {
          var input = 'L';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const UNITS = {
      "gal": "l",
      "l":"gal",
      "lbs":"kg",
      "kg": "lbs",
      "mi":"km",
      "km":"mi"
    }
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.notEqual(convertHandler.getUnit(ele),"invalid unit")
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = 'liiil'
      assert.equal(convertHandler.getUnit(input),"invalid unit");
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [1,"l"];
      var expected = 1/3.78541;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [3,"mi"];
      var expected = 4.82803;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [10,"km"];
      var expected = 6.21371;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [5,"lbs"];
      var expected = 2.26796;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [8,"kg"];
      var expected = 17.637;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
  });

});