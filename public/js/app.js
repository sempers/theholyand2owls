angular.module('myApp', ['ngRoute', 'ngResource', 'myApp.controllers']).
config(function ($routeProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
});
