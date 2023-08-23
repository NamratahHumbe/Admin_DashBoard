import moment from "moment/moment";
import React from 'react';
import './LayOut.css';
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation, Navigate, useNavigate } from "react-router-dom";
const LayOut = ({ isLoggedIn, logOut }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
  
    const handleLoginClick = () => {
      navigate('/login');
    };
    return (
        <div className='container'>
            <Sidebar />
            {pathname === "/" && <Navigate to="/login" />}
            <div className='dashboard'>
                <div className='topBaseGradients'>
                    <div className="gradient-red"></div>
                    <div className="gradient-orange"></div>
                    <div className="gradient-blue"></div>
                </div>
                <div className='header'>
                    <span>{moment().format("dddd, Do MMM YYYY")}</span>
                    <div className='searchBar'>
                        <BiSearch size={20} />
                        <input type="text" placeholder="Search" />
                    </div>
                    <div>
                        {isLoggedIn ? (
                            <button onClick={logOut}>Logout</button>
                        ) : (
                            <button onClick={handleLoginClick}>Login</button>
                        )}
                    </div>
                    {!isLoggedIn && pathname === '/' && <Navigate to='/login' />}
                </div>
                <div className='content1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayOut


// import moment from "moment/moment";
// import React from 'react';
// import './LayOut.css';
// import { BiSearch } from "react-icons/bi";
// import Sidebar from "../Sidebar/Sidebar";
// import { Outlet, useLocation, Navigate, useNavigate } from "react-router-dom";

// const LayOut = ({ isLoggedIn, logOut }) => {
//     const navigate = useNavigate();
//     const { pathname } = useLocation();
  
//     const handleLoginClick = () => {
//         if (!isLoggedIn) {
//             navigate('/login');
//         }
//     };

//     // Use Navigate component for conditional navigation

//     return (
//         <div className='container'>
//             <Sidebar />
//             {pathname === "/" && <Navigate to="/dashboard" />};
//             <div className='dashboard'>
//                 <div className='topBaseGradients'>
//                     <div className="gradient-red"></div>
//                     <div className="gradient-orange"></div>
//                     <div className="gradient-blue"></div>
//                 </div>
//                 <div className='header'>
//                     <span>{moment().format("dddd, Do MMM YYYY")}</span>
//                     <div className='searchBar'>
//                         <BiSearch size={20} />
//                         <input type="text" placeholder="Search" />
//                     </div>
//                     <div>
//                         {isLoggedIn ? (
//                             <button onClick={logOut}>Logout</button>
//                         ) : (
//                             <button onClick={handleLoginClick}>Login</button>
//                         )}
//                     </div>
//                 </div>
//                 <div className='content1'>
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LayOut;
