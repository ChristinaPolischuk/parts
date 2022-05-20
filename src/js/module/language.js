module.exports = () => {
    $(".js-select-language").on("click", function () {
        $(this).toggleClass("is-active");
    });

    $(".js-select-language-option").on("click", function () {
        let select_val = $(this).attr("data-select-val");
        let select_lang = $(this).closest(".js-select-language");
        $(select_lang).children(".js-language-selected").html($(this).html());
        $(select_lang).children("input").val(select_val);
    });
};

