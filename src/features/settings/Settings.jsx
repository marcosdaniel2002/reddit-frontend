import { Outlet } from "react-router-dom";
import SettingsNav from "./SettingsNav";

function Settings() {
  return (
    <div>
      <SettingsNav />
      <Outlet />
    </div>
  );
}

export default Settings;
