import React from 'react'
import { useSelector } from 'react-redux'

function AllArticles() {
    const articles = useSelector(state => state.content.articles)
    console.log(articles)

    const layout = ()=>{
        if(articles){
            return(
        <div className="articleCardContainer">
            {articles.map( article =>
            <div className="admin_article_card"> 
                <div>
                    {article.articleTitle}
                </div>
                <div>
                    <button>View</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            )}
        </div>

            )
        }else{
            return(
            <div>
                loaaadinng
            </div>
            )
        }
    }
    return (
        <>
        {layout()}
        </>
    )
}

export default AllArticles
