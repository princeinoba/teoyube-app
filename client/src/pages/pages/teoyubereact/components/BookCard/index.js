import React from "react";
import { useBooks } from "../../utils/BookContext";
import logo from "./../MainNav/bookie-logo.svg";

import {
  Button,
  Card,
  Col,
  Row
} from "reactstrap";

function BookCard({
  book: { booksId, title, authors, description, image, link, saved },
  ...props
}) {
  const { handleSave, handleDelete } = useBooks();
  const saveButton = (
    <Button
      onClick={() =>
        handleSave({
          booksId,
          title,
          authors,
          description,
          image,
          link,
        })
      }
      className="save-button"
    >
      Save
    </Button>
  );
  const deleteButton = (
    <Button onClick={() => handleDelete(booksId)} className="delete-button">
      Delete
    </Button>
  );

  return (
    <Card className="flex-row mb-3 border-0" {...props}>
      <div className="card-img-wrap p-3">
        <Card.Img
          className={image ? "shadow" : "mt-4"}
          src={image ? image : logo}
          style={
            image
              ? { height: "auto", width: "100%" }
              : { height: "auto", width: "50%" }
          }
        />
      </div>
      <Card.Body className="card-info">
        <Row className="justify-content-between mb-3">
          <Col>
            <Card.Title className="mb-1">{title}</Card.Title>
            <Card.Text>
              {authors && authors.length > 0 ? (
                <>
                  <span className="font-weight-bold">Author(s): </span>
                  {authors.join(", ")}
                </>
              ) : (
                ""
              )}
            </Card.Text>
          </Col>
          <Col
            xs={4}
            className="d-flex flex-column flex-md-row align-items-stretch align-items-md-start justify-content-md-end pl-0"
          >
            <Card.Link href={link} className="btn mr-md-3 mb-2 view-link">
              View
            </Card.Link>
            {saved ? deleteButton : saveButton}
          </Col>
        </Row>
        <Card.Text>{description ? description : ""}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
