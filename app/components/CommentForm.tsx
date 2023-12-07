"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import "../styles/CommentForm.css";

const CommentForm = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  const addComment = (comment: string) => {
    setComments([...comments, comment]);
    setCommentText("");
  };

  return (
    <div className="comment-container">
      <Box sx={{ width: 320 }}>
        <Typography
          id="ellipsis-list-demo"
          level="body-xs"
          textTransform="uppercase"
          sx={{ letterSpacing: "0.15rem" }}
        >
          チャット欄
        </Typography>
        <List
          className="comment-list"
          aria-labelledby="ellipsis-list-demo"
          sx={{ "--ListItemDecorator-size": "56px" }}
        >
          {comments.map((comment, index) => (
            <ListItem key={index} className="comment-list-item">
              <ListItemDecorator>
                <Avatar src="" />
              </ListItemDecorator>
              <ListItemContent>
                <Typography level="user-name">じみー</Typography>
                <Typography level="body-sm" noWrap>
                  {comment}
                </Typography>
              </ListItemContent>
            </ListItem>
          ))}
        </List>
      </Box>
      <div className="comment-form">
        <TextField
          className="comment-input"
          label="コメントを入力してください"
          variant="outlined"
          fullWidth
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Button
          className="comment-button"
          variant="contained"
          color="primary"
          onClick={() => addComment(commentText)}
        >
          送信
        </Button>
      </div>
    </div>
  );
};

export default CommentForm;
