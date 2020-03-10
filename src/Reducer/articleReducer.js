const initialState = {
    currentArticle: null,
    articles: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                ...state,
                articles: action.payload
            };
        default:
            return state;
    }
}