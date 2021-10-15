import React from "react";
import { Route, useParams, useRouteMatch, Switch } from "react-router-dom"; //dw added

import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

/*
  TODO: Update the below so that the components show on the appropriate route.

  The <NoPostSelectedMessage /> component should show up on the following route:
  /users/:userId/posts

  The <Post /> component should show up on the following route:
  /users/:userId/posts/:postId
*/

export const PostList = ({ posts }) => {

  let { path } = useRouteMatch() //dw added
  
  const postLinks = posts.map((post) => (
    <PostLink 
      key={post.id} 
      userId={post.userId}  //not needed?
      post={post} 
    />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">

        <Switch>
          <Route exact={true} path={`${path}`}>
            <NoPostSelectedMessage />
          </Route>
          <Route exact={true} path={`${path}/:postId`}>
            <Post posts={posts} />
          </Route>
        </Switch>

      </div>
    </div>
  );
};

export default PostList;
