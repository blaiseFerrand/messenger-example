
var app = angular.module('messenger', []);

app.controller('MainCtrl', [
  // $scope allows datat sharing with .html
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

    $scope.addPost = function() {
      $scope.posts2.push({title: 'a new post', upvotes: 1});
    };

    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') {return;}
      // pulls from model in input field
      $scope.posts2.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0});
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };

  }]
);
