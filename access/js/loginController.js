myApp.controller("loginController", function($scope, $timeout, $http, $location){
	

	$scope.signIn = function(){
		
		if($scope.login.username=="" || $scope.login.username== null || $scope.login.password=="" || $scope.login.password== null){
			$scope.usererror=true;	
			$scope.passworderror=true;				
		}
		else if($scope.login.username == $scope.login.password){			
			$scope.loginsuccess=true;
			$scope.usererror=false;
			$scope.passworderror=false;			
			$scope.login={};
			$location.path("/student")
			
		}else {			
			alert("Username and Password shoule be same");
		}		
	}

})