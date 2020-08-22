var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library
  }
  greetPatron(patronName, isMorning) {
    if (isMorning === true) {
    return "Good morning, " + patronName + "!";
    } else {
    return "Hello, " + patronName + "!"
    }
  }
  findBook(title) {
    var shelfNames = Object.keys(this.library.shelves);
    for (var i = 0; i < shelfNames.length; i++) {
      for (var b = 0; b < this.library.shelves[shelfNames[i]].length; b++) {
        if (this.library.shelves[shelfNames[i]][b].title === title) {
          this.library.shelves[shelfNames[i]].splice(b, 1);
          return "Yes, we have " + title;
        }
      }
    } return "Sorry, we do not have " + title;
  }
  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  }
}

module.exports = Librarian;
