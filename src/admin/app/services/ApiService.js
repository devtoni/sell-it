
function ApiService ($http) {
  function getProducts (projection) {
    const url = `/api/products/all/`
    return $http.get(url)
  }

  function getCategories () {
    const url = `/api/categories/`
    return $http.get(url)
  }

  function getTotalUsers () {
    console.log('getTotalUsers...')
    const url = `/api/users`
    console.log(url)
    return $http.get(url)
  }

  return { getProducts, getCategories, getTotalUsers }
}

ApiService.$inject = ['$http']

angular
      .module('adminApp')
      .factory('ApiService', ApiService)
