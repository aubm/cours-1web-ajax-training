var todoTemplate = '<tr class="todo" id="todo-{{id}}"><td>{{id}}</td><td>{{content}}</td><td><a href="#" class="checkout"><i class="glyphicon glyphicon-ok"></i></a></td><td><a href="#" class="delete btn btn-danger">Delete</a></td></tr>';
var doneTemplate = '<tr class="todo" id="todo-{{id}}"><td>{{id}}</td><td>{{content}}</td><td><i class="glyphicon glyphicon-ok"></i></td></tr>';

var bindActions = function(todo)
{
	todo.find(".delete").click(function(e){
		e.preventDefault();
		var self = this;
		var todoId = $(this).closest(".todo").attr("id").substring(5);
		$.ajax({
			url: "http://localhost:8000/todos/" + todoId + "/delete",
			type: "POST"
		}).done(function(res) {
			$(self).closest(".todo").animate({
				opacity: 0
			}, "normal", "linear", function(){
				$(this).remove();
			});
		});
	});

	todo.find(".checkout").click(function(e){
		e.preventDefault();
		var self = this;
		var todoId = $(this).closest(".todo").attr("id").substring(5);
		$.ajax({
			url: "http://localhost:8000/todos/" + todoId,
			type: "POST",
			data: {
				checkout: 1
			}
		}).done(function(res) {
			$(self).closest(".todo").remove();
			var newDone = $(Mustache.render(doneTemplate, res));
			$("#dones").append(newDone);
		});
	});
}


$.ajax({
	url: "http://localhost:8000/todos",
	type: "GET",
	dataType: "json"
}).done(function(res){
	for(var i=0 ; i<res.length ; i++) {
		if(res[i].checkout) {
			var newDone = $(Mustache.render(doneTemplate, res[i]));
			$("#dones").prepend(newDone);
		} else {
			var newTodo = $(Mustache.render(todoTemplate, res[i]));
			bindActions(newTodo);
			$("#todos").append(newTodo);
		}
	}
});

$("#new-todo").click(function(e){
	e.preventDefault();
	var newTodoContent = $("#new-todo-content").val();
	if(!newTodoContent) {
		alert("You must enter a content before submitting data !");
	} else {
		$.ajax({
			url: "http://localhost:8000/todos",
			type: "POST",
			data: {
				content: newTodoContent
			}
		}).done(function(res){
			var newTodo = $(Mustache.render(todoTemplate, res));
			bindActions(newTodo);
			$("#todos").append(newTodo);
			$("#new-todo-content").val("");
		});
	}
});