import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar({ mode, setmode, title, about }) {

    const handleClick = (e) => {
        e.preventDefault();
        if (mode === 'light'){
            setmode("dark")
            document.body.style.backgroundColor= '#051327'// but this is not a good approach
        }
        else{
            setmode("light")
            document.body.style.backgroundColor= 'white'// but this is not a good approach
        }

    }

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/">{"Home"} </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/about">  {about}</Link>
                            </li>

                        </ul>

                        <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>

                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleClick} onChange={handleClick} ></input>

                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode==='light'?'dark':'light'}mode</label>

                        </div>

                    </div>
                </div>

            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    about: 'About CaseCrafty'
}