import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async () => {
    alert("Submited");
  };
  const handleOnChange = (e) => {
    setArticle({ ...article, url: e.target.value });
  };
  return (
    <section className="mt-16 w-full max-2-xl">
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
          <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />
          <input
            type="url"
            placeholder="Enter an URL"
            value={article.url}
            onChange={handleOnChange}
            required
            className="url_input peer"
          />
          <button type="submit" className="submit_btn">
            🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
