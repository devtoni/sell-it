


function DataService ($http) {

  function getProducts () {
    const url = `/api/products`
    return $http.get(url)
  }

  return {
    getProducts
  }
  
}

DataService.$inject = ['$http']

angular
      .module('adminApp')
      .factory('DataService', DataService)
})
