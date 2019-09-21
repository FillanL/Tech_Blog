import React, { Component } from 'react'
import '../CSS/explore.scss'

export default class ExploreCard extends Component {
    render() {
        return (
            <div className="card-box">
                {/* <div className="feature-img">

                <img srcSet="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="stuff" />
                </div> */}
                <div className="info-section">
                    <article>
                        <h3>Title</h3>
                        <p>firs 20</p>
                    </article>
                    <div className="article-sideBar">              
                    </div>
                </div>
            </div>
        )
    }
}
