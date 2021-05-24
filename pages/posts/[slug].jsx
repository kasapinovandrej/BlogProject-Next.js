import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />;
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((el) => el.replace(/\.md$/, ""));
  return {
    paths: slugs.map((el) => ({ params: { slug: el } })),
    fallback: false,
  };
};

export default PostDetailPage;
