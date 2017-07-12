/**
 * Created by Saruno PowerHouse on 7/10/2017.
 */

    $(".menuStyleOne").hover(function () {
        $(this).css("font-size", "180%");
    }, function () {
        $(this).css("background-color", "#44af69");
        $(this).css("color", "black");
        $(this).css("font-size", "140%");
    });
    $(".menuStyleTwo").hover(function () {
        $(this).css("font-size", "180%");
    }, function () {
        $(this).css("font-size", "140%");
        $(this).css("background-color", "#f8333c");
    });
    $(".menuStyleThree").hover(function () {
        $(this).css("font-size", "180%");
    }, function () {
        $(this).css("font-size", "140%");
        $(this).css("background-color", "#ffffba");
    });
    $(".menuStyleFourth").hover(function () {
        $(this).css("font-size", "180%");
    }, function () {
        $(this).css("font-size", "140%");
        $(this).css("background-color", "#fcab10");
    });
    $(".menuStyleFifth").hover(function () {
        $(this).css("font-size", "180%");
    }, function () {
        $(this).css("font-size", "140%");
        $(this).css("background-color", "#2b9eb3");

    });

    $(".menuStyleOne").click(function () {
        $(".homeDiv").show();
        $(".projectsDiv,.mySqlDiv,.contactDiv,.aboutDiv").css("display","none");
    });
    $(".menuStyleTwo").click(function () {
        $(".projectsDiv").show();
        $(".homeDiv,.mySqlDiv,.contactDiv,.aboutDiv").css("display","none");
    });
    $(".menuStyleThree").click(function () {
    $(".mySqlDiv").show();
    $(".homeDiv,.projectsDiv,.contactDiv,.aboutDiv").css("display","none");
});
    $(".menuStyleFourth").click(function () {
    $(".contactDiv").show();
        $(".homeDiv,.mySqlDiv,.projectsDiv,.aboutDiv").css("display","none");
});
    $(".menuStyleFifth").click(function () {
    $(".aboutDiv").show();
        $(".homeDiv,.mySqlDiv,.contactDiv,.projectsDiv").css("display","none");
});



