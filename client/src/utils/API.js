import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  searchBooks: function(searchterm) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchterm);
  },

    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    },

    //Get all books from the database
    getBooks: function() {
      return axios.get("/api/books")
    },

    //Delete book from the database
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id)
    }


};