import "../styles/home.css";
export default function Home() {
  function handleUpload() {
    const formId = document.getElementById("upload-image");
    const file = document.createElement("input");
    file.type = "file";
    formId.appendChild(file);
    file.click();
  }

  function handleImage() {}
  return (
    <div className="home">
      <div className="profile">
        <div className="profile-top"></div>
        <div className="profile-bottom">
          <div className="profile-image">
            <div className="image">
              <form id="upload-image"></form>
            </div>
          </div>
          <div className="bio">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              quidem, cum earum error facilis labore nemo ratione facere est
              iure.
            </p>
          </div>
          <div className="action-buttons">
            <button>! Edit Profile</button>
            <button>! Edit Bio</button>
          </div>
        </div>
      </div>
    </div>
  );
}
