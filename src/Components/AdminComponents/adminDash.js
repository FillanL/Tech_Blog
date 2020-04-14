import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import LogIn from './LogIn'

import './AdminCSS/dash.scss'
import ArticleForm from './newArticleForm'
import AllArticles from './AllArticles'
import AdminNav from './adminNav'

export default function AdminDash() {
    const [activePage, changeRoute] = useState("logIn")
    const userkey = localStorage.getItem("mlogic")

    const articles = useSelector(state => state.content.articles)
    
// console.log(activePage)

    return (
        <>
            { userkey ?
                <>
                    <div>
                        {/* <AdminNav/> */}
                        <span 
                            className={articles.length> 0 ? "active":"deactive"} 
                        /> 
                        {articles.length> 0 ? "Connected":"Disconnected"}
                    </div>
                    <br></br>
                    <button onClick={()=>changeRoute("addNew")}>
                        Add new Post
                    </button>
                    <button onClick={()=>changeRoute("allArticles")}> 
                        View all Post
                    </button> 
                </>: null
            }
            {
                activePage === "logIn" ?
                    (!userkey ?  
                        <LogIn /> : 
                        changeRoute("addNew")
                    ):
                activePage === "addNew" && userkey ?
                    <ArticleForm/>:
                activePage === "allArticles" && userkey ?
                    <AllArticles/> :
                    <Redirect to='/' />
            }
        </>
    )
}
