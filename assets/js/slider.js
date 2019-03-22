

$(".dot").click(function() {
    let num = $(this).attr("number");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(this).parent().prev().children().addClass("hidden");
    $(this).parent().prev().children().filter(function() {
        return $(this).attr("number") == num;
    }).removeClass("hidden").css("opacity", "0").animate({opacity: "1"}, "slow");
})
