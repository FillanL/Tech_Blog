import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

import {generateRandomNum} from '../Service/ServiceAlgo'
import '../CSS/random_post.scss'

const RandomPost = (props)=>{
    let noMargin = 'repeat(4, 25%)'

    if (props.num !== 4){
        noMargin=''
    }
    const articles = useSelector(state => state.content.articles)
    const articleRange = generateRandomNum(articles.length,props.num || 3)
    return (
        <section className="random_post" style={{gridTemplateRows:noMargin}}>
            { articles.length > 0 ?
            articles.slice(articleRange.start,articleRange.end).map(post => 
                <div className="rando" key={ post._id}>
                    <img srcSet="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="stuff" />
                    <div className="random_section_container">
                        <h2>
                            {post.articleTitle}
                        </h2>
                        <article>
                            <p>
                                {post.articleDescription.substring(0,220)}...
                            </p>
                            <br></br>
                            <Link to={`/article/${post._id}`}> Read More</Link>
                        </article>
                    </div>
                </div>
            ):
        
            [0,1,2,3,4].slice(articleRange.start,articleRange.end).map(post => 
                <div className="rando" key={post}>
                    <img srcSet="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="stuff" />
                    <div className="random_section_container">
                        <h2>
                            dslnalja smf asalnslas
                        </h2>
                        <article>
                            <p>
                                "dssdfdsfsdvd"...
                                {/* {console.log(articleRange, articles)} */}
                            </p>
                            <br></br>
                            <Link to=""> Read More</Link>
                        </article>
                    </div>
                </div>
            )
            
            }
        </section>
    )
}
export default RandomPost