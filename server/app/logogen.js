// assign number value for each character in english keyboard
var characters = '0123456789!@#$%^&*()_+abcdefghijklmnopqrstuvwxyz';
var charValue = {};
for ( var i = 0; i < characters.length; i++ ){
  charValue[characters[i]] = i;
};

// var logoGen = function(firstname, lastname, definedBy, color){
exports.logoGen = function(firstname, lastname, definedBy, color){
  firstname = firstname || 'firstname';
  lastname = lastname || 'lastname';
  definedBy = definedBy || 'definedBy';
  // get color and slice off the opacity
  color = color || randomColor() ;
  color = color.slice(0, color.length - 4);

  var cellsInRow = 50;
  var cellsInCol = 50;
  var boxSize = cellsInRow * cellsInCol;

  var result = [];

  // create opacities avaiable for use
  var opacities = { length: boxSize };
  for (var i = 0; i < boxSize; i++ ){
    opacities[i] = i / boxSize ;
  }

  // get input value by looping through each character and accumulating its value
  var addValue = function(string, importance){
    var accum = 0;
    for ( var i = 0; i < string.length; i++ ){
      // get value of current character and multiply by importance
      var currentCharValue = importance * charValue[string[i]];
      // if character does not have a value, add 1 to ID
      accum = currentCharValue ? accum + currentCharValue : accum + 1;
    }
    return accum;
  }
  
  // get value of current inputs
  var uniqueID = Math.floor( addValue(firstname, 0.25) + 
                             addValue(lastname, 0.5) + 
                             addValue(definedBy, 1) );

  // generate random array
  var loc = uniqueID - Math.ceil( Math.pow(Math.sqrt(uniqueID), 1.5) );
  var shifter = 1;
  var tempshifter = 0;
  var numLoops = 0;
  while ( opacities.length > 0 ){
    numLoops++;
    if ( opacities.length === 1 ){
      opacities.length--;
      result.push(opacities[0]); 
      delete opacities[loc];    
    } else {
      if ( opacities[loc] ){
        opacities.length--;
        result.push(opacities[loc]);
        delete opacities[loc];
      }
      if ( loc < 0 ){
        loc = -loc ;
      } else if ( loc > boxSize){
        tempshifter += Math.floor(Math.sqrt(loc), 1.2);
        if ( tempshifter > boxSize ){
          tempshifter = shifter;
          shifter++;
        }
        loc = tempshifter;
      } else {
        loc = loc + Math.ceil( Math.sqrt(loc) + Math.pow(Math.sqrt(loc), 1.8) - Math.pow(Math.sqrt(loc), 1.1) );
      }
    }
  }

  // add random opacity for each color
  for ( var i = 0; i < boxSize; i++ ){
    result[i] = color + result[i] + ')' ;
  }

  console.log('Your unique ID value is ' + uniqueID + ' while the box size is ' + boxSize + '.' + 
              '\nYour algorithim took ' + numLoops + ' loops to execute... think you can do better? :)');
  
  return result;
};

// random color generator if none sent from application
var randomColor = function(){
  return 'RGBA(' + Math.ceil(Math.random()*225) + ','
                 + Math.ceil(Math.random()*225) + ','
                 + Math.ceil(Math.random()*225) + ','
                 + '1.0' + ')';
};
