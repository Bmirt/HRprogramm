import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class Sidebar extends Component {
    render() {
        return (
            <div>
            <NavLink exact to="/">Profile List</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/Analytics'>Analytics</NavLink>
            <NavLink to="/Calendar">Calendar</NavLink>
            <NavLink to='/BlackList'>Black List</NavLink>
            <NavLink to='/UserManagment'>User Managment</NavLink>
            <span>V.1.0.1</span>
            </div>
        )
    }
}

export default Sidebar
