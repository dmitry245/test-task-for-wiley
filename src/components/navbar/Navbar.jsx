import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={s.navbarWrapper}>
            <div className={s.item}><NavLink to="/createTask" activeClassName={s.active}>Create task</NavLink></div>
            <div className={s.item}><NavLink to="/editTask" activeClassName={s.active}>Edit task</NavLink></div>
            <div className={s.item}><NavLink to="/listTask" activeClassName={s.active}>List task</NavLink></div>
        </nav>
    )
};

export default Navbar;