angular.module('Convert', [])
  .controller('currConverter', ['$scope', '$http', function ($scope, $http) {
      $scope.rates = {};
      $http.get('http://api.fixer.io/latest?base=INR&symbols=USD,CAD,EUR')
        .then(function (res) {
            $scope.rates = res.data.rates;
            $scope.toType = $scope.rates.EUR;
            $scope.fromType = $scope.rates.USD;
            $scope.fromValue = 0.00;
            $scope.currConvert();
        });
      $scope.currConvert = function () {
          $scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
          $scope.toValue = $scope.toValue;
      };
  }]);
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode;
    return !(charCode > 31 && (charCode < 46 || charCode > 57));
}