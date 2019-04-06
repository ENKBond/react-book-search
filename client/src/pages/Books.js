import React, { Component } from "react";
import Title from "../components/Title";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Search";
// import Nav from "../components/Nav";

class Books extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    id: "",
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    saved: ""
  };

  // When the component mounts, load all books and save them to this.state.books
//   componentDidMount() {
//     this.loadBooks();
//   }

  // Loads all books  and sets them to this.state.books
//   loadBooks = () => {
//     API.getBooks()
//       .then(res =>
//         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err.response));
  };

  saveBook = (id, title, author, description, image, link) => {
  API.saveBook({
      bookId: id, title: title, author: author, description: description, image: image, link: link, saved: true
  }).then(res => {
      console.log(res.data);
  })
      .catch(err => console.log(err.response));
}

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.search)
        .then(res => {
            console.log(res.data)
            const { items } = res.data
            console.log(items);
            this.setState({ books: items })
            console.log(this.state.books)
        })
        .catch(err => console.log(err));
};

  render() {
    return (
      <div>
        {/* <Nav/> */}
        <Title>
          <h1>BookShelf</h1>
          <h4>Discover new books and save them to your own online bookshelf</h4>
        </Title>
        <Container>
          <Row>
            <Col size="md-12">
            <form className="form-inline">
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Enter Book Title"
                />
                <br/>
                <FormBtn
                  disabled={!this.state.search}
                  onClick={this.handleFormSubmit}
                >
                Search Books
                </FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col size="md-12">
                {!this.state.books.length ? (
                  <h4>Search for a new book</h4>
                  ) : (
                    <List>
                        {this.state.books.map(book => (
                          <ListItem
                          key={book.id}
                          id={book.id}
                          title={book.volumeInfo.title}
                          description={book.volumeInfo.description}
                          author={(!book.volumeInfo.authors) ? "No Author Info Available" : book.volumeInfo.authors[0]}
                          link={book.volumeInfo.infoLink}
                          image={(!book.volumeInfo.imageLinks) ? "https://fillmurray.com/150/200" : book.volumeInfo.imageLinks.thumbnail}
                          saved = {this.saved}
                          saveBook = {this.saveBook}
                          >
                            </ListItem>
                        ))}
                    </List>
                )}
            </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default Books;
