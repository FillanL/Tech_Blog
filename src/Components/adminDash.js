import React from 'react'
import LogIn from '../AdminComponents/LogIn'

import '../AdminComponents/AdminCSS/dash.scss'
import Editor from '../AdminComponents/Editor'
import AllArticles from '../AdminComponents/AllArticles'

export default function AdminDash() {
    

    return (
        <div>
            <div>

            <span className="active"></span> Active
            
            </div>
            <br></br>
            admin herer
            <button>Add new Post</button>
            <button> View all Post</button>
            <LogIn />

            <Editor/>

            <AllArticles/>
        </div>
    )
}
