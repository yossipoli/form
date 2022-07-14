import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

const colors = [
  "lightpink",
  "orange",
  "yellow",
  "lightgreen",
  "lightblue",
  "violet",
];
function CardComponent({ edit, id, name, ...props }) {
  return (
    <Card
      className="card"
      style={{ width: "18rem", backgroundColor: colors[id % 6] }}
    >
      <Card.Body>
        <Card.Title> ID: {id} <br/>{name}</Card.Title>
        <Card.Text>
          {Object.keys(props).map((prop, index) => (
            <label key={index}>
              <strong>{prop.charAt(0).toUpperCase() + prop.slice(1)}:</strong> {props[prop]}{" "}
              <br/>
            </label> 
          ))}
        </Card.Text>
        <Button variant="outline-secondary" onClick={edit}>
          {" "}
          Edit{" "}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
