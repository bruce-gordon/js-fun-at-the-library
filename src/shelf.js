function shelfBook(book, shelfArray) {
  if (shelfArray.length < 3) {
  shelfArray.unshift(book);
  }
}

function unshelfBook(bookTitle, shelfArray) {
  for (i = 0; i < shelfArray.length; i++) {
    if (shelfArray[i].title === bookTitle) {
      shelfArray.splice(i, 1);
    }
  }
}

function listTitles(shelfArray) {
  var completeList = [];
  for (i = 0; i < shelfArray.length; i++) {
    completeList.push(shelfArray[i].title);
  }
  return completeList.join(', ');
}

function searchShelf(shelfArray, bookTitle) {
  for (i = 0; i < shelfArray.length; i++) {
    if (shelfArray[i].title === bookTitle) {
       return true;
    }


  }
  return false;
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
