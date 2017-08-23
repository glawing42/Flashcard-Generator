var fs = require('fs');

var ClozeCard = function(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.clozeDeleted = this.text.replace(this.cloze, '_____');

}


module.exports = ClozeCard;