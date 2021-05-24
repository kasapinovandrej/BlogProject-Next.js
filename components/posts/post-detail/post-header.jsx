import React from "react";
import Image from "next/image";
import classes from "./post-header.module.scss";

const PostHeader = (props) => {
  const { image, title } = props;
  return (
    <header className={classes.header}>
      <h1>{props.title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
