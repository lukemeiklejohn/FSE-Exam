

var User = userContract.at("0x164b13f1a7c12f7add518e5361ba0f449916280b");

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