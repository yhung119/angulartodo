function TodoControl($scope) {
	
	$scope.todos= [
	{text: 'Learn Angular JS', done: false}, 
	{text:'buy pudding', done: false}
	];
	$scope.gettodos=function(){
		return $scope.todos.length;
	}
	$scope.addtodo= function(){
		if($scope.formtodoText!=""){
		$scope.todos.push({text:$scope.formtodoText, done:false});
		}
		$scope.formtodoText="";
	}
	$scope.cleartodo= function(){
		$scope.todos= _.filter($scope.todos, function(todo){
			return !todo.done;
		})

	}
}