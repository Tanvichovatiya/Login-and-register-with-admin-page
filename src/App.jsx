import React, { useState } from 'react';
import AdminPage from './component/AdminPage';
import RegisterForm from './component/Registerform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './component/LoginForm';
import AdminPageLogin from './component/Adminpageforlogin';


function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const [loginAttempts, setLoginAttempts] = useState([]);

  const addLoginAttempt = (attempt) => {
    setLoginAttempts([...loginAttempts, attempt]);
  };
  return (
    // <div className="App">
    //   <RegisterForm addUser={addUser} />
    //   <AdminPage users={users} />
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RegisterForm addUser={addUser}/>}></Route>
      <Route path='/admin' element={<AdminPage users={users}/>}></Route>
      <Route path='/login' element={<LoginForm addLoginAttempt={addLoginAttempt}/>}></Route>
      <Route path='/adminlogin' element={<AdminPageLogin loginAttempts={loginAttempts}/>}></Route>
    </Routes>
    </BrowserRouter>
    


  );
}

export default App;
