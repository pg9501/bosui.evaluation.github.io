/**
 * Created by pg9501 on 19.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('OperatorLoginInfoController', OperatorLoginInfoController);

    /** @ngInject */
    function OperatorLoginInfoController($scope,$location) {
        
       var vm=this;
        vm.isFinished=false;

        $scope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {

                if(!vm.isFinished){
                    event.preventDefault(); // This prevents the navigation from happening
                }
            }
        );
        vm.next=function () {
            vm.isFinished=true;
            $location.path('/operator/task1');
        }
    }

})();