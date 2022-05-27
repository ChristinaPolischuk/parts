module.exports = () => {

    var estado = 0;
    $("#burger").click(function () {
        var delay_time = 0;
        $(this).toggleClass('open');
        console.log(estado);
        if (estado === 0) {
            TweenMax.to($(".burger-menu__dropdown"), 1, {
                x: -300,
                ease: Expo.easeInOut
            });

            $(".burger-menu__link").each(function () {
                TweenMax.to($(this), 1.2, {
                    x: -260,
                    scaleX: 1,
                    delay: delay_time,
                    ease: Expo.easeInOut
                });
                delay_time += .04;
            });
            estado = 1;
        } else {
            estado = 0;
            TweenMax.to($(".burger-menu__dropdown"), 1.2, {
                x: 0,
                ease: Expo.easeInOut
            });
            $(".burger-menu__link").each(function () {
                TweenMax.to($(this), 1, {
                    x: 0,
                    /*
                    x:vw,
                    scaleX: 2.3,
                    */
                    delay: delay_time,
                    ease: Expo.easeInOut
                });
                delay_time += .02;
            });
        }
    });
};