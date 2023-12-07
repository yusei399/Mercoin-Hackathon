"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CommentForm = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const addComment = (comment) => {
    setComments([...comments, comment]);
    setCommentText("");
  };

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <TextField
        label="コメントを入力してください"
        variant="outlined"
        fullWidth
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addComment}>
        コメントする
      </Button>
    </div>
  );
};

export default CommentForm;
