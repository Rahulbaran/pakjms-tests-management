import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.document.title = "Home | PAKJMS Tests Management";
  }, []);

  return (
    <div className="home-wrapper">
      <h1>आपका स्वागत है 🙏</h1>
      <button className="btn btn-primary" onClick={() => navigate("/classes")}>
        <span>Check Classes</span>
        <span className="material-icons">arrow_forward</span>
      </button>
    </div>
  );
}
