import SettingsList from "./SettingsList";

function SettingsNav() {
  return (
    <nav className="border-b-[1px] border-gray-300 px-5">
      <ul className="flex flex-wrap gap-2">
        <SettingsList to={"/settings/account"}>Account</SettingsList>
        <SettingsList to={"/settings/privacy"}>Safety & Privacy</SettingsList>
        <SettingsList to={"/settings/feed"}>Feed Settings</SettingsList>
        <SettingsList to={"/settings/notifications"}>
          Notifications
        </SettingsList>
        <SettingsList to={"/settings/emails"}>Emails</SettingsList>
        <SettingsList to={"/settings/premium"}>Subscriptions</SettingsList>
        <SettingsList to={"/settings/messaging"}>Chat & Messaging</SettingsList>
      </ul>
    </nav>
  );
}

export default SettingsNav;
