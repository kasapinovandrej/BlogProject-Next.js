import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";

const AllPostsPage = (props) => {
  return (
    <div>
      <AllPosts posts={props.posts} />
    </div>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
