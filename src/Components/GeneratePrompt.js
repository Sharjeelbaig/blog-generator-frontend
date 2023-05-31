import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateResponse } from "../redux/blog/actions";
import { getGeneratedPost } from "../redux/blog/selectors";
import "./GeneratePrompt.css";
import { Circles } from "react-loader-spinner";

function GeneratePrompt() {
  const [prompt, setPrompt] = useState("");
  const dispatch = useDispatch();
  const generatedPost = useSelector(getGeneratedPost);
  const [loading, setLoading] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await dispatch(generateResponse(prompt));
    } catch {
      console.log("error while fetching the api");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">Article/Blog Generator</h1>
        <div className="form-controls">
        <label className="label">
          tag:
          <input
            className="input"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>
        {loading ? (
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <button className="submit-button" type="submit">
            Submit
          </button>
        )}
        </div>
      </form>
      {generatedPost && (
        <div className="generated-posts">
          <h2>Generated Post:</h2>
          <div className="post">
            <h3 className="post-heading">{generatedPost.heading}</h3>
            <p className="post-body">{generatedPost.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GeneratePrompt;
