function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
      }
  }
}

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book);
  } else if (book.genre === 'nonFiction') {
    library.shelves.nonFiction.push(book);
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.push(book);
  }
}

function checkoutBook(library, bookTitle) {
  var shelfNames = Object.keys(library.shelves);

  for (var i = 0; i < shelfNames.length; i++) {
    for (var j = 0; j < library.shelves[shelfNames[i]].length; j++) {
      if (library.shelves[shelfNames[i]][j].title === bookTitle) {
        library.shelves[shelfNames[i]].splice(j, 1);
        return 'You have now checked out ' + bookTitle + ' from the ' + library.name;
      }
    }
  }
  return "Sorry, there are currently no copies of " + bookTitle + " available at the Denver Public Library";
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
