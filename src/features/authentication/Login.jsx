import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import FormRow from "../../ui/FormRow";
import { useState } from "react";
import SignupModal from "./SignupModal";

function Login() {
  const [signupModal, setSignupModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const { login, isLoading } = useLogin();

  function onSubmit(data) {
    const { email, password } = data;
    if (!email || !password) return;
    login({ email, password });
  }

  function onModal() {
    setSignupModal((prev) => !prev);
  }

  return (
    <>
      <div className="flex h-svh justify-center p-5">
        <div className="flex max-w-96 flex-col justify-center gap-4">
          <img src="./login_image.png" alt="" className="object-scale-down" />
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <FormRow labelId="email" labelText="Email address">
              <input
                className="input-styled peer"
                required
                id="email"
                type="text"
                {...register("email")}
              />
            </FormRow>
            <FormRow labelId="password" labelText="Password">
              <input
                className="input-styled peer"
                required
                id="password"
                type="password"
                {...register("password")}
              />
            </FormRow>
            <div className="self-end">
              <Button type="primary" disabled={isLoading}>
                Log in
              </Button>
            </div>
          </form>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">
              Don't have an account? Register one now!
            </span>
            <Button type="secondary" onClick={onModal}>
              Sign up
            </Button>
          </div>
        </div>
      </div>
      {signupModal && <SignupModal onModal={onModal} />}
    </>
  );
}

export default Login;
