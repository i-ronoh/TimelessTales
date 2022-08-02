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
                    <div className="row testing justify-content-md-center" style={{marginBottom: "3em", marginTop: "3em"}}>
                        <div className="col-md-8">
                            <div class="card">
                                <img src={blog.image} class="card-img-top" alt="..."
                                    style={{height: "40em", width: "auto"}}
                                />
                                <div class="card-body">
                                    <h5 class="card-title">
                                        {blog.title}
                                    </h5>
                                    <p class="card-text">
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