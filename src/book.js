function createTitle(bookIdea) {
  return "The " + bookIdea;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  };
}

function saveReview(bookReview, reviewArray) {
  if (!reviewArray.includes(bookReview)) {
    reviewArray.push(bookReview);
  }
}

function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20;
  return bookPageCount
}

function writeBook(title, character, genre) {
  return {
    title: title,
    mainCharacter: character,
    pageCount: title.length * 20,
    genre: genre,
  }
}

function editBook(book) {
  return book.pageCount = book.pageCount * .75
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
