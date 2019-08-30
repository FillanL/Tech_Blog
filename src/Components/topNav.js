import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../CSS/topNav.scss'

export default class topNav extends Component {
    render() {
        return (
            
                <nav>
                    <h2>
                        LOGO
                    </h2>
                    <ul>
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
                            <Link to='/Explore'>
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
