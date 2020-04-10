import React from 'react'
// { MetaHTMLAttributes }
import '../../CSS/article_page.scss'
import { useSelector } from 'react-redux'

const ArticleShow = (props) => {
    

    const articleId = props.match.params.id
    const article = useSelector(state => state.content.articles).filter(article => article._id === articleId)[0]

    const layout = () => {
        if (article) {
            return (
            <>
                <h1>
                    {article.articleTitle}
                </h1>
                <p>
                    {article.articleContent}
                </p>
            </>)
        } else {
            return (
            <div>
                LOADDIING...
                <p>hereeee</p>
            </div>)
        }
    }

    return (
        <div className="articleShow">
            <div className="feature-img">
                <img srcSet="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9" alt="stuff" />
            </div>

            <div className="info-section">
                <main>

                    <article>
                        {layout()}
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

export default ArticleShow