import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <h1>आपका स्वागत है 🙏</h1>
      <button className="btn btn-primary" onClick={() => navigate("/classes")}>
        Go to Classes
      </button>
    </div>
  );
}
