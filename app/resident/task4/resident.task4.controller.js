/**
 * Created by pg9501 on 16.10.2017.
 */
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('ResidentTask4Controller', ResidentTask4Controller);

    /** @ngInject */
    function ResidentTask4Controller($scope,$location,$cookies,$timeout,$http) {
        
        //console.log($rootScope.globalsForTasks.currentUserForTasks);

        var amt = 13;

        var vm=this;

        vm.buildingConsumption='';
        vm.communityConsumption='';
        vm.buildingCost='';
        vm.communityCost='';

        vm.timeLimit=20;
        vm.numberOfTasks=26;
        vm.remainingTime=100;
        vm.isFinished=false;

        $timeout(function(){
            vm.progressValue = (100*amt)/vm.numberOfTasks;
        }, 200);

        $scope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {

                if(!vm.isFinished){
                    event.preventDefault(); // This prevents the navigation from happening
                }
            }
        );

        vm.countTo = amt;
        vm.countFrom = 0;

        vm.username=($cookies.getObject('globalsForTasks') || {}).currentUserForTasks.username;
        
        vm.userSeq=vm.username.slice(vm.username.indexOf("_")+1)
        

        vm.finished = function(){
            // Finish callback
            if(!vm.isFinished) {
                vm.isFinished=true;
                var usedTime=vm.timeLimit;
                var task={role:"Resident",taskNum:"4",time:usedTime,userName:vm.username,answer1:vm.buildingConsumption,answer2:vm.communityConsumption,answer3:vm.buildingCost,answer4:vm.communityCost};
                UpdateEvaluationTask(task).then(function (result) {
                    console.log(result);

                });
                $location.path('/resident/task5');
            }
        };
        vm.next=function () {
            vm.isFinished=true;
            var usedTime=vm.timeLimit-vm.remainingTime;
            var task={role:"Resident",taskNum:"4",time:usedTime,userName:vm.username,answer1:vm.buildingConsumption,answer2:vm.communityConsumption,answer3:vm.buildingCost,answer4:vm.communityCost};
            UpdateEvaluationTask(task).then(function (result) {
                console.log(result);

            });
            $location.path('/resident/task5');
        };
        function UpdateEvaluationTask(task) {
            return $http.put('http://localhost:8087/bos/api/evaluationTask/',task).then(handleSuccess, handleError('Error putting user info'));
        }
        function handleSuccess(res) {
            return res.data;
        }
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();