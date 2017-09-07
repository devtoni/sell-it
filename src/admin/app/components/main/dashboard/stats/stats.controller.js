(function () {
  'use strict'
  const app = angular.module('adminApp')
  function StatsCtrl (ApiService, ServiceChart, $rootScope, $filter) {
    const self = this
    self.productOptions = [{name: 'Active/No Active', value: 'active'}, {name: 'By Day', value: 'day'}]
    self.userOptions = [{name: 'Gender', value: 'gender'}, {name: 'Location', value: 'location'}, {name: 'Age', value: 'age'}]
    self.categoriesOptions = [{name: 'Product'}]
    self.optionSelection = function () {
      self.getInfo = function (option) {
        let values
        switch (option) {
          case 'products':
            values = $filter('filter')(self.productOptions, {checked: true})
            $rootScope.$broadcast('optionsSelection', { getDataFrom: 'products', values })
            break
          case 'users':
            values = $filter('filter')(self.userOptions, {checked: true})
            $rootScope.$broadcast('optionsSelection', { getDataFrom: 'users', values })
            break
          case 'categories':
            values = $filter('filter')(self.categoriesOptions, {checked: true})
            $rootScope.$broadcast('optionsSelection', { getDataFrom: 'categories', values })
            break
        }
      }
    }
  }

  app.controller('StatsCtrl', ['ApiService', 'ServiceChart', '$rootScope', '$filter', StatsCtrl])
})()
