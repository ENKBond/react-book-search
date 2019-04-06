import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";


export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  console.log(props)
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="md-3">
            <img alt={props.title} src={props.image || "https://fillmurray.com/150/200"} />
          </Col>

          <Col size="md-6">
            <h6>{props.title}</h6>
            <p><span>{props.author}</span></p>
            { props.description ? <p>{props.description}</p> : <p>No Info Available</p>}
          </Col>
          <Col size="md-3">
            <a
              className="btn btn-primary float-right"
              rel="noreferrer noopener"
              target="_blank"
              href={props.link}
            >
            View
            </a>
            {(props.saved === undefined) ? <button
              className="btn btn-success float-right mr-3"
              onClick={ () => props.saveBook(props.id, props.title, props.description, props.author, props.link, props.image, props.saved)}
            >
            Save
            </button> : 
            <button className="btn btn-danger float-right mr-3" onClick={() => props.deleteBook(props.id)}>
            Delete
            </button>
            }
          </Col>
        </Row>
      </Container>
    </li>
  );
}