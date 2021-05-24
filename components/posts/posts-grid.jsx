import React from "react";
import PostItem from "./post-item";
import classes from "./posts-grid.module.scss";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((el) => (
        <PostItem key={el.slug} post={el} />
      ))}
    </ul>
  );
};

export default PostsGrid;
