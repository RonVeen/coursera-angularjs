(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject("$scope");
function LunchCheckController($scope) {
  $scope.content = "";
  $scope.partCount = 0;


  $scope.verifyContent = function(content) {
	$scope.partCount = (content == "" ? 0 : content.split(',').length);
  };
};


})();
