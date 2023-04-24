import { useNavigate } from "react-router-dom";

/* Custom Hooks */
import usePageTitle from "../../hooks/usePageTitle";

export default function Home() {
  const navigate = useNavigate();
  usePageTitle("Home | PAKJMS Tests Management");

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
