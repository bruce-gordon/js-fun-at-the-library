function shelfBook(book, shelfArray) {
  if (shelfArray.length < 3) {
  shelfArray.unshift(book);
  }
}

function unshelfBook() {

}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};
