


$(document).ready(function(){

    //toggles the hamburger icon onclick
    $("#nav-icon4").click(function(){
        $(this).toggleClass("open");

        //opens green menu
        $(".nav-mobile-tablet").slideToggle(500);

        //opens transparent menu
        $(".nav-mobile-tablet-home").slideToggle(500);
        
    });



    $(window).resize(function() {
        //if dropdown menu is toggled when window is resized, toggle is reset to hamburger and menu display none
        if (($(window).width() > 992) && ($("#nav-icon4").hasClass("open"))) {
                $(".nav-mobile-tablet-home").hide(); 
                $(".nav-mobile-tablet").hide();
                $("#nav-icon4").toggleClass("open");
            }
    });

    //toggle map and list buttons in mobile view on 'center'-page
    $("#toggle-right").click(function() {
        $(".list-mobile").hide();
        $(".map-mobile").show();
    });

    $("#toggle-left").click(function() {
        $(".list-mobile").show();
        $(".map-mobile").hide();
    });


    $(window).resize(function() {
        //if map is shown when resizing window, map is replaced by list content
        if (($(window).width() > 668) && ($(".map-mobile").is(":visible"))) {
            $(".list-mobile").show();
            $(".map-mobile").hide();
            
                
            }
    });

});
    
