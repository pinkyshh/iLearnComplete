import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/survey" className="nav-item nav-link">Survey</Link>
                            <Link to="/profile" className="nav-item nav-link">Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
