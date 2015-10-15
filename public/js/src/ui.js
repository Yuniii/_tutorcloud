$(function() {
    function toggleNavItem($item) {
        if ($item.hasClass('uk-active')) {
            $item.removeClass('uk-active');
        } else {
            $item.addClass('uk-active');
        }
    }

    $('#whiteboardBtn').click(function() {
        toggleNavItem($(this).parent());
        $('#whiteboardWrapper').slideToggle();
    });
});
