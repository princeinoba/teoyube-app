import React, { createContext, useContext, useState, useEffect } from "react";
import { getSavedBooks, saveBook, deleteBook } from "./APS.js";

const BookContext = createContext();

export function BookProvider(props) {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    getSavedBooks().then(result => {
      setSavedBooks(result);
    });
  }, []);

  const handleSave = book => {
    saveBook(book).then(result => {
      result.saved = true;
      setSavedBooks(prevState => [...prevState, result]);
    });
  };

  const handleDelete = booksId => {
    deleteBook(booksId).then(result => {
      setSavedBooks(prevState =>
        prevState.filter(book => book.booksId !== booksId)
      );
    });
  };

  return (
    <BookContext.Provider
      value={{ savedBooks, handleSave, handleDelete }}
      {...props}
    />
  );
}

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error(
      "useBooks can only be used in a descendent of BookProvider"
    );
  }

  return context;
}
