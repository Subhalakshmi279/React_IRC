import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Users from './Pages/Users';
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';
import './Assets/CSS/core.css';


function App() {
  return (
   
   <div>
    
      <Routes>
          <Route path= '/'element={<Users/>}/>
          <Route path= '/add'element={<AddUser/>}/>
          <Route path= '/edit'element={<EditUser/>}/>

      </Routes>

    </div>
  );
}

export default App;
