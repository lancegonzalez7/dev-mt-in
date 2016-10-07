angular.module('devFriends', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('initial', {
                url: '/',
                views: {
                    header: {
                        templateUrl: 'headers/headerInitialTmpl.html',
                        // controller: 'initialCtrl'
                    },
                    main: {
                        templateUrl: 'js/initial/initialTmpl.html',
                        controller: 'initialCtrl'
                    }
                }
            })
            .state('landing', {
                url: '/landing:id',
                views: {
                    header: {
                        templateUrl: 'headers/headerLandingTmpl.html',
                        // controller: 'initialCtrl'
                    },
                    main: {
                        templateUrl: 'js/landing/landingTmpl.html',
                        controller: 'landingCtrl'
                    }
                }
            })
            .state('friend', {
                url: '/friend:id',
                views: {
                    header: {
                        templateUrl: 'headers/headerBackTmpl.html',
                        // controller: 'initialCtrl'
                    },
                    main: {
                        templateUrl: 'js/friend/friendTmpl.html',
                        controller: 'friendCtrl'
                    }
                }
            })
            .state('myFriends', {
                url: '/myFriends',
                views: {
                    header: {
                        templateUrl: 'headers/headerBackTmpl.html',
                        // controller: 'initialCtrl'
                    },
                    main: {
                        templateUrl: 'js/myFriends/myFriendsTmpl.html',
                        controller: 'myFriendsCtrl'
                    }
                }
            })
            .state('search', {
                url: '/search',
                views: {
                    header: {
                        templateUrl: 'headers/headerBackTmpl.html',
                        // controller: 'initialCtrl'
                    },
                    main: {
                        templateUrl: 'js/search/searchTmpl.html',
                        controller: 'searchCtrl'
                    }
                }
            })
            .state('update', {
                url: '/update',
                views: {
                    header: {
                        templateUrl: 'headers/headerBackTmpl.html',
                        // controller: 'initialCtrl'
                    },
                    main: {
                        templateUrl: 'js/update/updateTmpl.html',
                        controller: 'updateCtrl'
                    }
                }
            })
        $urlRouterProvider.otherwise('/');
    });
