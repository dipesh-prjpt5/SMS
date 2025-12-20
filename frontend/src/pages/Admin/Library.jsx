// Library.js
import React, { useState, useEffect } from "react";
import {
  AddBookForm,
  FormGroup,
  Label,
  Input,
  Button,
  BookList,
  BookItem,
  BookTitle,
  BookAuthor,
  ActionButton,
} from "../../styles/LibraryStyles";
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";
import { getBooks, postBook } from "../../api/adminapi";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    bookname: "",
    author: "",
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleAddBook = async (e) => {
    e.preventDefault();

    if (newBook.bookname.trim() === "" || newBook.author.trim() === "") {
      return;
    }

    try {
      const response = await postBook(newBook);

      setBooks([...books, response.data.newBook]);
      setNewBook({ bookname: "", author: "" });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // const handleBookPick = async (bookId, studentId) => {
  //   // Implement logic to record when a student picks a book
  // };

  // const handleBookReturn = async (bookId, studentId) => {
  //   // Implement logic to mark when a student returns a book
  // };

  return (
    <Layout>
      <MainContent>
        <PageHeading>Library Management</PageHeading>
        <AddBookForm onSubmit={handleAddBook}>
          <h2>Add New Book</h2>
          <FormGroup>
            <Label htmlFor="title">Title:</Label>
            <Input
              type="text"
              id="title"
              value={newBook.bookname}
              required
              onChange={(e) =>
                setNewBook({
                  ...newBook,
                  bookname: e.target.value,
                })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="author">Author:</Label>
            <Input
              type="text"
              value={newBook.author}
              id="author"
              required
              onChange={(e) =>
                setNewBook({
                  ...newBook,
                  author: e.target.value,
                })
              }
            />
          </FormGroup>
          <Button type="submit">Add Book</Button>
        </AddBookForm>

        <h2>Books</h2>
        <BookList>
          {books.map((book) => (
            <BookItem key={book._id}>
              <BookTitle>{book.bookname}</BookTitle>
              <BookAuthor>by {book.author}</BookAuthor>
              {/* <ActionButton
                onClick={() => handleBookPick(book._id, "student123")}
              >
                Pick
              </ActionButton>
              <ActionButton
                onClick={() => handleBookReturn(book._id, "student123")}
              >
                Return
              </ActionButton> */}
            </BookItem>
          ))}
        </BookList>
      </MainContent>
    </Layout>
  );
};

export default Library;
