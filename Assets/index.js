
$(document).ready(function (e) {
$("button").on("click", function(){
    var id = $(this).attr('id');
    switch(id){
        case "red":
            $("#redClass").removeClass("green red blue").addClass("red");
            $("#greenClass").removeClass("green red blue").addClass("red");
            $("#blueClass").removeClass("green red blue").addClass("red");
            console.log("remove");
            break;
        case "green":
            $("#blueClass").removeClass("green red blue").addClass("green");
            $("#redClass").removeClass("green red blue").addClass("green");
            $("#greenClass").removeClass("green red blue").addClass("green");
            break;
        case "blue":
            $("#blueClass").removeClass("green red blue").addClass("blue");
            $("#greenClass").removeClass("green red blue").addClass("blue");
            $("#redClass").removeClass("green red blue").addClass("blue");
            break;
        case "white":
            $("#blueClass").removeClass("green red blue").addClass("blue");
            $("#greenClass").removeClass("green red blue").addClass("green");
            $("#redClass").removeClass("green red blue").addClass("red");
            break;
    }
});
});