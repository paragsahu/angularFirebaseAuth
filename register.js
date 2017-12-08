myApp.controller("regCtr" , ["$scope" , "$firebaseAuth" , "$location" , function($scope , $firebaseAuth ,$location){

$scope.register = function(){
var username = $scope.user.email; 
var password = $scope.user.password;

if(username && password){

    var auth = $firebaseAuth();

    auth.$createUserWithEmailAndPassword(username , password).then(function(){
        console.log("successfully created");
    }).catch(function(error){
        console.log(error);
        $scope.errMsg = true;
        $scope.errorMessage = error.message;
    });
}

}; //login function



}]);