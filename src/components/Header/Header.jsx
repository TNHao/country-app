import React, { Component } from 'react';
import { BsMoon } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom';

const getLocalStorage = () => {
    const data = localStorage.getItem('theme-checked'); 
    return (!data || data === 'false') ? false : true;
}

export default class Header extends Component {
    state = {
        checked: false
    }

    switchToDarkMode = (ele) => {
        let checked = ele.target.checked;
        let switchToTheme = checked ? "dark" : "light";         
        
        checked = checked ? true : false;
        this.setState({ checked });
        localStorage.setItem('theme-checked', checked);
    
        document.documentElement.setAttribute("data-theme", switchToTheme);
    };

    render() {
        return (
            <nav className="navbar header box-shadow">
                <h2><Link to="/" className="text-decoration-none header-text">Where in the world?</Link></h2>
                <div className="dark-mode-btn text-center">
                    <label className="switch mb-0 mb-sm-2">
                        <input id="dark-mode-btn" type="checkbox" className="checkbox" checked={this.state.checked} onChange={this.switchToDarkMode}/>
                        <span className="toggle-thumb">
                            <FaSun />
                            <BsMoon /> 
                        </span>
                    </label>
                    <h5>{this.state.checked ? "Light" : "Dark"} mode</h5>
                </div>
            </nav>
        )
    }

    componentDidMount(){
        const checked = getLocalStorage();
        let switchToTheme = checked ? "dark" : "light";         

        this.setState({ checked });    
        document.documentElement.setAttribute("data-theme", switchToTheme);
    }
}
