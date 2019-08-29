import React, { Component } from 'react'
import FeaturedItems from './featItems'

import InfoSection from './infoSection';
import '../CSS/home.scss'
import RandomPost from './randomPost';
import HomeAside from './homeAside';

export default class home extends Component {
    render() {
        const items = [1,2,3]
        return (
            <div className="home">
                
               <div className="row">
                   <div className="main">

                   </div>
                   <div className="feat">
                        {items.map(article =>
                        <FeaturedItems key={article} />
                            )}
                   </div>
               </div>
               <InfoSection/>

               <div className="bottomSection">
                   <RandomPost/>
                   <HomeAside/>
               </div>
              

            </div>
        )
    }
}
