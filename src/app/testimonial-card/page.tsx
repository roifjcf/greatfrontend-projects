import "./styles.css";
import { prefix } from "@/prefix";

const info = {
  name: "Sarah Dole",
  handle: "sarahdole",
  message: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  img: `${prefix}/testimonial-card/profile-thumbnail.png`,
};

export default function Page() {
  return (
  <main>
    <div className="testimonial-card-container">
      <div className="testimonial-card-container-top">
        <img className="icon" src={info.img} alt="profile-thumbnail" />
        <div className="testimonial-card-container-top-text">
          <p className="name">{info.name}</p>
          <p className="handle">{"@"+info.handle}</p>
        </div>
      </div>
      <p>
        {info.message}
      </p>
    </div>
  </main>
  );
}