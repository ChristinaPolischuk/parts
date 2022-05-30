module.exports = () => {
    $("body").on("click", function (e) {
        if ($(e.target).hasClass("js-open-modal")) {
            let buttonId = $(e.target).attr("id");
            $("." + buttonId).removeClass("out").addClass("open");
            $("body").addClass("modal-active");
        }
        if ($(e.target).hasClass("modal-background") || $(e.target).hasClass("js-close-modal")) {
            $(e.target).closest(".modal-container").removeClass("open").addClass('out');
            $("body").removeClass("modal-active");
        }
    });
};

