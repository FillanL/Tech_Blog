import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './AdminCSS/allArticles.scss'

function AllArticles() {
    const articles = useSelector(state => state.content.articles)
    console.log(articles)

    const layout = () => {
        if (articles) {
            return (
                <div className="admin_article_container">
                    <div className="back_btn_container">
                        <span className="back_btn">
                        back
                        </span>
                    </div>
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
                                <button>Delete</button>
                            </div>
                        </div>
                    )}
                </div>

            )
        } else {
            return (
                <div>
                    loaaadinng
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
