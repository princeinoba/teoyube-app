export function markSearchSaved(savedBooks, searchResults) {
  return searchResults.map(searchResult => {
    const foundSaved = savedBooks.find(
      savedBook => savedBook.booksId === searchResult.booksId
    );
    if (foundSaved) {
      return { ...searchResult, saved: true };
    }
    return { ...searchResult, saved: false };
  });
}
