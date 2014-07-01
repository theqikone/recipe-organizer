'use strict';

/**
 * @ngdoc function
 * @name recipeOrganizerFrontendApp.controller:RecipeDetailCtrl
 * @description
 * # RecipeDetailCtrl
 * Controller of the recipeOrganizerFrontendApp
 */
angular.module('recipeOrganizerFrontendApp')
  .controller('RecipeDetailCtrl', function ($scope, $routeParams, Restangular) {
        $scope.recipeId = $routeParams.recipeId;

        Restangular.one('recipes', $scope.recipeId).customGET().then(function (data) {
            $scope.recipe = data;
        });
    });