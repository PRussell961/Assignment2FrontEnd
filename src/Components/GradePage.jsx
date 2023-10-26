import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import Avrg from './Avrg';
function GradePage() {
    const[allGrades, setAllGrades] = useState([]);

    
    useEffect(() => {
    Axios.get('http://3.142.42.190:1025/get').then((response) => {
      setAllGrades(response.data)
    });
    }, []);    

  return (    
    <>       
        {allGrades.map((val)=>{
        return <h5>Student ID: {val.StudentID} , Student Grade: {val.Grades}</h5>
    })}
    </>
  );
}

export default GradePage;