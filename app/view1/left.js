'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ["$scope", '$http', function ($scope, $http) {

        var config = {
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        };

        function successCallBack(response) {
            debugger;
            var filteredRawComments = response.data.data.map(function(item){
                return item.body;
            });
            console.log(filteredRawComments);
        }

        function errorCallBack(response) {
            //shit broke
        }

        function makeRequest(){
            $http.get("https://api.pushshift.io/reddit/search?q=@body[1]dp&limit=500&subreddit=churning").then(successCallBack, errorCallBack);
        }

        makeRequest();
    }
    ]);