import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../CSS/featured_items.scss'

export default class featItems extends Component {
    render() {
        return (
            <div className="feat_item">
                <img srcSet="https://images.unsplash.com/photo-1491198246568-ea47742734b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="something"/>
                <div>
                    <h2>Title of post</h2>
                    <article>
                        <p>
                            lorm uerb as aenfjans askdnaksdka
                        </p>
                    <br></br>
                    <Link to="/somehting"> Read more</Link>
                    </article>
                </div>
            </div>
        )
    }
}
