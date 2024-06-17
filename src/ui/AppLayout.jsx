import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-svh grid-rows-[auto_1fr] overflow-hidden lg:grid-cols-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="overflow-y-scroll p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
