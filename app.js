// var colors = [
//   {
//     "name": "INDIANRED",
//     "hex": "#CD5C5C",
//     "rgb": "RGB(205, 92, 92)",
//     "families": ["red", "brown"]
//   },
//   {
//     "name": "LIGHTCORAL",
//     "hex": "#F08080",
//     "rgb": "RGB(240, 128, 128)",
//     "families": ["red", "pink", "coral", "light"]
//   },
//   {
//     "name": "SALMON",
//     "hex": "#FA8072",
//     "rgb": "RGB(250, 128, 114)",
//     "families": ["red", "pink", "orange", "salmon"]
//   }
// ];

var colors = require('colors.js');
var section = document.getElementsByTagName('section')

var colorblocks = [];
function makeColorBlock(color) {
  var name = color.name;
  var hex = color.hex;
  return '<div class="colorblock" style="background-color:' + name + '" ><div>' + name.toLowerCase() + '</div><div>' + hex.toLowerCase() + '</div></div>';
}
colors.map(function(color) {
  colorblocks.push(makeColorBlock(color));
});

section[0].innerHTML = colorblocks.join(',').replace(',', '');
