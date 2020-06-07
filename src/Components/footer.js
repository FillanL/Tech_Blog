import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/footer.scss'
import { useSelector } from 'react-redux';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    const articles = useSelector(state => state.content.articles)
    const mock = [0,1,2,3,]

    return (
        <footer>
            <div className="section_wrapper">

                <div>
                    <h3>
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <span style={{ "color": "rgba(226,180,121)" }}>Minimal</span>.<span style={{ "color": "rgba(206,102,215,.8)" }}>Logic</span><span style={{ "color": "rgba(206,151,249)" }}>()</span>
                        </Link>
                    </h3>
                    <ul>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>About Us</li>
                        <li>
                            {/* <link to="/minimal-logic-privacy-policy"> */}
                                Privacy Policy
                            {/* </link> */}
                        </li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h3>Quick Link</h3>
                    <ul>
                        {articles.length ?
                        articles.slice(articles.length-4).map(
                            article => <li key={article.articleTitle+''+article._id}>
                                <Link to={`/article/${article._id}`}>
                                    {article.articleTitle.substring(0,27)}...
                                </Link>
                                </li>
                        ):
                        mock.map(m =>
                            <li key={m}>
                                <div 
                                style={{backgroundColor: "rgb(205,203,204)", height:"1rem", width:"98%",margin:"20px auto auto "}}
                            />
                            </li>
                        )
                        
                        }
                    </ul>
                </div>
            </div>

            <div className="social_wrapper">
                {/* <h3> Social Media</h3> */}
                <ul>
                    <li>
                        <a href="https://facebook.com"> 
                            <FontAwesomeIcon
                                icon={['fab', 'facebook-f']} 
                                size="lg"
                                color="silver"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com"> 
                            <FontAwesomeIcon
                                icon={['fab', 'instagram']}
                                size="lg"
                                color="silver"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com">
                            <FontAwesomeIcon
                                icon={['fab', 'twitter']} 
                                size="lg"
                                color="silver"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com">
                        <FontAwesomeIcon
                            icon={['fab', 'medium']} 
                            size="lg"
                            color="silver"
                        />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCyjCBRHP2YJyapHU7wT2qyQ">
                            <FontAwesomeIcon
                                icon={['fab', 'youtube']} 
                                size="lg"
                                color="silver"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer