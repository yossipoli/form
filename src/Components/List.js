import React from "react";
import Button from "react-bootstrap/Button";
import "./List.css";

function List({ listName, list, showStudentCard, addNewStudent }) {
  return (
    <div className="listPage">
      <header>
        <h1>
          {listName} List: {Object.keys(list).length} {listName}
        </h1>
        <div>
          <Button onClick={()=>addNewStudent(null)} variant="outline-success">
            Add
          </Button>
        </div>
      </header>
      <div className="list">
        <table>
          <thead>
            <tr>
              <th>{listName} names:</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(list).map((id) => (
              <tr key={id} onClick={() => showStudentCard(id)}>
                <td key={id}>{list[id].name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
