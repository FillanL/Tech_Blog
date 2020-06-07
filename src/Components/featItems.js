import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import defualtImg from '../Images/Default.png'
import '../CSS/featured_items.scss'

export default class featItems extends Component {
    render() {
        return (
            <div className="feat_item">
                {
                this.props.article ?
                <>
                    <img 
                 srcSet={`http://localhost:3004/articles/images/${this.props.article.articleImgUrl}`}
                        alt={`${this.props.article.articleTitle
                        }`}
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
                                    Read 
                                </Link>
                            </div>
                        </div> 
                    </div>
                </>
                    :
                <>
                 <img 
                 srcSet={defualtImg}
                 alt="unavailable"/>
                    <div className="article_detail">
                        <div 
                            style={{backgroundColor: "rgb(205,203,204)", height:"1.6rem", width:"48%", marginBottom:"10px"}}
                        />
                        <div className="article">
                            <div 
                                style={{backgroundColor: "gray", height:"1rem", marginBottom:"10px"}}
                            />
                            <div 
                                style={{backgroundColor: "rgb(205,203,204)", height:"1rem",marginBottom:"10px"}}
                            />
                            <div 
                                style={{backgroundColor: "gray", height:"1rem",marginBottom:"10px"}}
                            />
                            <div className="read_btn">
                                <Link to='#'> Read </Link>
                            </div>
                        </div>
                    </div>
                </>
                
            }
            </div>
        )
    }
}
