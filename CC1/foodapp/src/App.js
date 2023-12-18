import Home from './Components/Home';
import Login from './Components/Login';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import './Assets/CSS/Home.css';
import { Route, Routes } from 'react-router-dom'
import './Assets/CSS/Signup.css';
import './Assets/CSS/login.css';  


function App() {
  return (
    <div>

      <Nav/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
