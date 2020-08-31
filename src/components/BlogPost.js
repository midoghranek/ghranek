import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ content }) => {
  const [mark, setMark] = useState("");

  useEffect(() => {
    fetch(content)
      .then((res) => res.text())
      .then((text) => setMark(text));
  }, [content]);

  return (
    <div className="blog-post">
      <div className="inner">
        <ReactMarkdown source={mark} />
      </div>
    </div>
  );
};

export default BlogPost;
