function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}
let expect = require("chai").expect;

describe("RGB TEST", function() {
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor(12, 13, 14)).to.be.equal('#0C0D0E');
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
    });
    it("should is valid color", function() {
        expect(rgbToHexColor(255,255,255)).to.be.equal("#FFFFFF")
    });
    it("check for negative numbers", function() {
        expect(rgbToHexColor(-1,-15,-15)).to.be.undefined;
    });
    it("check for negative numbers", function() {
        expect(rgbToHexColor(15,15,-15)).to.be.undefined;
    });
    it("check for negative numbers", function() {
        expect(rgbToHexColor(15,-1,15)).to.be.undefined;
    });
    it("check for negative numbers", function() {
        expect(rgbToHexColor(-15,1,15)).to.be.undefined;
    });
    it("should is valid color", function() {
        expect(rgbToHexColor(15,15,15)).to.be.equal("#0F0F0F")
    });

    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor((0,0,0))).to.be.undefined
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor(5.12,5.5,2.51)).to.be.undefined;
    });




    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor(250,256,15)).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor(256,1,15)).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor(250,1,257)).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor(257,257,257)).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor()).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor([])).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor('pesho')).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor(2.51,129,129)).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor(129,2.51,129)).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor(129,129,2.51)).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor("5", [3], {8:9},'(empty input)')).to.be.undefined;
    });
    it("check for Greater than 255 numbers", function() {
        expect(rgbToHexColor("5", [3], {8:9})).to.be.undefined;
    });


});
