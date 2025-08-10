import { Link } from "react-router-dom";
import "./NoPage.css";

function NoPage() {
  return (
    <Link to="/" className="button">
      This ain't a real page dummy
    </Link>
  );
}

export default NoPage;
