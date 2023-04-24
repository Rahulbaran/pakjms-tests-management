import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Not Found");

  return (
    <div className="notfound-wrapper">
      <h1>Page not found</h1>
    </div>
  );
}
