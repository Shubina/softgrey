$(document).ready(function() { 

    $(".toggle-mnu").click(function() {
        $(".sandwich").toggleClass("active");
        
    });

    $("header .menu ul>a").click(function() {
        $("header .menu").fadeOut(600);
        $(".sandwich").toggleClass("active");
    }).append("<span>");
    
        //open and close menu
    $(".toggle-mnu").click(function() {
        if ($("header .menu").is(":visible")) {
            $("header .menu").fadeOut(600);
            $("header .menu li a").removeClass("fadeInUp");
            $("body").css("overflow", "auto");
        } else {
            $("header .menu").fadeIn(600);
            $("header .menu li a").addClass("fadeInUp");
            $("body").css("overflow", "hidden");
        };
    });

});