"use client";
import React, { useState } from "react";
import styles from "../styles/video.module.css";

const VideoPage = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const addComment = (comment) => {
    setComments([...comments, comment]);
    setCommentText("");
  };

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoSection}>
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/ibZYkjYiADQ?si=0_qXzp5ax3PFyswx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.commentSection}>
        <ul className={styles.commentList}>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <textarea
          className={StyleSheet.commentInput}
          placeholder="コメントを入力してください"
          rows="4"
          cols="50"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
      </div>
      <button onClick={() => addComment(commentText)}>コメントする</button>
    </div>
  );
};

export default VideoPage;
