import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../CSS/random_post.scss'
// import FeatItems from './featItems';

export default class randomPost extends Component {
    render() {
        const ranPost = [1,2,3]
        return (
            <section className="random_post">
                    {ranPost.map(post => 
                    <div className="rando" key={ post}>
                            <img srcSet="https://source.unsplash.com/random" alt="stuff" />
                            <div className="random_section_container">
                                <h2>
                                    title Goes Hereeee!
                                </h2>

                                <article>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita ullam quisquam iusto. Architecto atque totam laboriosam natus nostrum. Ratione aut sint commodi recusandae inventore porro magnam qui blanditiis iusto.
                                <br></br>
                                <Link to="/"> Read More</Link>
                                </article>
                            </div>
                    </div>
                )}
            </section>
        )
    }
}
