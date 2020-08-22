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
    for (var i = 0; i < this.library.shelves.fantasy.length; i++)
    {
    if (this.library.shelves.fantasy[i].title === title) {
      return "Yes, we have " + title
      }
    } return "Sorry, we do not have " + title
  }
}

module.exports = Librarian;
