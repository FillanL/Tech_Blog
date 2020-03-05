import React from 'react'
import './AdminCSS/Login.scss'

function LogIn() {
    return (
        <div className='login_form'>
            <div className="back_btn_container">
                <span className="back_btn">
                    back
                </span>
            </div>
            <div className='signin_form'>
                    <h2>Sign in</h2>
                <div className='form_formatting'>

                    {/* <label>Username:</label> */}
                    <input type="text" placeholder='Username' maxLength="24"/>
        {/* <br></br> */}
                    {/* <label>Password:</label> */}
                    <input type="password" placeholder='Password' />
                    {/* <br></br> */}
                    <button>LOG IN</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn
