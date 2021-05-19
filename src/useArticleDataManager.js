import articlesReducer from "./articlesReducer";
import axios from "axios";
import Router from "next/router";
import { useEffect, useReducer } from "react";

function useArticleDataManager() {
  const [{ isLoading, articleList }, dispatch] = useReducer(articlesReducer, {
    isLoading: true,
    articleList: [],
  });

  function addArticle(article) {
    const addData = async function () {
      const res = await axios.post(
        "http://localhost:5000/api/articles",
        article
      );
      console.log(res.data);
      Router.push("/articles");
    };
    addData();
  }

  function addComment(comment) {
    const addDataComment = async function () {
      const res = await axios.post(
        "http://localhost:5000/api/articles/comment",
        comment
      );
      console.log(res.data);
    };
    addDataComment();
  }

  function deleteArticle(article_id) {
    const deleteData = async function () {
      const res = await axios.delete(
        `http://localhost:5000/api/articles/${article_id}`
      );
      console.log(res.data);
    };
    deleteData();
  }

  const fetchData = async function () {
    let result = await axios.get("http://localhost:5000/api/articles");
    dispatch({ type: "setArticleList", data: result.data });
  };
  useEffect(() => {
    fetchData();
    return () => {
      console.log("cleanup");
    };
  }, []);
  return {
    isLoading,
    articleList,
    addArticle,
    deleteArticle,
    addComment,
    fetchData,
  };
}
export default useArticleDataManager;
