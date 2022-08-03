import React, {useEffect, useState} from 'react';
import "./blog.css"

function Blogs () {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('https://cosmic-dark-result.glitch.me/articles')
        .then((response) => response.json())
        .then((data) => {
            setBlogs(data);
            console.log(data);
        })
    }, []);

    return(
        <div className="blog-container">
            {
                blogs.map((blog)=>(
                    <div className="row" style={{marginBottom: "3em", marginTop: "3em"}} key={blog.id}>
                        <div className="col-md-5">
                            <div className="card">
                                <img src={blog.image} className="card-img-top" alt="..."
                                    
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {blog.title}
                                    </h5>
                                    <p className="card-text">
                                        S{blog.data}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
       </div>
    )
}

export default Blogs;