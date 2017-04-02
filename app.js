
var app = angular.module('messenger', []);

app.factory('posts', [function(){
  var o = {
    posts:[]
  };
  return o;
}])

app.controller('MainCtrl', [
  // $scope allows data sharing with index.html
  '$scope',

  // adding factory stuff
  'posts',

  function($scope, posts){
    $scope.test = 'Hello World';

    $scope.postsA = [
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

    // using factory instead
    $scope.posts = posts.posts;

    $scope.addPost = function() {
      // $scope.posts.push({title: 'a new post', upvotes: 1});
      $scope.posts.push({title: 'a new post', upvotes: 1});
    };

    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') {return;}
      // pulls from model in input field
      // $scope.posts2.push({
      $scope.posts.push({
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
