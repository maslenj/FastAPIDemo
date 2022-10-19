import React, { useState, useEffect } from 'react';
import './App.css';
import StudentView from './components/StudentListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [studentList, setStudentList] = useState([{}])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')


  // Read all students
  useEffect(() => {
    axios.get('http://localhost:8000/api/student')
      .then(res => {
        console.log(res.data)
        setStudentList(res.data)
      })
  }, [firstName]);

  // Post a student
  const addStudentHandler = () => {
    axios.post('http://localhost:8000/api/student', { 'firstName': firstName, 'lastName': lastName })
      .then(res => {
        console.log(res)
        setFirstName('')
        setLastName('')
      })
  };


  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{ "width": "400px", "backgroundColor": "white", "marginTop": "15px" }} >
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Student List</h5>
        <div >
          <StudentView studentList={studentList} />
        </div>
        <h5 className="card text-white bg-dark mb-3">Add Your Student</h5>
        <span className="card-text">
          <input className="mb-2 form-control titleIn" onChange={event => setFirstName(event.target.value)} placeholder='First Name' />
          <input className="mb-2 form-control desIn" onChange={event => setLastName(event.target.value)} placeholder='Last Name' />
          <button className="btn btn-outline-primary mx-2 mb-3" style={{ 'borderRadius': '50px', "font-weight": "bold" }} onClick={addStudentHandler}>Add Student</button>
        </span>
      </div>
    </div>
  );
}

export default App;