d3.json("data.json", function(error, data){
    if (error) return console.warn(error);
    var numCells = Math.sqrt(data.logo.length);
    showGraph(data.logo, numCells);
  });

var showGraph = function(logoData, numCells){

  var cellWidth = window.innerWidth/numCells;
  var cellHeight = window.innerHeight/numCells;

  var svg = d3.select('.content').append('svg')
                                 .attr('width', window.innerWidth)
                                 .attr('height', window.innerHeight);

  var counter = { x: 0,
                  y: 0  };

  var cell = svg.selectAll(".cell")
                .data(logoData)
                .enter()
                .append("svg:rect")
                .attr("class", "cell")
                .attr("x", function(d,i){
                  counter.x = (i % numCells === 0) ? 0 : counter.x += 1;
                  return counter.x * cellWidth;
                })
                .attr("y", function(d,i){
                  if ( i % numCells === 0 ) counter.y++;
                  return counter.y * cellHeight;
                })
                .attr("width", cellWidth)
                .attr("height", cellHeight)
                .attr("fill", function(d,i){
                  return d;
                })
                .attr("fill-opacity", 0);

  svg.selectAll(".cell").transition()
                .delay(function(d,i){ return  Math.floor(Math.random() * 0) })
                .attr("fill-opacity", function(d,i){
                  return d.slice(-4,-1);
                });

  // svg.selectAll(".cell").on("mouseover",function(d,i){
  //                         d3.select(this)
  //                           .transition().delay(5)
  //                           .attr('fill', randomColor())
  //                       });

};

var randomColor = function(){
  return 'RGBA(' + Math.ceil(Math.random()*225) + ','
                 + Math.ceil(Math.random()*225) + ','
                 + Math.ceil(Math.random()*225) + ','
                 + Math.random().toFixed(2) + ')';
};
