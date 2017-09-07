
function ApiService ($http) {
  function getProducts () {
    const url = `/api/products/all/`
    return $http.get(url)
  }

  function getCategories () {
    const url = `/api/categories/`
    return $http.get(url)
  }

  function getTotalUsers () {
    const url = `/api/users/`
    return $http.get(url)
  }

  function deleteProduct (id) {
    const url = `/user/delete/product/${id}`
    return $http.delete(url)
  }

  return { getProducts, getCategories, getTotalUsers, deleteProduct }
}

ApiService.$inject = ['$http']

angular
      .module('adminApp')
      .factory('ApiService', ApiService)
