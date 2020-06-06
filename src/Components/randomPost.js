import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { generateRandomNum } from '../Service/ServiceAlgo'
import defualtImg from '../Images/Default.png'
import '../CSS/random_post.scss'

const RandomPost = (props) => {
    let noMargin = 'repeat(4, 25%)'

    if (props.num !== 4) {
        noMargin = ''
    }
    const articles = useSelector(state => state.content.articles)
    const articleRange = generateRandomNum(articles.length, props.num || 3)
    return (
        <section className="random_post" style={{ gridTemplateRows: noMargin }}>
            {articles.length > 0 ?
                articles.slice(articleRange.start, articleRange.end).map(post =>
                    <div className="rando" key={post._id}>
                        <img
                            srcSet={`http://localhost:3004/articles/test/${post.articleImgUrl}`}
                            alt={`${post.articleTitle
                                }`}
                        />
                        <div className="random_section_container">
                            <h2>
                                {post.articleTitle}
                            </h2>
                            <article>
                                <p>
                                    {post.articleDescription.substring(0, 220)}...
                            </p>
                                <br></br>
                                <Link to={`/article/${post._id}`}> Read More</Link>
                            </article>
                        </div>
                    </div>
                ) :

                [0, 1, 2, 3, 4].slice(articleRange.start, articleRange.end).map(post =>
                    <div className="rando" key={post}>
                        <img src={defualtImg} alt="unavailable" />
                        <div className="random_section_container">
                            <div
                                style={{ backgroundColor: "rgb(205,203,204)", height: "1.5rem", width: "60%", padding: "", margin: " 0px auto 15px auto" }}
                            />
                            <div className="article">
                                <div
                                    style={{ backgroundColor: "rgb(205,203,204)", height: "1rem", width: "98%", margin: "0px auto auto " }}
                                />
                                <div
                                    style={{ backgroundColor: "rgb(205,203,204)", height: "1rem", width: "98%", margin: "8px auto auto " }}
                                />
                                <div
                                    style={{ backgroundColor: "rgb(205,203,204)", height: "1rem", width: "98%", margin: "8px auto auto " }}
                                />
                                <div className="read_btn">
                                    <Link to="#"> Read </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            }
        </section>
    )
}
export default RandomPost