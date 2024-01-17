

$(document).ready(function (){

    $(".tech-stack-body .tech-icon").hover(function () {
        $(".tech-stack-body .tech-icon").removeClass("active-icon");
        $(this).addClass("active-icon");
    },
    function () {
        $(".tech-stack-body .tech-icon").removeClass("active-icon");
    });


    $(".about .about-body .about-btn a i").hover(function () {
        $(".about .about-body .about-btn a i").removeClass("active");
        $(this).addClass("active");
    },
    function () {
        $(".about .about-body .about-btn a i").removeClass("active");
    });


});


