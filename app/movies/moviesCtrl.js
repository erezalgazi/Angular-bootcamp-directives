"use strict"
angular.module('movieLibrary').controller('MoviesCtrl', ['$scope', '$timeout', '$filter', '$mdDialog', '$mdToast', 'MoviesService',  function($scope, $timeout, $filter, $mdDialog, $mdToast, moviesService) {
  $scope.isDeleting = false;
 
  var init = function(){
    $scope.search = {
      name: ''
    };
    $scope.loadingImage = "http://sierrafire.cr.usgs.gov/images/loading.gif";
    
    setTimeout(function(){
      $scope.movies = moviesService.getMovies();   
      console.log('Movies loaded successfully'); 
      $scope.$apply();  
    }, 2000);
  }
  
  $scope.addMovie = function(){
    alert("This functionality will be available soon!");
  };
  
  $scope.deleteMovies = function(){
    $scope.isDeleting = true;
  };
  
  $scope.doneDeleteMovies = function(){
    $scope.isDeleting = false;
  };
  
  $scope.deleteMovie = function($index, movie){
     var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete ' + movie.name + '?')
          .textContent('Deleted movies cannot return!')
          .ok('Yes')
          .cancel('No');
    $mdDialog.show(confirm).then(function() {
          $scope.movies.splice($index, 1);
    }, function() {
          //do nothing
    });
  }
  
  init();
 }]);