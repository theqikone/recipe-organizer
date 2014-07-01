'use strict';

/**
 * @ngdoc function
 * @name recipeOrganizerFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipeOrganizerFrontApp
 */
angular.module('recipeOrganizerFrontendApp')
    .controller('MainCtrl', function ($scope, Restangular) {
        Restangular.all('recipes').getList().then(function (data) {
            $scope.recipes = data;
            console.log(data);
        });
    });