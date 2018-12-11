import { decorate, observable, computed } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class BookStore {
  constructor() {
    this.books = [];
    this.query = "";
    this.loading = true;
  }

  addBook(newBook, authorID) {
    const BookObject = { ...newBook, authors: [authorID] };
    console.log(BookObject);
    return instance
      .post("/api/books/", BookObject)
      .then(res => res.data)
      .then(book => {
        this.books.push(book);
        this.statusMessage = "Success";
        console.log(this.books);
      })
      .catch(error => {
        this.statusMessage = "Invalid Fields";
        console.log(error.response);
      });
  }

  fetchBooks() {
    return instance
      .get("https://the-index-api.herokuapp.com/api/books/")
      .then(res => res.data)
      .then(books => {
        this.books = books;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }

  get filteredBooks() {
    return this.books.filter(book => {
      return book.title.toLowerCase().includes(this.query);
    });
  }

  getBookById(id) {
    return this.books.find(book => +book.id === +id);
  }

  getBooksByColor(color) {
    return this.filteredBooks.filter(book => book.color === color);
  }
}

decorate(BookStore, {
  books: observable,
  query: observable,
  loading: observable,
  filteredBooks: computed
});

const bookStore = new BookStore();
bookStore.fetchBooks();

export default bookStore;
