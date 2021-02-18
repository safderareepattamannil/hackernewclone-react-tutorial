import React from "react";
import '../styles/Post.css'

export const Post = () => {
    return (
        <div className="post-container">
            <div className="top">
                <div className="rank">1.</div>
                <div className="upvote"></div>
                <div className="story-title">
                    <a href="https://www.colorcoder.dev/">
                        Learn React.js by Building Hacker News (Part
                        4) - Function vs Class Based Components 
                    </a>
                </div>
                <div className="url">(colorcoder.dev)</div>
            </div>
            <div className="bottom">
                225 points by Safder 2 hours ago | hide | 99 comments
            </div>
        </div>
    );
};
