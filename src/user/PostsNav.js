import React from "react";
import { Link } from "react-router-dom"; //dw added 

// TODO: Change the link below to go back to the home page.
//dw completed

export const PostsNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        {/* <a className="btn btn-link">Go Home</a> ORIGINAL */}
        <Link to="/" className="btn btn-link">Go Home</Link>
      </li>
    </ol>
  </nav>
);

export default PostsNav;
