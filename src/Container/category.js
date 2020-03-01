import React from 'react'

import Post from '../Components/randomPost'
import '../CSS/category.scss'


function category() {
    return (
    <div className="">
        <div className="col-60-40 category row-gap">
            <div className="row category-row1">
                {/* <Post/> */}
                <img style={{maxHeight:"100%", maxWidth:"100%", margin: "auto"}} srcSet="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="something"/>
            </div>
            <div className="row row-gap">
                <div className="row">
                    <img style={{maxHeight:"100%", maxWidth:"100%"}} srcSet="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="something"/>
                </div>
                <div className="col-50-50">
                    <div className="">
                        <img style={{maxHeight:"100%", maxWidth:"100%"}} srcSet="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="something"/>
                    </div>
                    <div className="">
                        <img style={{maxHeight:"100%", maxWidth:"100%"}} srcSet="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="something"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-70-30 category container-margin">
            <div className='row'>
                <Post num={4}/>
            </div>
            <div className="row ad-section">
                <div className="ad-box">
                    <img src="" alt="" srcSet=""/>
                </div>
                <div className="ad-box">

                </div>
                <a href="https://www.siteground.com/web-hosting.htm?afbannercode=fe88a23517a2f9acda633a8b9b5a9f38">
                    <img src="https://ua.siteground.com/img/banners/general/2019_EN/no_price/start_site_250x250_green.jpg" alt="Web Hosting" width="250" height="250" border="0"/>
                </a>
                

            </div>
        </div>
        </div>
    )
}

export default category
