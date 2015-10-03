new WOW().init();

var app = angular.module('frontendApp', ['ngRoute']);

/**
 * Application Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
    // Dashboard
    .when("/", {templateUrl: "partials/dashboard.html", controller: "DashboardController"})
    // Partials
    .when("/brstn", {templateUrl: "partials/brstn.html", controller: "BRSTNController"})
    .when("/latest-pchc-broadcast", {templateUrl: "partials/latest-pchc-broadcast.html", controller: "LatestPchcBroadcastController"})
    .when("/all-process", {templateUrl: "partials/all-process.html", controller: "AllProcessController"})
    .when("/outward-tagging", {templateUrl: "partials/outward-tagging.html", controller: "OutwardTaggingController"})
    .when("/on-us-archives", {templateUrl: "partials/on-us-archives.html", controller: "OnUsArchivesController"})
    .when("/users", {templateUrl: "partials/users.html", controller: "UsersController"})
    .when("/branch", {templateUrl: "partials/branch.html", controller: "BranchController"})
    .when("/config-user-setup", {templateUrl: "partials/config-user-setup.html", controller: "ConfigUserSetupController"})
    .when("/reports", {templateUrl: "partials/reports.html", controller: "ReportsController"})
    .when("/branches", {templateUrl: "partials/branches.html", controller: "BranchesController"})
    .when("/user-setup", {templateUrl: "partials/user-setup.html", controller: "UserSetupController"})
    .otherwise({ redirectTo: '/' });

}]);

/**
 * Application Controllers
 */
app.controller('DashboardController', function ($scope) {

  $scope.header = 'Dashboard';

});

app.controller('BRSTNController', function ($scope) {

  $scope.header = 'BRSTN';

});

app.controller('LatestPchcBroadcastController', function ($scope) {

  $scope.header = 'Latest PCHC Broadcast';

});

app.controller('AllProcessController', function ($scope) {

  $scope.header = 'All Process';

});

app.controller('OutwardTaggingController', function ($scope) {

  $scope.header = 'Outward Tagging';

});

app.controller('OnUsArchivesController', function ($scope) {

  $scope.header = 'On-US Archives';

});

app.controller('UsersController', function ($scope) {

  $scope.header = 'Users';

});

app.controller('BranchController', function ($scope) {

  $scope.header = 'Branch';

});

app.controller('ConfigUserSetupController', function ($scope) {

  $scope.header = 'User Setup';

});

app.controller('ReportsController', function ($scope) {

  $scope.header = 'Reports';

});

app.controller('BranchesController', function ($scope) {

  $scope.header = 'Branches';

});

app.controller('UserSetupController', function ($scope) {

  $scope.header = 'User Setup';

});

/**
*Directive's
*/
app.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
   };
});

app.controller('TimeController', function ($scope,$timeout) {
    $scope.clock = "loading clock...";
    $scope.tickInterval = 1000;

    var tick = function() {
        $scope.clock = Date.now();
        $timeout(tick, $scope.tickInterval);
    }

    $timeout(tick, $scope.tickInterval);
});

app.controller('TabsController', function ($scope,$location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});
