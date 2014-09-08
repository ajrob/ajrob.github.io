'use strict';

var mainApp = angular.module('mainApp', ['ui.router']);
mainApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'mainCtrl'
    })
      .state('main.projects', {
        url: "projects",
        templateUrl: "views/main.projectsView.html",
        controller: 'projectsCtrl'
      });
});

// mainApp.config(function($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise("/projects");

//   $stateProvider
//     .state('projects', {
//       url: "projects",
//       template: "views/projectsView.html",
//       controller: 'projectsCtrl'
//     })
//     .state('home', {
//       url: "/",
//       controller: 'projectsCtrl'
//     });
// });