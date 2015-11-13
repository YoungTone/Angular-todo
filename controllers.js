app.controller("TodoController", function($scope) {

	$scope.todo = {};
  $scope.todo.data = [];
  $scope.todo.newTodo = {
    name:  "",
    task: ""
  };

  $scope.addTodo = function(newTodo) {
    $scope.todo.data.push(newTodo);
    $scope.todo.newTodo = {};
  };

  $scope.delete = {};
  $scope.delete = function(){
    $scope.todo = {}
  };
});
