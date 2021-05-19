const articlesReducer = (state, action) => {
  switch (action.type) {
    case "setArticleList": {
      return { ...state, articleList: action.data, isLoading: false };
    }
    default:
      return state;
  }
};
export default articlesReducer;
