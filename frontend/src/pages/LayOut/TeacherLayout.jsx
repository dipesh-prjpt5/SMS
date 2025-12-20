import { Outlet } from "react-router-dom";
import Sidebar from "../Teachers/Sidebar";

const TeacherLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherLayout;
