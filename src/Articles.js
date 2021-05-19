import React, { useState, useCallback } from "react";
import { Menu } from "./Menu";
import ArticleDetail from "./ArticleDetail";
import useArticleDataManager from "./useArticleDataManager";

const Articles = ({}) => {
  const [searchInput, setSearchInput] = useState("");

  const { isLoading, articleList, deleteArticle, addComment, fetchData } =
    useArticleDataManager();

  const ClickDeleteArticleHandler = (id) => {
    deleteArticle(id);
    fetchData();
  };

  const ClickAddCommentHandler = (comment, setComment) => {
    addComment(comment);
    fetchData();

    setComment({
      ...comment,
      comment_content: "",
    });
  };

  function filterByValue(array, string) {
    return array.filter((o) =>
      Object.keys(o).some((k) =>
        String(o[k]).toLowerCase().includes(string.toLowerCase())
      )
    );
  }

  const articleListFiltered = isLoading
    ? []
    : filterByValue(articleList, searchInput);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Menu />
      <br />
      <label>Search your article in the site :</label>
      <input
        className="form-group col-md-6"
        type="search"
        name="search"
        id="search"
        aria-describedby="emailHelp"
        placeholder="search"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />

      <br />
      <hr />
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {articleListFiltered.map((articleRec) => {
              return (
                <ArticleDetail
                  key={articleRec.id}
                  articleRec={articleRec}
                  onClickDeleteArticleHandler={ClickDeleteArticleHandler}
                  onClickAddCommentHandler={ClickAddCommentHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
