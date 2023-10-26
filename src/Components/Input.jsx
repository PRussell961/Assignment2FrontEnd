import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function Input() {
    const [id, setId] = useState("");
    const [grade, SetGrade] = useState(""); 

    
    const submitGrade = () => {
        Axios.post('http://3.142.42.190:1025/insert',{id: id, grade:grade}).catch((err) => {
            console.log(err)
        });
        
    }
    return (
      <>
      <p> All student ID's must be unique, 401, 402, and 403 have been used.</p>
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Student ID</Form.Label>
        <Form.Control onChange= {(e) => { setId(e.target.value);}} placeholder="Student ID" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Student Grade</Form.Label>
        <Form.Control onChange= {(e) => { SetGrade(e.target.value);}} placeholder="Grade" />
      </Form.Group>
    </Form>
    <Link className="nav-link" to="/DisplayGrade"><Button variant="primary" onClick={submitGrade}>Enter</Button> </Link>
      </>
    );
  }
  
  export default Input;