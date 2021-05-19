import React from "react";
import Home from "./Home";
import Articles from "./Articles";
import CreateArticle from "./CreateArticle";

const pageToShow = (pageName) => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Articles") return <Articles />;
  if (pageName === "CreateArticle") return <CreateArticle />;
  return <div>Not Found</div>;
};

const App = ({ pageName }) => {
  return <div>{pageToShow(pageName)}</div>;
};

export default App;
