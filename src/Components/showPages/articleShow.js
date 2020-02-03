import React, { Component, MetaHTMLAttributes } from 'react'
import '../../CSS/article_page.scss'

class ArticleShow extends Component {
    render() {
        // const featuredImg = false

        return (
            <div className="articleShow">
                <div className="feature-img">
                    <img srcSet="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="stuff" />
                </div>

                <div className="info-section">
                    <main>

                        <article>
                            <h1>Title</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita ullam quisquam iusto. Architecto atque totam laboriosam natus nostrum. Ratione aut sint commodi recusandae inventore porro magnam qui blanditiis iusto.

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed autem praesentium facilis culpa quidem at assumenda perferendis est animi, esse incidunt? Vitae incidunt sint alias rem dolorem mollitia doloremque ratione odio voluptate fugit similique cum perferendis aspernatur dolorum soluta recusandae velit voluptatum corporis non accusantium, officiis natus dolores pariatur!
                                s
                            </p>
                            <br></br>
                            <br></br>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita ullam quisquam iusto. Architecto atque totam laboriosam natus nostrum. Ratione aut sint commodi recusandae inventore porro magnam qui blanditiis iusto.

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed autem praesentium facilis culpa quidem at assumenda perferendis est animi, esse incidunt? Vitae incidunt sint alias rem dolorem mollitia doloremque ratione odio voluptate fugit similique cum perferendis aspernatur dolorum soluta recusandae velit voluptatum corporis non accusantium, officiis natus dolores pariatur!
                            </p>
                            <br></br>
                            <br></br>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita ullam quisquam iusto. Architecto atque totam laboriosam natus nostrum. Ratione aut sint commodi recusandae inventore porro magnam qui blanditiis iusto.

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed autem praesentium facilis culpa quidem at assumenda perferendis est animi, esse incidunt? Vitae incidunt sint alias rem dolorem mollitia doloremque ratione odio voluptate fugit similique cum perferendis aspernatur dolorum soluta recusandae velit voluptatum corporis non accusantium, officiis natus dolores pariatur!
                            </p>
                        </article>
                    </main>
                    <div className="article-sideBar">
                        <a href="https://www.siteground.com/web-hosting.htm?afbannercode=96d01173979b355bccee514d041b7119">
                            <img src="https://ua.siteground.com/img/banners/general/2019_EN/no_price/general_hosting_250x250_light.jpg" alt="Web Hosting"
                             width="100%" height="250" border="0"
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleShow