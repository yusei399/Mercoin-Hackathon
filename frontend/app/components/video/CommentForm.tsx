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
import "../../styles/CommentForm.css";
import { MenuItem, Select } from "@mui/material";
import { useMetaMask } from "@/app/context/MetaMaskContextProvider";
import Link from "next/link";

const CommentForm = () => {
  const [comments, setComments] = useState<
    Array<{ text: string; amount?: number }>
  >([]);
  const [commentText, setCommentText] = useState<string>("");
  const [superChatAmount, setSuperChatAmount] = useState<string>("");
  const { metaMaskAddress, isLoggedIn } = useMetaMask();
  const [metaMaskBalance, setMetaMaskBalance] = useState<number>(5000);
  const [sentiment, setSentiment] = useState('');
  const [model, setModel] = useState("text-davinci-002");

  const analyzeCommentSentiment = async (comment) => {
    const apiKey = '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'; 
    const URL = "https://api.openai.com/v1/engines/" + model + "/completions";
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: `次の文章はポジティブですか、ネガティブですか？\n\n「${comment}」\n\n答え: `,
          max_tokens: 60,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('感情分析エラー:', error);
    }
  };

  const addComment = (comment: string) => {
    analyzeCommentSentiment(comment);
    setComments([...comments, { text: comment }]);
    setCommentText("");
  };

  const superChatRefundRate = 0.01;
  const sendSuperChat = (amount: number) => {
    setComments([
      ...comments,
      { text: `${amount}円のスーパーチャット`, amount },
    ]);
    let newBalance = metaMaskBalance + amount * 0.01;
    setMetaMaskBalance(newBalance);
    // if (isLoggedIn) {
    //   executeMint(amount * superChatRefundRate, metaMaskAddress);
    //   console.log("スーパーチャットを送信しました");
    // }
    setSuperChatAmount("");
  };

  const getCommentStyle = (amount?: number) => {
    if (!amount) return {}; // 通常のコメントの場合、特別なスタイルは適用しない

    // 金額に応じた背景色を返す
    if (amount <= 1000) return { backgroundColor: "lightblue" };
    if (amount <= 5000) return { backgroundColor: "lightgreen" };
    return { backgroundColor: "lightcoral" };
  };

  const handleSuperChatChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setSuperChatAmount(event.target.value as string);
  };

  return (
    <div className="comment-container">
      <Box sx={{ width: 400 }}>
        <Typography
          id="ellipsis-list-demo"
          level="body-xs"
          textTransform="uppercase"
          sx={{ letterSpacing: "0.15rem" }}
          fontSize={17}
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
            <ListItem
              key={index}
              className="comment-list-item"
              style={getCommentStyle(comment.amount)}
            >
              <ListItemDecorator>
                <Avatar src="" />
              </ListItemDecorator>
              <ListItemContent>
                <Typography fontSize={10}>じみー</Typography>
                <Typography level="body-sm" noWrap fontSize={15}>
                  {comment.text}
                  {sentiment && <p>感情: {sentiment}</p>}
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
        <Select
          className="superchat-input"
          label="金額を選択"
          value={superChatAmount}
          onChange={handleSuperChatChange}
          displayEmpty
          fullWidth
          variant="outlined"
        >
          <MenuItem value="">
            <em>¥金額を選択</em>
          </MenuItem>
          <MenuItem value={"500"}>500円</MenuItem>
          <MenuItem value={"1000"}>1000円</MenuItem>
          <MenuItem value={"3000"}>3000円</MenuItem>
          <MenuItem value={"5000"}>5000円</MenuItem>
          <MenuItem value={"10000"}>10000円</MenuItem>
        </Select>
        <IconButton
          className="superchat-button"
          color="primary"
          onClick={() => sendSuperChat(parseInt(superChatAmount))}
        >
          <CurrencyYenIcon />
        </IconButton>
      </div>
      <div
        className="metamask-info"
        style={{
          backgroundColor: "#f0f0f0",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "330px",
          margin: "150px 50px 0 0",
        }}
      >
        <p
          style={{
            margin: "5px 0",
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
          }}
        >
          Wallet
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p
            style={{ margin: "10px 0 5px 0", fontSize: "16px", color: "#333" }}
          >
            トークン残高: {metaMaskBalance} MRC
          </p>
          <Link href="/pages/user" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ marginTop: "5px", marginLeft: "13px" }}
            >
              Tokenを管理
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
