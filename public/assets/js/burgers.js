$(document).ready(function(){

    $(".eat-burger").on("click", function() {
        var id = $(this).data("id");
        console.log(id);

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }). then(
            function() {
                console.log("Devoured burger " + id);
                // location.reload();
            }
        )

    })

    $(".submit").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            name: $("#newBurger").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("new burger created");
            // location.reload();
        })
    })
})