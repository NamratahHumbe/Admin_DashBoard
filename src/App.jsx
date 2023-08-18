import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayOut from './components/LayOut/LayOut';
import Dashboard from './pages/DashBoard/DashBoard';
import Calendar from './pages/Calendar/Calendar';
import BoardPage from './pages/Board/Board';
import DataGrid from './pages/DataGrid/DataGrid';


const App = () => {
  return (<div id="main-dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="board" element={<BoardPage/>}/>
          <Route path="users" element={<DataGrid/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  </div>
  )
};

export default App;
