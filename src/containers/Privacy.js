import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import privacyMD from "../posts/privacy.md";

const Privacy = () => {
  const [mark, setMark] = useState("");

  useEffect(() => {
    fetch(privacyMD)
      .then((res) => res.text())
      .then((text) => setMark(text));
  }, []);

  return (
    <div className="blog-post">
      <div className="inner">
        <ReactMarkdown source={mark} />
      </div>
    </div>
  );
};

export default Privacy;
