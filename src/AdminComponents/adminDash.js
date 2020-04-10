import React from 'react'
import LogIn from './LogIn'

import '../AdminComponents/AdminCSS/dash.scss'
import ArticleForm from './newArticleForm'
import AllArticles from './AllArticles'
import AdminNav from './adminNav'

export default function AdminDash() {
    

    return (
        <div>
            <div>
                <AdminNav/>

            <span className="active"></span> Active
            
            </div>
            <br></br>
            {/* admin herer */}
            <button>Add new Post</button>
            <button> View all Post</button>
            <LogIn />

            <ArticleForm/>

            <AllArticles/>
        </div>
    )
}
