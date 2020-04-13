import React, {} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {deleteArticle} from '../Service/articleService'
import './AdminCSS/allArticles.scss'

function AllArticles() {
    const articles = useSelector(state => state.content.articles)
    const dele = (e,article)=>{
        let isConfirm = window.confirm('are you sure ?')
         if (isConfirm){
            deleteArticle(article._id)
            return "ckd"
        }
        return
    }

    const layout = () => {
        if (articles) {
            return (
                <div className="admin_article_container">
                    {articles.map(article =>
                        <div className="admin_article_card" key={article._id}>
                            <div className="card_title_section">
                                {article.articleTitle}
                            </div>
                            <div className="admin_card_action_section">
                                <Link to={`/article/${article._id}`}>
                                    <button>
                                        View
                                    </button>
                                </Link>
                                <button>Edit</button>
                                <button onClick={(e)=>dele(e,article)}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>

            )
        } else {
            return (
                <div>
                    {console.log("not fetched")}
                    loaaadinng...
            </div>
            )
        }
    }
    return (
        <>
            {layout()}
        </>
    )
}

export default AllArticles
