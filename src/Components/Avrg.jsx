import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import GradePage from './GradePage';
function Avrg() {
    
    const[avrg, setAvrg] = useState([]);
 
    useEffect(() => {
    Axios.get('http://3.142.42.190:1025/getavrg').then((response) => {
      setAvrg(response.data)
    });
    }, []);    

  return (    
    <>      
        {avrg.map((val)=>{
        return <h5>Students Average: {val.Avrg}</h5>
        
    })}
      <GradePage />
    </>
  );
}

export default Avrg;