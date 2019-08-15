$.ajax({
	url: "/my_sneakers.json",
	dataType: "json",
	success: function (data) {
	  
	  // Process your JSON data here
	  
	}
  });


$("#button").click(function() {
    User.setUser($("#name").val(), $("#age").val());
});

var userEvent = User.userChanged();

userEvent.watch(function(error, result){
    if(!error) {
        $("#user").html("You are " + result.args.name + " and you are " + result.args.age + " years old.");
    } else {
        console.log(error)
    }
});