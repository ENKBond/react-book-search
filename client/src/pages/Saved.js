import React, { Component } from "react";
import Title from "../components/Title";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    saved: "",
    id: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
        .then(res =>
            this.setState({ books: res.data })
        )
        .catch(err => console.log(err));
};

//   Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

//     saveBook = (id, title, description, author, link, image) => {
//     API.saveBook({
//         bookId: id, title: title, description: description, author: author, link: link, image: image, saved: true
//     }).then(res => {
//         console.log(res.data);
//     })
//         .catch(err => console.log(err));
// }

  // Handles updating component state when the user types into the input field
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.searchBooks(this.state.search)
//         .then(res => {
//             console.log(res.data)
//             const { items } = res.data
//             console.log(items);
//             this.setState({ books: items })
//             console.log(this.state.books)
//         })
//         .catch(err => console.log(err));
// };

  render() {
    return (

    <div>
        <Title>
              <h1>Books on the BookShelf</h1>
        </Title>
      <Container fluid>
        <Row>
            <Col size="md-12">
                {!this.state.books.length ? (
                    <h4>Time to search for some books!</h4>
                    ) : (
                        <List>
                        {this.state.books.map(book => (
                            <ListItem
                            key={book.id}
                            id={book.id}
                            title={book.volumeInfo.title}
                            description={(!book.searchInfo) ? "No Info Available" : book.searchInfo.textSnippet}
                            author={(!book.volumeInfo.authors) ? "No Author Info Available" : book.volumeInfo.authors[0]}
                            link={book.volumeInfo.infoLink}
                            image={(!book.volumeInfo.imageLinks) ? "https://fillmurray.com/150/200" : book.volumeInfo.imageLinks.thumbnail}
                            saved = {this.saved}
                            deleteBook = {this.deleteBook}
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

export default Saved;
