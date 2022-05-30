module.exports = () => {
    $(".custom-select").on("click", function () {
        $(this).toggleClass("is-active");
    });

    $(".custom-select__item").on("click", function () {
        let select_val = $(this).attr("data-select-val");
        let select = $(this).closest(".custom-select");
        $(select).children(".custom-select__header").html($(this).html());
        $(select).children("input").val(select_val);
    });
};

