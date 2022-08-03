import React, { useEffect, useState } from "react";
import "./blog.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://cosmic-dark-result.glitch.me/articles")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="blog-container d-flex flex-wrap">
      {blogs.map((blog) => (
        <div
          className="row "
          style={{ marginBottom: "3em", marginTop: "3em" }}
          key={blog.id}
        >
          <div className="col-md-5 ">
            <div className="card flexx" style={{ width:"500px" }}>
              <img
                src={blog.image}
                className="card-img-top img-fluid"
                alt="..."
               // style={{ width: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.data}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
