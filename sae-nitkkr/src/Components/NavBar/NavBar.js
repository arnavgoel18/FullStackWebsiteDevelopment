import React from 'react'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

import './NavBar.css'

function NavBar() {

    const [open, setOpen] = useState(false);

    return(
        <nav className="NavigationBar_Nav-navbar">
            <Link to="/" className="NavigationBar_Nav-navlogo" onClick={()=>setOpen(false)}>
                SAENITKKR
            </Link>
            <ul className={open ? 'NavigationBar_Nav-nav-links active' : 'NavigationBar_Nav-nav-links'}>
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/blogs" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Blogs
                    </Link>
                </li>
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/sponsors" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Sponsors
                    </Link>
                </li>
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/autokriti" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Autokriti
                    </Link>
                </li>
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/accelerons" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Accelerons
                    </Link>
                </li>
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/nitrox" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Nitrox
                    </Link>
                </li>
            </ul>
            <div onClick={() => setOpen(!open)} className="NavigationBar_Nav-nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
        </nav>
    )
}

export default NavBar;