import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../CSS/topNav.scss'

export default class topNav extends Component {
    navToggle=()=>{
        let nav = document.querySelector('.nav-links');

        nav.style.display === "" || nav.style.display === "block" ? nav.style.display = "none" : nav.style.display === "none" ? nav.style.display = "block": nav.style.display = "";
    }

    render() {
        return (
            
                <nav>
                    <div className="grid-90-10">
                        <h2>
                            <span style={{"color":"rgba(226,180,121)"}}>Minimal</span>.<span style={{"color":"rgba(206,102,215,.8)"}}>Logic</span><span style={{"color":"rgba(206,151,249)"}}>()</span>
                        </h2>
                        <div style={{"margin": "0 auto"}}>
                            <FontAwesomeIcon 
                            className="mobile-burger"
                            style={{
                                // "width":"50px",
                                "backgroundColor":"rgba(300,302,300,.0)"
                            }}
                            onClick={()=>this.navToggle()} 
                            icon={['fa', 'bars']} size="2x" 
                            />
                        {/* <button onClick={()=>this.navToggle()} className="mobile-burger"> "--"</button>
                        */}
                        </div> 
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/Explore'>
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link to='/catagory'>
                                How To
                            </Link>
                        </li>
                        <li>
                            <Link to='/Explore'>
                                Ruby
                            </Link>
                        </li>
                        <li>
                            <Link to='/Explore'>
                                Python
                            </Link>
                        </li>
                        <li>
                            <Link to='/Explore'>
                                Javascript
                            </Link>
                        </li>
                    </ul>
                </nav>
            
        )
    }
}
