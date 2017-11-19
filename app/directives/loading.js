// Showing loading indicator on top while data is requested from database
app.directive('loading', ['$http', 'ngProgress', function ($http, ngProgress) {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v) {
                if (v) {
                    ngProgress.start();
                } else {
                    ngProgress.complete();
                }
            });
        }
    };
}]);