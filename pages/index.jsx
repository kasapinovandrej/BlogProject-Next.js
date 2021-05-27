import React from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../helpers/posts-util";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Andrej's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development!"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: { posts: featuredPosts },
  };
};

export default HomePage;
