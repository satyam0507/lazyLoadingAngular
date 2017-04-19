'use strict';

define(['app'], function(app)
{
    app.controller('contactController',
    [
        '$scope',

        function($scope)
        {
            $scope.data ='Contact';
        }
    ]);
});