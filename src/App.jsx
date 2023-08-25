import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayOut from './components/LayOut/LayOut';
import Dashboard from './pages/DashBoard/DashBoard';
import Calendar from './pages/Calendar/Calendar';
import BoardPage from './pages/Board/Board';
import DataGrid from './pages/DataGrid/DataGrid';
import Login from './pages/Login/Login';
import { useState } from 'react';
import Protected from './middleware/Authentication/Protected';
import InfiniteScrollPage from './pages/Pegination/InfiniteScrollPage';

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(null);

  const logIn = (username, password) => {
    if (username === 'namrata' && password === 'namu') {
      setisLoggedIn(true);
    }

  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  return (<div id="main-dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut isLoggedIn={isLoggedIn} logOut={logOut} />}>
          <Route path="login"
            element={<Login isLoggedIn={isLoggedIn} logIn={logIn} />}
          />
          <Route path="dashboard"
            element={<Dashboard />}
          />
          <Route path="calendar"
            element={<Protected isLoggedIn={isLoggedIn}><Calendar /></Protected>}
          />
          <Route path="board"
            element={<Protected isLoggedIn={isLoggedIn}><BoardPage /></Protected>}
          />
          <Route path="users"
            element={<Protected isLoggedIn={isLoggedIn}><DataGrid /></Protected>}
          />
          <Route path="pegination"
          element={<InfiniteScrollPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
};

export default App;
