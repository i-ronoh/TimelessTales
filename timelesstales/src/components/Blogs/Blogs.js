import React, {useEffect, useState} from 'react';


function Blogs () {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/articles')
        .then((response) => response.json())
        .then((data) => {
            setBlogs(data);
        })
    }, []);

    return(
        <div className="container">
            {
                blogs.map((blog)=>(
                    <div className="row justify-content-md-center" style={{marginBottom: "3em", marginTop: "3em"}} key={blog.id}>
                        <div className="col-md-8">
                            <div className="card">
                                <img src={blog.image} className="card-img-top" alt="..."
                                    style={{height: "40em", width: "auto"}}
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