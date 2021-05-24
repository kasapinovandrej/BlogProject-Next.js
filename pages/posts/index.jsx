import React from "react";
import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-next-js",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-next-js2",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-next-js3",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-next-js4",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
];

const AllPostsPage = () => {
  return (
    <div>
      <AllPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default AllPostsPage;
