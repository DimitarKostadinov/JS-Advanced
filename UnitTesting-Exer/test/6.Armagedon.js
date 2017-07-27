let expect=require('chai').expect;
let jsdom=require('jsdom-global')();
let $ = require('jquery');

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe('Argamedon Unit Tests',function () {
    let oldHtml;
    let htmlSelector
    beforeEach(function () {
        document.body.innerHTML=`<body>
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
</body>`
        htmlSelector=$('#target');
        oldHtml=htmlSelector.html();

    });
    it('with valid and invalid selector',function () {
        let oldHtml=$(htmlSelector).html();
        nuke(htmlSelector,2)
        expect(htmlSelector.html()).to.be.equal(oldHtml);
    });
    it('with equal selector',function () {
        let selector1=$('.inside');
        nuke(selector1,selector1)
        expect(htmlSelector.html()).to.be.equal(oldHtml);
    });
    it('with valid selectors',function () {
       let selector1=$('.nested');
       let selector2=$('.inside');
       nuke(selector1,selector2);
       expect(htmlSelector.html()).to.be.equal(oldHtml)
    });
    it('with two valid(which dont delete',function () {
        let selector1=$('.nested');
        let selector2=$('.target');
        nuke(selector1,selector2);
        expect(htmlSelector.html()).to.not.be.equal(oldHtml)
    })
});