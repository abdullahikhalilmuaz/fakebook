import "../styles/Messages.css";
export default function Messages() {
  return (
    <div>
      <div className="message">
        <div className="header">
          <div className="name">User Name</div>
        </div>

        <div className="bubbles-wrapper">
          <div className="bubble-container">
            <span className="username">User name</span>
            <div className="bubble-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              quas sunt cupiditate voluptates porro totam repellat, ad molestiae
              numquam impedit iure corrupti aperiam quae voluptatibus eligendi
              laborum nulla corporis? Repellat!
            </div>
            <div className="bubble-actions">
              <span>+</span>
              <span>o</span>
              <span>-</span>
            </div>
          </div>

          <div className="bubble-container">
            <span className="username">User name</span>
            <div className="bubble-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              quas sunt cupiditate voluptates porro totam repellat, ad molestiae
              numquam impedit iure corrupti aperiam quae voluptatibus eligendi
              laborum nulla corporis? Repellat!
            </div>
            <div className="bubble-actions">
              <span>+</span>
              <span>o</span>
              <span>-</span>
            </div>
          </div>

          <div className="bubble-container">
            <span className="username">User name</span>
            <div className="bubble-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              quas sunt cupiditate voluptates porro totam repellat, ad molestiae
              numquam impedit iure corrupti aperiam quae voluptatibus eligendi
              laborum nulla corporis? Repellat!
            </div>
            <div className="bubble-actions">
              <span>+</span>
              <span>o</span>
              <span>-</span>
            </div>
          </div>

          <div className="bubble-container">
            <span className="username">User name</span>
            <div className="bubble-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              quas sunt cupiditate voluptates porro totam repellat, ad molestiae
              numquam impedit iure corrupti aperiam quae voluptatibus eligendi
              laborum nulla corporis? Repellat!
            </div>
            <div className="bubble-actions">
              <span>+</span>
              <span>o</span>
              <span>-</span>
            </div>
          </div>
        </div>

        <div className="post-message">
          <form>
            <input type="text" placeholder="Enter your message..." />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
