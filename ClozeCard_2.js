// Constructor for Cloze Cards
var ClozeCard = function(text, cloze) {
  var pattern = cloze.replace(/[a-z0-9\s]/gi, '.');
  this.fullText = text;
  this.cloze = cloze;
  this.partial = text.replace(new RegExp(cloze, "gi"), pattern);
  if (this.fullText.indexOf(this.cloze) === -1) {
    console.log("ERROR: '" + this.cloze + "' is not part of the main text - '" + this.fullText + "'");
  }
};


var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial)

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText)

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");


module.exports = ClozeCard;