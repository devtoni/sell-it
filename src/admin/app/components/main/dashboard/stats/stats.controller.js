(function () {
  'use strict'
  const app = angular.module('adminApp')
  function StatsCtrl (ApiService, ServiceChart, $rootScope, $filter) {
    const self = this
    self.productOptions = [{name: 'Active/No Active', value: 'active', code: '1'}, {name: 'By Day', value: 'day'}]
    self.userOptions = [{name: 'Gender', value: 'gender'}, {name: 'Location', value: 'location'}, {name: 'Age', value: 'age'}]
    self.categoriesOptions = [{name: 'Product'}]

    self.optionSelection = () => {
      self.getInfo = (option) => {
        let values
        switch (option) {
          case 'products':
            values = self.checked
            $rootScope.$broadcast('optionsSelection', { getDataFrom: 'products', values })
            break
          case 'users':
            values = self.checked
            $rootScope.$broadcast('optionsSelection', { getDataFrom: 'users', values })
            break
          case 'categories':
            values = self.checked
            $rootScope.$broadcast('optionsSelection', { getDataFrom: 'categories', values })
            break
        }
      }
    }
  }

  app.controller('StatsCtrl', ['ApiService', 'ServiceChart', '$rootScope', '$filter', StatsCtrl])
})()
