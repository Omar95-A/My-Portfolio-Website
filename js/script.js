

$(document).ready(function (){

    $("header button").on("click",function () {
        $("header .menu-list").slideToggle(1500);
    });

    $("header button").on("click",function () {
        $("header button").toggleClass("active");
    });

    $(".tech-stack-body .tech-icon").hover(function () {
        $(".tech-stack-body .tech-icon").removeClass("active-icon");
        $(this).addClass("active-icon");
        $(".tech-stack-body .tech-icon").css('filter','grayscale(50%)');
        $(this).css('filter','grayscale(0%)');
    },
    function () {
        $(".tech-stack-body .tech-icon").removeClass("active-icon");
        $(".tech-stack-body .tech-icon").css('filter','grayscale(0%)');
    });


    $(".about .about-body .about-btn a i").hover(function () {
        $(".about .about-body .about-btn a i").removeClass("active");
        $(this).addClass("active");
    },
    function () {
        $(".about .about-body .about-btn a i").removeClass("active");
    });


});


