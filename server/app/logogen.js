exports.logoGen = function(firstname, lastname, definedBy, color){
  firstname = firstname || 'firstname';
  lastname = lastname || 'lastname';
  definedBy = definedBy || 'definedBy';
  var boxSize = 50 * 50;
  var result = [];

  // get color and slice off the opacity
  color = color || randomColor() ;
  color = color.slice(0, color.length - 4);

  for ( var i = 0; i < boxSize; i++ ){
    // add random opacity for each color
    var opacity = Math.random().toFixed(2) + ')';
    result.push( color + opacity );
  }

  return result;
};

// random color generator if none sent from application
var randomColor = function(){
  return 'RGBA(' + Math.ceil(Math.random()*225) + ', '
                 + Math.ceil(Math.random()*225) + ', '
                 + Math.ceil(Math.random()*225) + ', '
                 + '1.0' + ')';
};
