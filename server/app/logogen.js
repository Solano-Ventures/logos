exports.logoGen = function(firstname, lastname, definedBy, color){
  firstname = firstname || 'firstname';
  lastname = lastname || 'lastname';
  definedBy = definedBy || 'definedBy';
  var boxSize = 50 * 50;
  var result = [];

  // get color and slice off the opacity
  color = color || randomColor() ;
  color = color.slice(0, color.length - 4);

  var uniqueProp = firstname.length + lastname.length + definedBy.length;
  var currentOpa = Math.ceil( 1 / uniqueProp * 100) / 100;

  for ( var i = 0; i < boxSize; i++ ){
    // add random opacity for each color
    currentOpa = +(currentOpa + .05).toFixed(2);
    if ( currentOpa > 1 ){
      currentOpa = Math.ceil( 1 / uniqueProp * 100) / 100;
    }
    result.push( color + currentOpa + ')' );
  }

  return result;
};

// random color generator if none sent from application
var randomColor = function(){
  return 'RGBA(' + Math.ceil(Math.random()*225) + ','
                 + Math.ceil(Math.random()*225) + ','
                 + Math.ceil(Math.random()*225) + ','
                 + '1.0' + ')';
};
