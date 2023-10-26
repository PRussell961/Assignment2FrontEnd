
import NavigationBar from './Components/NavigationBar';
import Input from './Components/Input';
import GradePage from './Components/GradePage';
import Avrg from './Components/Avrg';
import './App.css';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
    <div className="App">
        <NavigationBar />
        <div className="container">
          <Routes>
          <Route path="/" element={<Input/>}/>
          <Route path="/Displaygrade" element={<Avrg/>}/>
          </Routes>
        </div>
    </div>
    </>
  );
}

export default App;
