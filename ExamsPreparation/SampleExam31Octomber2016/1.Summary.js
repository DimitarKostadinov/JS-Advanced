function solve(selector) {
   $(selector).click(function () {
       let result=$("#content").find('strong').text();
       let summary=$(`<div id="summary">
    <h2>Summary</h2>
    <p>${result}</p>
  </div>`);
       $('#content').parent().append(summary)
   })
}