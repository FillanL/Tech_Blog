import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/footer.scss'
import { useSelector } from 'react-redux';

const Footer = () => {
    const articles = useSelector(state => state.content.articles)

    return (
        <footer>
            <div>
                <h3>Website title</h3>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                            </Link>
                    </li>
                    <li>Explore</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h3>Quick Link</h3>
                <ul>
                    {articles.slice(articles.length-4).map(
                        article => <li><Link to={`/article/${article._id}`}>{article.articleTitle}</Link></li>
                    )}
                    {/* <li>top 5 sdnljsn</li>
                    <li> Why not to serbsiln eifn </li>
                    <li>where to get sttarted</li>
                    <li>How to sfdb  jns kj</li> */}
                </ul>
            </div>
            <div>
                <h3> Social Media</h3>
                <ul>
                    <li>
                        <a href="facebook.com"> facebook</a>
                    </li>
                    <li>
                        <a href="facebook.com"> Instagram</a>
                    </li>
                    <li>
                        <a href="facebook.com">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer