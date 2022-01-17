import React, { useState } from "react";
import About from "./stylePractice/about";
import Blog from "./stylePractice/blog";
import Product from "./stylePractice/product";

const ContentsContainer = ({ listName }) => {
  if (listName === "about") {
    return <About />;
  } else if (listName === "blog") {
    return <Blog />;
  } else if (listName === "product") {
    return <Product />;
  }
};

function NavBar() {
  const [listName, setListName] = useState("about");
  const checkId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="about"
            style={
              listName === "about" ? { color: "red" } : { color: "black" }
            }
            onClick={checkId}
          >
            about
          </li>
          <li
            id="blog"
            onClick={checkId}
            style={listName === "blog" ? { color: "red" } : { color: "black" }}
          >
            blog
          </li>
          <li
            id="product"
            onClick={checkId}
            style={
              listName === "product" ? { color: "red" } : { color: "black" }
            }
          >
            product
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}

export default NavBar;