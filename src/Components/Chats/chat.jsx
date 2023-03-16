import React from "react";
import "./realchat.css";
import { Avatar, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";


function Chat() {
  return (
    <div className="chat_Container" >
      <div className="chat_header">
        <Avatar />
        <div className="chat_header_info">
          <h3 id="chat_head"></h3>
        </div>
      </div>

      <div className="chat_body"></div>
      <div className="chat_footer">
          <input type="text"
           id="send1"
            placeholder="Type a message" 
            />
          <input
            type="file"
            id="send2"
            style={{ display: "none" }}
          />
          <IconButton color="primary">
            <label htmlFor="send2">
              <AttachFileIcon />
            </label>
          </IconButton>
          <Button variant="contained"
           type="submit"
           endIcon={<SendIcon />} >
            Send
          </Button>
      </div>
    </div>
  );
}

export default Chat;

