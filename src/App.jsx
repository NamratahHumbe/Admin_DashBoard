import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayOut from './components/LayOut/LayOut';
import Dashboard from './pages/DashBoard/DashBoard';
import Calendar from './pages/Calendar/Calendar';
import BoardPage from './pages/Board/Board';
import DataGrid from './pages/DataGrid/DataGrid';
import Login from './pages/Login/Login';
import { useState, useEffect } from 'react';
import Protected from './middleware/Authentication/Protected';
import ScrollPage from './pages/DataGrid/ScrollPage'
import axios from 'axios';
// const App = () => {
//   const [isLoggedIn, setisLoggedIn] = useState(null);

//   const logIn = (username, password) => {
//     if (username === 'namrata' && password === 'namu') {
//       setisLoggedIn(true);
//     }

//   };
//   const logOut = () => {
//     setisLoggedIn(false);
//   };

//   return (<div id="main-dashboard">
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LayOut isLoggedIn={isLoggedIn} logOut={logOut} />}>
//           <Route path="login"
//             element={<Login isLoggedIn={isLoggedIn} logIn={logIn} />}
//           />
//           <Route path="dashboard"
//             element={<Dashboard />}
//           />
//           <Route path="calendar"
//             element={<Protected isLoggedIn={isLoggedIn}><Calendar /></Protected>}
//           />
//           <Route path="board"
//             element={<Protected isLoggedIn={isLoggedIn}><BoardPage /></Protected>}
//           />
//           <Route path="users"
//             element={<Protected isLoggedIn={isLoggedIn}><DataGrid /></Protected>}
//           />
//           <Route
// path="scroll"
// element={<Protected isLoggedIn={isLoggedIn}><ScrollPage /></Protected>}
// />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </div>
//   )
// };

// export default App;

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true' // Check if user is already logged in
  );

  // const logIn = (username, password) => {
  //   if (username === 'namrata' && password === 'namu') {
  //     setisLoggedIn(true);
  //     localStorage.setItem('isLoggedIn', 'true');
  //   }
  // };
  const logIn = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { username, password }); 
  
      if (response.status === 200) {
        setisLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  const logOut = () => {
    setisLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn') === 'true';
    if (storedLoginState) {
      setisLoggedIn(true);
    }
  }, []);

  return (
    <div id="main-dashboard">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LayOut isLoggedIn={isLoggedIn} logOut={logOut} />}
          >
            <Route path="login" element={<Login isLoggedIn={isLoggedIn} logIn={logIn} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="calendar"
              element={<Protected isLoggedIn={isLoggedIn}><Calendar /></Protected>}
            />
            <Route
              path="board"
              element={<Protected isLoggedIn={isLoggedIn}><BoardPage /></Protected>}
            />
            <Route
              path="users"
              element={<Protected isLoggedIn={isLoggedIn}><DataGrid /></Protected>}
            />
            <Route
              path="scroll"
              element={<Protected isLoggedIn={isLoggedIn}><ScrollPage /></Protected>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
