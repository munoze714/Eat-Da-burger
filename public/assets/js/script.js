$("#clickBurger").on("click", function () {
    console.log("we got clicked");
    var burgerInput = $("#burgerName").val();
    if (burgerInput.length < 1) {
        alert('Please Enter a Burger');
        return false;
    }
    $.ajax({
        url: "/api/burgers",
        data: {
            burger_name: burgerInput,
            devoured: false
        },
        type: "post"
    }).then(function (answer) {
        console.log(answer)
    })
})

$(".devouredBurger").on("click", function () {
    console.log("we got clicked");
    $.ajax({
        url: "/api/burgers/" + $(this).attr("name"),
        type: "put",
    }).then(function (answer) {
        console.log(answer)
        location.reload()
    })
})
