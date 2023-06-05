$(document)
    .ready(function () {
        $("body").niceScroll({
            cursorcolor: "#ddd",
            cursorwidth: 5,
            cursorborderradius: 0,
            cursorborder: 0,
            scrollspeed: 50,
            autohidemode: true,
            zindex: 9999999
        }); //body scroll tigger by nicescroll
        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');
        $('.special.cards .image').dimmer({
            on: 'hover'
        });
    });

$.ajax({
    type: "Post",
    url: "https://api.forecast.io/forecast/eeb944f2161bae51de0ea664c7a4737e/40.600207,33.616223?units=si&lang=tr", //get foracast api json
    async: false,
    beforeSend: function (x) {
        if (x && x.overrideMimeType) {
            x.overrideMimeType("application/j-son;charset=UTF-8");
        }
    },
    dataType: "jsonp",
    beforeSend: function () {},
    complete: function () {},
    success: function (data) {
        var yuvarla = Math.round(data.currently.temperature);
        $(".derece").html(yuvarla + "<z class='wi wi-celsius'></z>");
        $(".durum").html(data.currently.summary);

        $(".haftadurum").html(data.daily.summary);

        if (data.currently.icon == "rain") {
            $(".hava").addClass("wi wi-day-rain-mix");
        } else if (data.currently.icon == "clear-day") {
            $(".hava").addClass("wi wi-day-sunny");
        } else if (data.currently.icon == "clear-night") {
            $(".hava").addClass("wi wi-night-clear");
        } else if (data.currently.icon == "partly-cloudy-day") {
            $(".hava").addClass("wi wi-day-cloudy");
        } else if (data.currently.icon == "partly-cloudy-night") {
            $(".hava").addClass("wi wi-night-alt-cloudy");
        } else if (data.currently.icon == "cloudy") {
            $(".hava").addClass("wi wi-day-cloudy");
        } else if (data.currently.icon == "sleet") {
            $(".hava").addClass("wi wi-sleet");
        } else if (data.currently.icon == "snow") {
            $(".hava").addClass("wi wi-snow");
        } else if (data.currently.icon == "wind") {
            $(".hava").addClass("wi wi-cloudy-gusts");
        } else if (data.currently.icon == "fog") {
            $(".hava").addClass("wi wi-fog");
        }
    }
});