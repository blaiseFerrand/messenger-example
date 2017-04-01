
var app = angular.module('messenger', []);

app.controller('MainCtrl', [
  // $scope allows datat sharing with
  '$scope',

  function($scope){
    $scope.test = 'Hello World';

    $scope.posts = [
      'post 1',
      'post 2',
      'post 3',
      'post 4',
      'post 5'
    ];

    $scope.posts2 = [
      {title:'post 1', upvotes: 5},
      {title:'post 2', upvotes: 2},
      {title:'post 3', upvotes: 15},
      {title:'post 4', upvotes: 9},
      {title:'post 5', upvotes: 4}
    ];
  }]
);
