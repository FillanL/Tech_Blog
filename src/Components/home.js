import React from 'react'
import {useSelector} from 'react-redux'
import {Helmet} from 'react-helmet'

import FeaturedItems from './featItems'
import InfoSection from './infoSection';
import RandomPost from './randomPost';
import HomeAside from './homeAside';
import HomeSlider from './homeSlider';

import '../CSS/home.scss'

const Home = () => {
    const articles = useSelector(state => state.content.articles)

    return (
        <div className="home">
            <Helmet>
                <title>
                    Minimal Logic - Home 
                </title>
                <meta
                    name="description"
                    content="software engineering technology blog regarding coding etc"
                />
            </Helmet>
            <div className="row">
                <div className="main">
                    <HomeSlider />
                </div>
                <div className="feat">
                    {articles[0] ? 
                        (articles.slice(0,3).map(article =>
                            <FeaturedItems id={article._id} key={article._id} article={article}/>
                        )): 
                        ([0,1,2,3,4].slice(0,3).map(article =>
                            <FeaturedItems id={article} key={article}/>
                        ))
                    }
                </div>
            </div>
            <InfoSection />
            <div className="bottom_section">
                <RandomPost />
                <HomeAside />
            </div>
        </div>
    )
}
export default Home