
var data = ["RGBA(225, 0, 0, 0.7)",
		    "RGBA(225, 0, 0, 0.5)",
			"RGBA(225, 0, 0, 0.3)",
			"RGBA(225, 0, 0, 0.9)",
			"RGBA(225, 0, 0, 0.9)",
		    "RGBA(225, 0, 0, 0.3)",
			"RGBA(225, 0, 0, 0.5)",
			"RGBA(225, 0, 0, 0.7)",
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)" ,
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)",
      "RGBA(225, 0, 0, 0.7)",
        "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.9)",
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)",
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)" ,
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)",
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)",
      "RGBA(225, 0, 0, 0.7)",
        "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.9)",
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)",
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)" ,
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)",
      "RGBA(225, 0, 0, 0.7)",
        "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.9)",
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)",
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)" ,
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)",
      "RGBA(225, 0, 0, 0.9)",
        "RGBA(225, 0, 0, 0.3)",
      "RGBA(225, 0, 0, 0.5)",
      "RGBA(225, 0, 0, 0.7)"      ]



/*var xScale = d3.scale.linear()
	.domain([0,1])
	.range([0,1])

var yScale = d3.scale.linear()
	.domain([0,1])
	.range([0,1])
*/

var dataGrab = function(gridWidth, gridHeight){
	var sizeArr = [];
	var xPos = 0;
	var yPos = 0;
  var count = 0;
  var width = gridWidth;
  var height = gridHeight;

	for(var i = 0; i < height; i++){
		sizeArr.push([])
		for(var j = 0; j < width; j++){
		  sizeArr[i].push({
                      width: width,
                      height: height,
                      x: xPos,
                      y: yPos,
                      count: count
                      })
      xPos += width;
      count += 1;
		}
    xPos = 0;
    yPos += height;
	}
  return sizeArr;
}

var sizeData = dataGrab(8,8) 

////////need to change what element to select when merging with angular///////
var grid = d3.select('#square').append('svg').style('width', '80%')

var row = grid.selectAll(".row")
  .data(sizeData)
  .enter().append("svg:g")
  .attr("class", "row");

var col = row.selectAll(".cell")
  .data(function(d){return d;})
  .enter()
  .append("svg:rect")
  .attr("class", "cell")
  .attr("x", function(d){return d.x})
  .attr("y", function(d){return d.y})
  .attr("width", function(d){return d.width})
  .attr("height",function(d){return d.height})
  /*.on('mouseover',function(){
    d3.select(this)
      .style('fill', '#000')
  })
  .on('mouseout',function(){
    d3.select(this)
      .style('fill', '#fff')
  })*/
  .data(data)
  .attr("fill", function(d){ return d;})
  
/*grid.selectAll(".cell")
  .data(data)
	.attr("fill", function(d){ return d;})*/


	
