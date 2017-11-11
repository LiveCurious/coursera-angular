
(function()
{
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope)
{
$scope.value="";
$scope.result = "";


  $scope.Check = function()
      {
        var result ="";
            var array  =  $scope.value.split(',');
                if(array.length >3)
                {
                  result = "Too much";}
                else {
                  result= "We are good";
                }
    $scope.result= result;
    }
}


}());
