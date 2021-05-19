import React, { useState } from "react";

const ArticleDetail = React.memo(
  ({ articleRec, onClickDeleteArticleHandler, onClickAddCommentHandler }) => {
    const [comment, setComment] = useState({
      article_id: 0,
      comment_content: "",
    });
    const { id, title, article_content, author, comments } = articleRec;

    const onChangeComment = (e, articleID) => {
      if (e.target.name === "comment_content") {
        setComment({
          ...comment,
          article_id: articleID,
          comment_content: e.target.value,
        });
      }
    };

    return (
      <div className="card col-4 cardmin">
        <div className="card-body">
          <button type="submit" onClick={() => onClickDeleteArticleHandler(id)}>
            Delete article
          </button>
          <h4 className="card-title"> {title} </h4>
          <span>{article_content}</span> <br />
          <h6>{author}</h6> <hr />
          <span>Ci-dessous Les commentaires : </span>
          <br />
          <br />
          {comments.map((comment) => {
            return <p> - {comment.comment_content}</p>;
          })}
          <br />
          <textarea
            onChange={(e) => {
              onChangeComment(e, id);
            }}
            className="form-control"
            value={comment.comment_content}
            name="comment_content"
            id="comment_content"
            rows="2"
            cols="20"
          ></textarea>
          <button
            type="submit"
            onClick={() => onClickAddCommentHandler(comment, setComment)}
          >
            Add comment
          </button>
        </div>
      </div>
    );
  }
);

export default ArticleDetail;
