import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../CSS/featured_items.scss'

export default class featItems extends Component {
    render() {
        return (
            <div className="feat_item">
                <img src="https://source.unsplash.com/random" alt="#"/>
                <div>
                    <h2>Title of post</h2>
                    <article>
                        lorm uerb as aenfjans askdnaksdka
                    <br></br>
                    <Link to="/somehting"> Read more</Link>
                    </article>
                </div>
            </div>
        )
    }
}
