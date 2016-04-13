angular.module('sixtyminapp', [])
  .controller('sixtycontroller', ['$http', function($http) {

    var self = this;
    self.test = 'hi';
    self.message = "";
    self.messages = {};
    self.sendPost = function() {
      $http.post('/messages', {'message': self.message})
        .then(function(res) {
          console.log('message saved');
          self.retrieveMessages();
        })
    };

    self.retrieveMessages = function() {
      $http.get('/messages').then(function(res) {
        console.log(res.data);
        self.messages = res.data;
      });
    };

    self.retrieveMessages();

  }]);
