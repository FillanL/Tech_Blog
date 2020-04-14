import React from 'react'
import './AdminCSS/Login.scss'

function LogIn() {
    return (
        <div className="login_form">
            <div className='signin_form'>
                    <h2>Sign in</h2>
                <div className='form_formatting'>
                    <input type="text" placeholder='Username' maxLength="24"/>
                    <input type="password" placeholder='Password' />
                    <button>LOG IN</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn
