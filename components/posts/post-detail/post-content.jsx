import React from "react";
import classes from "./post-content.module.scss";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

PrismLight.registerLanguage("js", js);
PrismLight.registerLanguage("css", css);

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    p: (paragraph) => {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0].properties;
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code: (code) => {
      const { children } = code;
      return <PrismLight language="js" children={children} style={atomDark} />;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
