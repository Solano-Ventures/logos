angular.module('LogosMain.directives', [])
.directive('visLogo', [ function () {
  return {
    restrict: 'EA',
    replace: true,
    link: function (scope, element, attrs) {
      console.log('watching');
      scope.$watch('fire', function(newValue) {
        if (newValue) {
        console.log('watch fired');
          var logoData = scope.templogos;
          console.log('GET RID OF TEMP LOGOS');
          var vis = d3.select(element[0])
            .insert('svg')
            .style('position', 'absolute')
            .style('width', '100%')
            .style('height', '100%');

          var numCells = Math.sqrt(logoData.length);
          var cell = {
            height: 300/numCells,
            width: 300/numCells
          };
          var counter = {
            x: 0,
            y: 0
          };
          vis.selectAll('*').remove();
          angular.forEach(logoData, function (item, index) {
            vis.append('svg:rect')
              .attr({
                'position' : 'absolute',
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
              .delay(function() {
               return Math.floor(Math.random() * 2000);
              })
              .attr('fill-opacity', function() {
                return item.slice(-4, -1);
              })
              .remove();
          });
        }
      });

      }
    };
  }]
);
