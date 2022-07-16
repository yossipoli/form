import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

// const colors = [
//   "lightpink",
//   "orange",
//   "yellow",
//   "lightgreen",
//   "lightblue",
//   "violet",
// ];
function CardComponent({ edit, id, name, ...props }) {
  return (
    <Card
      className="card"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Title className="id"> ID: {id} </Card.Title>
        <Card.Title className="name"> {name}</Card.Title>
        {Object.keys(props).map((prop, index) => (
          <Card.Text key={index}>
              <strong>{prop.charAt(0).toUpperCase() + prop.slice(1)}:</strong>{" "}
              {props[prop].toString()}{" "}
          </Card.Text>
        ))}
        <Button variant="outline-warning" onClick={edit}>
          {" "}
          Edit{" "}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
