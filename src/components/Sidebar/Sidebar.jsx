import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks, FaSplotch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='containerbar'>
           
            <img src="./logo.png" alt="logo" className='logo' />
            <div className='menu'>
                <NavLink
                    to="dashboard"
                    className='item'
                    title={"Dashboard"}>
                    <MdSpaceDashboard size={30} />
                </NavLink>
                
                <NavLink
                    to="calendar"
                    className='item'
                    title="Calendar"
                >
                    <AiFillCalendar size={30} />
                </NavLink>

                <NavLink
                    to="board"
                    className='item'
                    title="Trello Board"
                >
                    <FaTasks size={30} />
                </NavLink>

                <NavLink
                    to="users"
                    className='item'
                    title="Users"
                >
                    <AiOutlineTable size={30} />
                </NavLink>

                <NavLink
                    to="pegination"
                    className='item'
                    title={"InfiniteScrollPage"}>
                    <FaSplotch size={30} />
                </NavLink>
               
            </div>
         
        </div>
    )
}

export default Sidebar
