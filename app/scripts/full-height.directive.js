(function () {
    angular.module('parallaxApp')
        .directive('fullHeight',['$window', function ($window) {
            function link(scope, elem, attr) {
                height = $window.innerHeight;
                elem.css('height', height+"px");
            }
            return {
                link: link,
                replace: true,
                template: '<div></div>'
            }
        }]);
})()