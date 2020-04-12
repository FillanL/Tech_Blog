import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../CSS/featured_items.scss'

export default class featItems extends Component {
    render() {
        return (
            <div className="feat_item">
                {
                this.props.article ?
                <>
                    <img 
                        srcSet="https://images.unsplash.com/photo-1491198246568-ea47742734b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" 
                        alt="something"
                    />
                    <div>
                        <h2>
                            {this.props.article.articleTitle.substring(0,24)}{this.props.article.articleTitle.length >= 24 ? 
                            "..." : null }
                        </h2>
                        <article>
                            <p>
                                {this.props.article.articleDescription.substring(0,50)}
                            </p>
                        <br></br>
                        <Link to={`/article/${this.props.article._id}`}> 
                            Read more
                        </Link>
                        </article> 
                    </div>
                </>
                    :
                <>
                 <img srcSet="https://images.unsplash.com/photo-1491198246568-ea47742734b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="something"/>
                    <div>
                        <h2>Title </h2>
                        <article>
                            <div>
                                <div style={{backgroundColor: "gray", height:"1rem"}}></div>
                                <div style={{backgroundColor: "gray", height:"1rem",marginTop:"8px"}}></div>

                                {/* "sdfnsldmflks" */}
                            </div>
                        <br></br>
                        <Link to='#'> Read more</Link>
                        </article> 
                    </div>
                </>
                
            }
            </div>
        )
    }
}
