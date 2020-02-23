import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../CSS/random_post.scss'

const RandomPost = ()=>{
    const articles = useSelector(state => state.content.articles)
    return (
        <section className="random_post">
            {articles.slice(0,3).map(post => 
                <div className="rando" key={ post._id}>
                    <img srcSet="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="stuff" />
                    <div className="random_section_container">
                        <h2>
                            {post.articleTitle}
                        </h2>
                        <article>
                            <p>
                                {post.articleContent.substring(0,230)}...
                            </p>
                            <br></br>
                            <Link to={`/article/${post._id}`}> Read More</Link>
                        </article>
                    </div>
                </div>
            )}
        </section>
    )
}
export default RandomPost