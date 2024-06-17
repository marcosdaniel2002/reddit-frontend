import FormAccount from "./FormAccount";
import FormPassword from "./FormPassword";

function Account() {
  return (
    <div className="mx-auto mb-5 max-w-[450px] p-5 pt-10">
      <FormAccount />
      <hr className="my-10" />
      <FormPassword />
    </div>
  );
}

export default Account;
