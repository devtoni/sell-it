
function ApiService ($http) {
  function getProducts () {
    const url = `/api/products/all/`
    return $http.get(url)
  }

  function getCategories () {
    const url = `/api/categories/`
    return $http.get(url)
  }

  return { getProducts, getCategories }
}

ApiService.$inject = ['$http']

angular
      .module('adminApp')
      .factory('ApiService', ApiService)
