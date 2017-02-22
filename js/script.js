$(document).ready(function () {

    $("#select1 dd").click(function () {
        //        $(this).addClass("selected").siblings().removeClass("selected");
        //        if ($(this).hasClass("select-all")) {
        //            $("#selectA").remove();
        //        } else {
        //            var copyThisA = $(this).clone();
        //            if ($("#selectA").length > 0) {
        //                $("#selectA a").html($(this).text());
        //            } else {
        //                $(".select-result dl").append(copyThisA.attr("id", "selectA"));
        //            }
        //        }

        var type = $(this).attr("date-type");
        var copyThisA = $(this).clone();

        if ($(this).hasClass("selected")) {
            //$(".select-result dl dd[date-type='" + type + "']").fadeToggle();
            //$(".select-result dl dd[date-type='" + type + "']").removeClass("selected");
            $(".select-result dl dd[date-type='" + type + "']").remove();
        } else {
            copyThisA.attr("id", "selectA");
            copyThisA.attr("class", "selected");
            $(".select-result dl").append(copyThisA);
        };
        $(this).toggleClass("selected");

    });

    $("#select2 dd").click(function () {
        //$(this).addClass("selected").siblings().removeClass("selected");
        $(this).siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {//这个属于为全选,没有所以不会进
            $("#selectB").remove();
        } else {
            var copyThisB = $(this).clone();
            if ($("#selectB").length > 0) {
                if (copyThisB.text().replace(/\s/g, "") == $(".select-result dl #selectB").text().replace(/\s/g, ""))
                    $(".select-result dl #selectB").remove();
                else
                    $("#selectB a").html($(this).text());
            } else {
                copyThisB.attr("id", "selectB");
                copyThisB.attr("class", "selected");
                $(".select-result dl").append(copyThisB);
            }
            $(this).toggleClass("selected");
        }
    });

    $("#select3 dd").click(function () {
        //$(this).addClass("selected").siblings().removeClass("selected");
        $(this).siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $("#selectC").remove();
        } else {
            var copyThisC = $(this).clone();
            if ($("#selectC").length > 0) {
                if (copyThisC.text().replace(/\s/g, "") == $(".select-result dl #selectC").text().replace(/\s/g, ""))
                    $(".select-result dl #selectC").remove();
                else
                    $("#selectC a").html($(this).text());
            } else {
                copyThisC.attr("id", "selectC");
                copyThisC.attr("class", "selected");
                $(".select-result dl").append(copyThisC);
            }
            $(this).toggleClass("selected");
        }
    });

    $("#select4 dd").click(function () {
        //$(this).addClass("selected").siblings().removeClass("selected");
        $(this).siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $("#selectD").remove();
        } else {
            var copyThisD = $(this).clone();
            if ($("#selectD").length > 0) {
                if (copyThisD.text().replace(/\s/g, "") == $(".select-result dl #selectD").text().replace(/\s/g, ""))
                    $(".select-result dl #selectD").remove();
                else
                    $("#selectD a").html($(this).text());
            } else {
                copyThisD.attr("id", "selectD");
                copyThisD.attr("class", "selected");
                $(".select-result dl").append(copyThisD);
            }
            $(this).toggleClass("selected");
        }
    });

    $("#selectA").live("click", function () {
        $(this).remove();
        //$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
        var type = $(this).attr("date-type");
        var copyThisC = $(this).clone();
        $("#select1 dd[date-type='" + type + "']").toggleClass("selected");
    });

    $("#selectB").live("click", function () {
        $(this).remove();
        //$("#select2").addClass("selected").siblings().removeClass("selected");
        $("#select2 dd").siblings().removeClass("selected");
    });

    $("#selectC").live("click", function () {
        $(this).remove();
        //$("#select3").addClass("selected").siblings().removeClass("selected");
        $("#select3 dd").siblings().removeClass("selected");
    });

    $("#selectD").live("click", function () {
        $(this).remove();
        //$("#select4").addClass("selected").siblings().removeClass("selected");
        $("#select4 dd").siblings().removeClass("selected");
    });

    $(".select dd").live("click", function () {
        if ($(".select-result dd").length > 1) {
            $(".select-no").hide();
        } else {
            $(".select-no").show();
        }
    });

});