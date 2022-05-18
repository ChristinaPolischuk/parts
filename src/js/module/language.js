module.exports = () => {
    $(".language").on("click", function () {
        $(this).toggleClass("is-active");
    });
};

