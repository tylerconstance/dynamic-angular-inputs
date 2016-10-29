var app = angular.module('app', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.title = 'My App.';
  $scope.things = [
    {
      name: 'one',
    }, {
      name: 'two',
    }, {
      name: '',
    },
  ];

  $scope.updateObject = function () {
    if (this.$last) {
      $scope.things.push({ name: '' });
    } else if (this.thing.name === '') {
      const index = this.$index;
      $scope.things.splice(index, 1);
      document.getElementsByClassName('last')[0].focus();
    }
  };
},
]);
