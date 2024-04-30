angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-api-joc-env.eba-yzxt3mp5.us-east-1.elasticbeanstalk.com/';

    return service;
}]);