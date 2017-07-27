function attachEvents() {
    $('a.button').on('click',checked);
    function checked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}