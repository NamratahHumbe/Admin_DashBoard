import { Navigate } from 'react-router-dom';
import moment from "moment/moment";
import React from 'react';
import './LayOut.css';
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
const LayOut = () => {
    const { pathname } = useLocation()
    return (
        <div className='container'>
            <Sidebar />
            {pathname === "/" && <Navigate to="/dashboard" />}
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
                    <div className='profile'>
                        <img src="/profile.png" alt="person image" />
                        <div className='details'>
                            <span>Namrata Humbe</span>
                            <span>humbenamrata10@gmail.com</span>
                        </div>
                    </div>
                    
                </div>
                <div className='content1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayOut