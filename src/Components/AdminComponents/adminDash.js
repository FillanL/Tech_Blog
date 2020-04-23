import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

import './AdminCSS/dash.scss'
import LogIn from './LogIn'
import ArticleForm from './newArticleForm'
import AllArticles from './AllArticles'

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
