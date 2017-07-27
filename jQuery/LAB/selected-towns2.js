function attachEvents() {
    $('#items').on('click','li',function () {
        let li=$(this);
        if(li.attr('data-selected')){
            li.removeAttr('data-selected');
            li.css('background','');

        }
        li.attr('data-selected','true');
        li.css('background', '#DDD');
    })
    $('#showTownsButton').on('click',function () {
        let selectedTowns=$('#items li[data-selected=true]');
        let towns=selectedTowns.toArray().map(a=>a.textContent).join(', ');
        $('#selectedTowns').text(`Selected towns: ${towns}`)



    })

}