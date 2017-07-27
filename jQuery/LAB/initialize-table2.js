function  initializeTable() {
    $('#createLink').click(createCountry);
    addCountry('Bulgaria','Sofia');
    addCountry('Germany','Berlin');
    addCountry('Russia','Moscow');
    fixLinks();

    function createCountry() {
        let country=$('#newCountryText').val();
        let capital=$('#newCapitalText').val();
        addCountry(country,capital);
        fixLinks()
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
    }
    function addCountry(country,capital) {
        let row=$('<tr>')
            .append($('<td>').text(capital))
            .append($('<td>').text(country))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveRowUp))
                .append($('<a href="#">[Down]</a>').click(moveRowDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        row.css('display','none');
        $('#countriesTable').append(row);
        row.fadeIn();

    }
    function deleteRow() {
        let row=$(this).parent().parent();
            row.remove();
        fixLinks()
    }
    function moveRowUp() {
        let row=$(this).parent().parent();
        row.insertBefore(row.prev());
        fixLinks()
    }
    function moveRowDown() {
        let row=$(this).parent().parent();
        row.insertAfter(row.next());
        fixLinks()
    }
    function fixLinks() {
        $('#countriesTable a').css('display', 'inline');
        let rowInTable = $('#countriesTable tr');
        $(rowInTable[2]).find('a:contains("Up")').css('display', 'none');
        $(rowInTable[rowInTable.length-1]).find('a:contains("Down")').css('display', 'none');
    }
}
