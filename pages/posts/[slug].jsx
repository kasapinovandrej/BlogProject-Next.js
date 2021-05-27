import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";
import Head from "next/head";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
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
