angular.module('myApp.directives')
  .directive('logoDisplay', [ function () {
    return {
      restrict: 'EA',
      replace: true,
      // scope: {
      //   data: '='
      // },
      link: function (scope, element, attrs) {
        var vis = d3.select(element[0])
          .append('svg')
          .style('width', '100%')
          .style('height', '100%');

          scope.$watch('data', function (logoData) {
            while (logoData.logo) {
              console.log('LOGODATA CAHNGED WWOOO');
              logoData = logoData.logo;
            }
            if (logoData.firstName) {
              logoData = logoData.logo;
            }
            console.log('watcher fired');
            console.log(logoData);

          var numCells = Math.sqrt(logoData.length);

          var cell = {
            height: document.getElementById('d3logo').offsetHeight/numCells,
            width: document.getElementById('d3logo').offsetWidth/numCells
          };

          var counter = {
            x: 0,
            y: 0
          };

          vis.selectAll('*').remove();

          angular.forEach(logoData, function (item, index) {
            vis.append('svg:rect')
              .attr({
                'height': cell.height,
                'width': cell.width,
                'x': function() {
                  counter.x = (index % numCells ===0) ? 0: counter.x +=1 ;
                  return counter.x * cell.width; },
                'y': function() {
                  if (index % numCells === 0) { counter.y++; }
                  return counter.y * cell.height;
                },
                'fill': item,
                'fill-opacity' : 0
              })
              .transition()
              .duration(2000)
              .delay(function() { return Math.floor(Math.random() * 2000); })
              .attr('fill-opacity', function() {
                //return item.slice(-4, -1);
                return 1;
              });
          });
        });
      }
    };
  }]);
