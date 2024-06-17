import { useUser } from "../features/authentication/useUser";
import { server_path } from "../utils/utils";

function User({ setIsModalUser }) {
  const { user } = useUser();

  return (
    <div
      className="size-11 cursor-pointer overflow-hidden rounded-full p-1 hover:bg-slate-200"
      onClick={() => setIsModalUser((show) => !show)}
    >
      <img
        className="rounded-full"
        alt=""
        src={`${server_path}/images/users/${user.photo}`}
      />
    </div>
  );
}

export default User;
