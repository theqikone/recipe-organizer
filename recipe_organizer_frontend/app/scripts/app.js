'use strict';

/**
 * @ngdoc overview
 * @name recipeOrganizerFrontendApp
 * @description
 * # recipeOrganizerFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('recipeOrganizerFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/recipes/:recipeId', {
        templateUrl: 'views/recipe-details.html',
        controller: 'RecipeDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'

      });
    RestangularProvider.setBaseUrl('http://localhost:8001');
  });
