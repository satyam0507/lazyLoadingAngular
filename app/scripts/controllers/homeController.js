'use strict';

define(['app'], function(app)
{
    app.controller('homeController',
    [
        '$scope',

        function($scope)
        {
            $scope.data ='Home';
        }
    ]);
});