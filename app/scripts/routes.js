define([], function()
{
    return {
        routes: {
            '/home': {
                templateUrl: '/views/home.html',
                dependencies: [
                    'controllers/homeController'
                ]
                
            },
            '/about': {
                templateUrl: '/views/about.php',
                 dependencies: [
                    'controllers/aboutController'
                ]
               
            },
            '/contact': {
                templateUrl: '/views/contact.html',
                dependencies: [
                    'controllers/contactController'
                ]
                
            }
        }
    };
});