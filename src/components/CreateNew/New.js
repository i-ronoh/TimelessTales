import React, {useMemo, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./new.css"

const New = () =>{

    const [blog, setBlog] = useState({title: "", author: "", data: ""});

    const navigate = useNavigate();

    const onFieldsChange = (fieldName, value)=>{
        setBlog({
            ...blog,
            [fieldName]: value
        });
    }

    const postBlog = (e)=>{
        blog.image = "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
        blog.author = "";
        blog.dateCreated = Date.now();
        let requestBody = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }
        fetch("https://timeless-tale.herokuapp.com/articles", requestBody)
            .then(response => response.json())
            .then(data => {
                // do the redirect here here.
                navigate('/blogs');
            }).catch((err)=>{
                console.log(err);
            });
    }


    // returns whether the subit button should be active
    const submitButtonActive = useMemo(()=>(
        blog.title.trim().length !== 0 && blog.data.trim().length !== 0
    ), [blog]);


    return (
        <>
        <div className="new-head">
            <h3 className="new-title">NEW POST</h3>
        </div>
        <div className="container">
            <div className="row" style={{marginTop: "5em"}}>
                <div className="col-md-9 shadow p-5 mb-5 bg-body rounded">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Author</label>
                        <input type="title" className="form-control" id="exampleFormControlInput1"
                            onChange = {(event)=>{
                                onFieldsChange("author", event.target.value)
                            }}
                        />
    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input type="title" className="form-control" id="exampleFormControlInput1"
                            onChange = {(event)=>{
                                onFieldsChange("title", event.target.value)
                            }}
                        />
    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Blog Entry</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                            onChange = {(event)=>{
                                onFieldsChange("data", event.target.value)
                            }}
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mb-3" disabled={!submitButtonActive}
                            onClick={postBlog}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default New