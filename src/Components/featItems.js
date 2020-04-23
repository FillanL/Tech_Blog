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
                    <div className="article_detail">
                        <h2>
                            {this.props.article.articleTitle.substring(0,24)}{this.props.article.articleTitle.length >= 24 ? 
                            "..." : null }
                        </h2>
                        <div className="article">
                            <p>
                                {this.props.article.articleDescription.substring(0,50)}
                            </p>
                            <div className="read_btn">
                                <Link to={`/article/${this.props.article._id}`}> 
                                    Read More
                                </Link>
                            </div>
                        </div> 
                    </div>
                </>
                    :
                <>
                 <img srcSet="https://images.unsplash.com/photo-1491198246568-ea47742734b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="something"/>
                    <div className="article_detail">
                        <div 
                            style={{backgroundColor: "rgb(205,203,204)", height:"1.6rem", width:"48%", marginBottom:"10px"}}
                        />
                        <div className="article">
                            <div 
                                style={{backgroundColor: "gray", height:"1rem", marginBottom:"10px"}}
                            />
                            <div 
                                style={{backgroundColor: "gray", height:"1rem",marginBottom:"10px"}}
                            />
                            <div 
                                style={{backgroundColor: "gray", height:"1rem",marginBottom:"10px"}}
                            />
                            <div className="read_btn">
                                <Link to='#'> Read More</Link>
                            </div>
                        </div>
                    </div>
                </>
                
            }
            </div>
        )
    }
}
