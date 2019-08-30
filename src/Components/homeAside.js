import React, { Component } from 'react'

import '../CSS/home_sideBar.scss'

export default class homeAside extends Component {
    render() {
        return (
            <div className="HomeSideBar">
                <div className="contentAd">
                    <img srcSet="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="something"/>
                </div>

                <div className="gala">
                    <div className="test">
                        <img srcSet="https://images.unsplash.com/photo-1504913659239-6abc87875a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="something"/>
                    </div>
                    <div className="test">
                        <img srcSet="https://images.unsplash.com/photo-1524124689028-f924049fe2d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="something"/>
                    </div>
                    <div className="test">
                        <img srcSet="https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="something"/>
                    </div>
                    <div className="test">
                        <img srcSet="https://images.unsplash.com/photo-1452933006409-19b87dc327b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="something"/>
                    </div>
                </div>
            </div>
        )
    }
}
