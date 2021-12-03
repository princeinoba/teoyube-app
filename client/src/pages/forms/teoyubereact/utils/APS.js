const API_KEY = process.env.REACT_APP_API_KEY;

export function deleteBook(booksId) {
  return fetch(`/aps/books/${booksId}`, {
    method: "DELETE",
  }).then(response => response.json());
}

export function saveBook(book) {
  const toSend = { ...book };
  return fetch("/aps/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toSend),
  })
    .then(response => response.json())
    .then(result => result.data);
}

export function searchBooks(search) {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`
  )
    .then(response => response.json())
    .then(result =>
      result.items.map(item => {
        const img = item.volumeInfo.imageLinks
          ? item.volumeInfo.imageLinks.thumbnail
          : "";
        return {
          booksId: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          image: img,
          link: item.volumeInfo.infoLink,
          saved: false,
        };
      })
    );
}

export function getSavedBooks() {
  return fetch("/aps/books")
    .then(response => response.json())
    .then(result =>
      result.data.map(book => {
        book.saved = true;
        return book;
      })
    );
}
