$(function () {
    updateDisplay();

    $(window).resize(function () {
        updateDisplay();
    });

    $('.tabs').on('click', 'h3', function(e) {
        e.preventDefault();

        const tabsItemActive = $(this).closest('.tabs').find('ul.active');
        const id = $( this ).attr( 'data-id' );

        if ($(window).width() > 575 && $(window).width() < 992) {
            tabsItemActive.fadeOut(() => {
                tabsItemActive.removeClass('active');

                $(id).fadeIn(() => $(id).addClass('active'));
            });
        }
    });
});

function updateDisplay() {
    const windowWidth = $(window).width();

    if (windowWidth < 576 || windowWidth > 991) {
        $('.tabs-item ul').css({
            'display': 'block'
        });
    } else {
        $('.tabs-item').find('ul').not('ul.active').css({
            'display': 'none'
        });
    }
}