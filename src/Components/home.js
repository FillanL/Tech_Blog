import React, { Component } from 'react'
import FeaturedItems from './featItems'

import InfoSection from './infoSection';
import '../CSS/home.scss'
import RandomPost from './randomPost';
import HomeAside from './homeAside';
import HomeSlider from './homeSlider';

export default class home extends Component {
    render() {
        const items = [1,2,3]
        // const photos = ["https://unsplash.com/photos/0pKQk1yyfbo", "https://unsplash.com/photos/xrVDYZRGdw4","https://unsplash.com/photos/95YRwf6CNw8", "https://unsplash.com/photos/ipARHaxETRk"]
        return (
            <div className="home">
                
               <div className="row">
                   <div className="main">
                      <HomeSlider />
                   </div>
                   <div className="feat">
                        {items.map(article =>
                        <FeaturedItems id={article} key={article} />
                            )}
                   </div>
               </div>
               {/* <div> */}

               <InfoSection/>
               {/* </div> */}

               <div className="bottom_section">
                   <RandomPost/>
                   <HomeAside/>
               </div>
              

            </div>
        )
    }
}
