import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom"; //dw added useRouteMatch, useParams

/*
  TODO: Change the below to be a link that goes to the specific post route using the post id.
  dw completed
*/

export const PostLink = ({ post }) => {

  const {url} = useRouteMatch() //dw imported
  const postId = post.id //dw added to use in link

  return (
    <li className="list-group-item text-truncate">
      {/* <a>{post.title}</a> ORIGINAL */}
      <Link to={`${url}/${postId}`}>{post.title}</Link> 
    </li>
  );
};

export default PostLink;
