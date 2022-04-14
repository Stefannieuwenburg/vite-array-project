import React, { useState, useEffect } from "react";

import "../App.css";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const postsData = await response.json();
            console.log(postsData);
            setPosts(postsData);
        };
        fetchPosts();
    }, []);

    const usePosts = posts.map((post) => {
        return (
            <div className="axioscontainer" key={post.id}>
                <h3>{post.id}</h3>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        );
    });

    return (
        <div>
            <h1>Fetch API With UseState and UseEffect</h1>
            <div >{usePosts}</div>
        </div>
    );
}

export default Posts;
