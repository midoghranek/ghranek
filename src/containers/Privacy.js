import React from "react";
import privacyMD from "../posts/privacy.md";
import BlogPost from "../components/BlogPost";

const Privacy = () => {
  return <BlogPost content={privacyMD} />;
};

export default Privacy;
