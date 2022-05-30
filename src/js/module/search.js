module.exports = () => {
    $(".search-form__field").on("input", function () {
        let btnClear = $(this).next();
        if($(this).val() !== "") {
            btnClear.addClass("active");
        } else {
            btnClear.removeClass("active");
        }

        btnClear.on("click", function () {
           $(this).removeClass("active").prev().val("");
        });
    });
};

