import React, { useState, useEffect } from 'react';
import { BsMoon } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actSetError } from '../../store/actions/apiAction';

const getLocalStorage = () => {
    const data = localStorage.getItem('theme-checked');
    // If there is no saved theme, defaut is false
    return (!data || data === 'false') ? false : true;
}

export default function Header() {
    const dispatch = useDispatch();

    //Set initial theme
    const [theme, setTheme] = useState(getLocalStorage());

    useEffect(() => {
        let switchToTheme = theme ? "dark" : "light";

        // set back to local storage
        localStorage.setItem('theme-checked', theme);
        document.documentElement.setAttribute("data-theme", switchToTheme);
    }, [theme]);

    return (
        <nav className="navbar header box-shadow">
            <h2>
                <Link to="/" 
                    className="text-decoration-none header-text"
                    onClick={() => {
                        // Set error to null
                        dispatch(actSetError(null));
                    }}
                >
                    Where in the world?
                </Link>
            </h2>
            <div className="dark-mode-btn text-center">
                <label className="switch mb-0 mb-sm-2">
                    <input id="dark-mode-btn" type="checkbox" className="checkbox" checked={theme} onChange={() => {setTheme(!theme)}} />
                    <span className="toggle-thumb">
                        <FaSun />
                        <BsMoon />
                    </span>
                </label>
                <h5>{theme ? "Light" : "Dark"} mode</h5>
            </div>
        </nav>
    )
}
