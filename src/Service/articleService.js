let baseURL = "http://localhost:3004"

export const getArticles = () => async dispatch =>{
    await fetch(`${baseURL}/articles`)
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

export const updateArticle = () => async dispatch => {
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

export const deleteArticle = (articleId) =>{
    return fetch(`http://localhost:3004/articles/${articleId}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
}