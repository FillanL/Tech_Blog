

// export const getArticles = async() => {
//     await fetch('http://localhost:3004/articles')
//         .then(res => res.json())
//         .then(articles => {console.log(articles, 1)
//         return articles})
// }

export const getArticles = () => async dispatch =>{
    await fetch('http://localhost:3004/articles')
        .then(res => res.json())
        .then(articles => dispatch({
            type:"GET_ARTICLES",
            payload: articles
        }))
}

export const postArticle = (article) => {
    return fetch('http://localhost:3004/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(article),
    })
        .then(res => res.json())
        .then(res => res)
}

export const updateArticle = () => {
    return fetch('http://localhost:3004/articles', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(),
    })
        .then(res => res.json())
        .then(res => res)
}

export const deleteArticle = (articleId) => {
    return fetch('http://localhost:3004/articles', {
        method: 'DELETE'
    })
    // .then(res => res.json())
    // .then(res => res)
}