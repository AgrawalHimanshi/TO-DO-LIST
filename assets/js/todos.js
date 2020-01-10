// check off specific todos by clicking
$("ul").on("click" ,"li", function(){
	//this will give current clicked 
	$(this).toggleClass("completed");
	
});

//click on X to delete todo
$("ul").on("click","span",function (event) {
	//parent() will give li that is enclosing the span
	//fadeout after 500ms and then use callback function
	//here this refers to span clicked 
	$(this).parent().fadeOut(500,function(){
		//here this refers to parent i.e. li
		$(this).remove();
	});
	//to prevent other parent tags like li,ul,body,html
	//to get affected
	event.stopPropagation()
});

//add new todo
$("input[type='text']").keypress(function(event){
	//if enter pressed
	if(event.which===13){
		//extract out content
		var todoText=$(this).val();
		//remove from text
		$(this).val("");
		//place at end
		$("ul").append("<li><span><i class='fa fa-trash'></i>  </span>"+todoText+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})