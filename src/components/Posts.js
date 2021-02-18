import React from "react";
import "../styles/Posts.css";
import {Post} from "./Post"

export const Posts = () => {
    return (
        <div className="posts-container">
            
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};
