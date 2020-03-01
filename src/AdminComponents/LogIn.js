import React from 'react'
import './AdminCSS/Login.scss'

function LogIn() {
    return (
        <div className='login_form'>
            <form className='signin_form'>
                <div className='form_formatting'>

                <label>Username</label>
                <input type="text" placeholder='Username' />
    <br></br>
                <label>Password</label>
                <input type="password" placeholder='password' />
                <br></br>
                <button>LOG IN</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn
