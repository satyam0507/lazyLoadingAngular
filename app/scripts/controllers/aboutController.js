'use strict';

define(['app'], function(app)
{
    app.controller('aboutController',
    [
        '$scope',

        function($scope)
        {
            $scope.data ='About';
        }
    ]);
});