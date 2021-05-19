import React, { useState } from "react";
import { Menu } from "./Menu";
import useArticleDataManager from "./useArticleDataManager";

const CreateArticle = () => {
  const { addArticle } = useArticleDataManager();

  const [article, setArticle] = useState({
    title: "",
    article_content: "",
    author: "",
  });

  const onChangeForm = (e) => {
    if (e.target.name === "title") {
      setArticle({ ...article, title: e.target.value });
    } else if (e.target.name === "content") {
      setArticle({ ...article, article_content: e.target.value });
    } else if (e.target.name === "author") {
      setArticle({ ...article, author: e.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addArticle(article);
  };

  return (
    <div>
      <Menu />

      <div className="container">
        <div className="row">
          <div className="col-md-7 mrgnbtm">
            <h2>Create Article</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="exampleInputEmail1">Tiitle</label>
                  <input
                    type="text"
                    onChange={(e) => onChangeForm(e)}
                    className="form-control"
                    name="title"
                    id="title"
                    aria-describedby="emailHelp"
                    placeholder="article title"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="exampleInputPassword1">Content</label>
                  <textarea
                    onChange={(e) => onChangeForm(e)}
                    className="form-control"
                    name="content"
                    id="content"
                    rows="5"
                    cols="33"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="exampleInputEmail1">Author</label>
                  <input
                    type="text"
                    onChange={(e) => onChangeForm(e)}
                    className="form-control"
                    name="author"
                    id="author"
                    aria-describedby="emailHelp"
                    placeholder="Author name"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-danger">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
