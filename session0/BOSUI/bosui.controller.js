/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('Session0BOSUIController', Session0BOSUIController);

    /** @ngInject */
    function Session0BOSUIController($location,$cookies,$timeout) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 10;

        var vm=this;
        
       
        vm.next=function () {
            //$location.path('/session0/emp');
            $location.path('/session0/introduction1');
        }
    }

})();