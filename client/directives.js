angular.module('myApp.directives', ['d3'])
  .directive('displayLogo', ['d3Service', function(d3Service) {

    return {
      restrict : 'EA',
      scope : {},
      link : function(scope, element, attr) {

        var space = {
          margin : parseInt(attrs.margin) || 20,
          height : parseInt(attrs.height) || 500,
          width : parseInt(attrs.width) || 500
        };

        d3Service.d3().then(function(d3) {
          var svg = d3.select(element[0])
            .append('svg')
            .style('width', '80%');
        });

        window.onresize = function() {
          scope.$apply();
        };

        scope.data = [
          {name: 'Chris', age : 29},
          {name: 'Jon', age: 24}
        ];

        scope.$watch(
          function() {return angular.element($window)[0].innerWidth; },
          function() { scope.render(scope.data); }
        );

        scope.render = function(data) {
          svg.selectAll('*').remove();

          if (! data) { return; }
          var width = d3.select(ele[0]).node().offsetWidth - space.margin;
          var height = d3.select(ele[0]).node().offsetHeight - space.margin;

        }
      }
    }
  }]);

angular.module('d3', [])
  .factory('d3Service', ['$document', '$q', '$rootScope',

    function($document, $q, $rootScope) {
      var d = $q.defer();

      function onScriptLoad() {
        $rootScope.$apply(function() {d.resolve(window.d3); });
      }

      var scriptTag = $document[0].createElement('script');
      scriptTag.type ='text/javascript';
      scriptTag.async = true;
      scriptTag.src = 'http://d3js.org/d3.v3.min.js';
      scriptTag.onreadystatechange = function () {
        if (this.readyState == 'complete') onScriptLoad();
      };
      scriptTag.onload = onScriptLoad;

      var body = $document[0].getElementsByTagName('body')[0];
      body.appendChild(scriptTag);

      return {
        d3 : function() { return	d.promise; }
      };

    }]);