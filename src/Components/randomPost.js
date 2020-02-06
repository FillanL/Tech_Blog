import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../CSS/random_post.scss'
// import FeatItems from './featItems';

export default class randomPost extends Component {
    render() {
        const ranPost = [4,5,6]
        return (
            <section className="random_post">
                    {ranPost.map(post => 
                    <div className="rando" key={ post}>
                            <img srcSet="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="stuff" />
                            <div className="random_section_container">
                                <h2>
                                    title Goes Hereeee!
                                </h2>

                                <article>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita ullam quisquam iusto. 
                                    </p>
                                    <br></br>
                                    <Link to={`/article/${post}`}> Read More</Link>
                                </article>
                            </div>
                    </div>
                )}
            </section>
        )
    }
}
