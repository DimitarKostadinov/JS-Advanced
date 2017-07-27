function search() {
    let pattern=$("#searchText").val();
    let towns=$(`#towns li:contains(${pattern})`).css('font-weight','bold');
    let numberMatches=towns.toArray().length
    $("#result").text(`${numberMatches} matches found.`)

}