/**
 * Created by Saruno PowerHouse on 7/17/2017.
 */

$(".buttonMainPage").hover(function () {
    $(this).css("color", "black");
    $(this).css("background", "rgba(255,255,255,0.3)");

}, function () {
    $(this).css("background-color", "transparent");
    $(this).css("color", "white");
});

$(".hoverunderline").hover(function () {
    $(this).css("border-bottom","1px white solid");

}, function () {
    $(this).css("border-bottom","none");
});

