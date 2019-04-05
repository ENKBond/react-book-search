import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Title from "../components/Title";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Title>
            <h1>404</h1>
            <br/>
            <h3>Page Not Found</h3>
            <div>
                <img className="errImage" src="/assets/grumpy_cat.jpg"></img>
            </div>
          </Title>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
