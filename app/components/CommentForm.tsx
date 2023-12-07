"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import "../styles/CommentForm.css";

const CommentForm = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  const [superChatAmount, setSuperChatAmount] = useState<string>("");
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [comments]);

  const addComment = (comment: string) => {
    setComments([...comments, comment]);
    setCommentText("");
  };
  const sendSuperChat = (amount: number) => {
    setComments([...comments, `${amount}円のスーパーチャット`]);
    setSuperChatAmount("");
    console.log("スーパーチャットを送信しました");
  };

  return (
    <div className="comment-container">
      <Box sx={{ width: 400 }}>
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
          sx={{
            "--ListItemDecorator-size": "56px",
            maxHeight: "430px",
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
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
        <IconButton
          className="super-chat-button"
          color="primary"
          onClick={() => addComment(commentText)}
        >
          <SendIcon />
        </IconButton>
      </div>
      <div className="superchat-form">
        <TextField
          className="superchat-input"
          label="金額を入力"
          variant="outlined"
          fullWidth
          value={superChatAmount}
          onChange={(e) => setSuperChatAmount(e.target.value)}
        />
        <IconButton
          className="superchat-button"
          color="primary"
          onClick={() => sendSuperChat(superChatAmount)}
        >
          <CurrencyYenIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CommentForm;
