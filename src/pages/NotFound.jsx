import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    window.document.title = "Not Found";
  }, []);

  return (
    <div className="notfound-wrapper">
      <h1>Page not found</h1>
    </div>
  );
}
