import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import FeaturedItems from './featItems'
import InfoSection from './infoSection';
import RandomPost from './randomPost';
import HomeAside from './homeAside';
import HomeSlider from './homeSlider';
import { getArticles } from '../Service/articleService';

import '../CSS/home.scss'

const Home = () => {
    const dispatch = useDispatch() 
    const articles = useSelector(state => state.content.articles)
    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])

    return (
        <div className="home">

            <div className="row">
                <div className="main">
                    <HomeSlider />
                </div>
                <div className="feat">
                    {articles[0] ? 
                        (articles.slice(0,3).map(article =>
                            <FeaturedItems id={article._id} key={article._id} article={article}/>
                        )): console.log('not')
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