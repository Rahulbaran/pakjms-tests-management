import { Outlet } from "react-router-dom";

export default function ClassLayout() {
  return (
    <div className="class-wrapper">
      <Outlet />
    </div>
  );
}
