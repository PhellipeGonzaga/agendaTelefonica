var app = angular.module('ListaTelefonica', ['ngResource', 'ngProgress', 'ngAnimate', 'toaster']);

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('myHttpInterceptor');
});

// Handle http server errors
app.factory('myHttpInterceptor', function ($q, toaster) {
  return {
    responseError: function (response) {
      console.log(response);
      if (response.data) {
        if (response.data.message)
          toaster.error("Error: ", response.data.message);
        else
          toaster.error("Error: ", response.data);
      }
      return $q.reject(response);
    }
  };
});