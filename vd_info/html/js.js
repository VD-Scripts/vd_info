window.addEventListener("message", function(event){
    if (event.data.action === "show"){
        $(".container").fadeIn(200)
        $(".blur").fadeIn(200)
        $(".text").fadeIn(200)
        $(".litera").html(event.data.key)
        $(".text").html(event.data.text)
        $(".container").css("background-color", (event.data.color));
        $(".blur").css("background-color", (event.data.color));
    } else if (event.data.action === "hide"){
        $(".container").fadeOut(200)
        $(".blur").fadeOut(200)
        $(".text").fadeOut(200)
    }
})