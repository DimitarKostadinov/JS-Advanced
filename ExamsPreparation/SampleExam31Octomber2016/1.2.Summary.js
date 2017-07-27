function solve(selector) {
    $(selector).click(function () {
        let printText=$('#content strong').text();
        let divSummary=$('<div id="summary">');
        let heading=$('<h2>Summary</h2>');
        let paragraph=$('<p>').text(printText);
        divSummary.append(heading);
        divSummary.append(paragraph);
        $('#content').parent().append(divSummary);
    })
}