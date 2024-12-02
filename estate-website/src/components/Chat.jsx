import { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="message">
          <img
            src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            sequi...
          </p>
        </div>
        <div className="message">
          <img
            src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,</p>
        </div>
        <div className="message">
          <img
            src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum</p>
        </div>
        <div className="message">
          <img
            src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            sequi...
          </p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur a</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum...
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet Cum</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum...
              </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
