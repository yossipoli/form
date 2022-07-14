import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import "./App.css";
import StudentForm from "./Form";
import CardComponent from "./Card";
import List from "./List";
import Students from "./DAL/api";
import { useState } from "react";

function App() {
  const [list, setList] = useState({});
  const [load, setLoad] = useState(true);

async function getData(){
  const data = await Students.data
  setList(data)
  setLoad(false)
}

getData()

  const [showCard, setShowCard] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

  function switchWindow(addWindow, cardWindow) {
    setShowAdd(addWindow);
    setShowCard(cardWindow);
  }

  function addNewStudent(student={}) {
    setCurrentStudent({...student});
    switchWindow(true, false);
  }

  function showStudentCard(id) {
    switchWindow(false, true);
    setCurrentStudent(list[id]);
  }

  function renderList() {
    setList({...list})
    switchWindow(false, false);
  }

  function edit() {
    addNewStudent(currentStudent);
  }

  return (
    <div className="App">
      <h1 className="mainTitle rainbow-text">Cool Website</h1>

      {load ? (
        <div className="row">
          <Spinner animation="border" variant="success"/>
        </div>
      ) : (
        <div className="row">
          <div className="col" id="leftCol">
            <List
              addNewStudent={addNewStudent}
              list={list}
              listName="Students"
              showStudentCard={showStudentCard}
            />
          </div>

          <div className="col">
            {showAdd ? (
              <StudentForm
                edit={currentStudent.id}
                renderList={renderList}
                {...currentStudent}
              />
            ) : null}
            {showCard ? (
              <CardComponent {...currentStudent} edit={edit} />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
