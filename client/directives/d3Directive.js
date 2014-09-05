angular.module('myApp.directives', [])
  .directive('barChart', [ function () {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        data: '='
      },
      link: function (scope, element, attrs) {
        var vis = d3.select(element[0])
          .append('svg')
          .style('width', '100%');

        scope.$watch('data', function (newValue) {
          vis.selectAll('*').remove();

          angular.forEach(newValue, function (item, index) {
            vis.append('rect')
              .attr({
                'height': 30,
                'width': 0,
                'x': 30,
                'y': 30 * index,
                'fill': 'red'
              })
              .transition()
              .duration(2000)
              .attr({
                'height': 30,
                'width': item.score * 4,
                'x': 30,
                'y': 30 * index,
                'fill': 'red'
              })
          })
        });
      }
    };
  }]);
