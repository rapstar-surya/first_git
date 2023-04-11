import React, { useState, useEffect } from 'react';
import './PostsTable.css'; 

const PostsTable = () => {
    const [posts, setPosts] = useState([]);

    // Fetch posts from API on component mount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
            .catch(error => console.error(error));
    }, []);

    // Delete post locally and update state
    const handleRemovePost = (postId) => {
        setPosts(posts => posts.filter(post => post.id !== postId));
    };

    return (
        <table className="posts-table"> 
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                            <span
                                className="remove-btn" 
                                onClick={() => handleRemovePost(post.id)}
                            >
                                ❌
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PostsTable;
