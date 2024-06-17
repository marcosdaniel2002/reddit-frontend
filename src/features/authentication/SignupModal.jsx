import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useSignup } from "./useSignup";

function SignupModal({ onModal }) {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  function onSubmit(data) {
    signup(data, { onSuccess: onModal });
  }

  return (
    <div className="fixed top-0 flex h-svh w-svw items-center justify-center bg-black/50">
      <div className="w-[360px] rounded-sm bg-white p-8">
        <h2 className="spacing mb-6 text-xl font-bold">Create your account</h2>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <FormRow
            labelId="name"
            labelText="Your name"
            error={errors?.name?.message}
          >
            <input
              className="input-styled peer"
              required
              id="name"
              type="text"
              {...register("name", { required: "This field is required" })}
            />
          </FormRow>
          <FormRow
            labelId="username"
            labelText="Username"
            error={errors?.name?.message}
          >
            <input
              className="input-styled peer"
              required
              id="username"
              type="text"
              {...register("username", { required: "This field is required" })}
            />
          </FormRow>
          <FormRow
            labelId="emailSign"
            labelText="Email address"
            error={errors?.email?.message}
          >
            <input
              className="input-styled peer"
              required
              id="emailSign"
              type="text"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </FormRow>
          <FormRow
            labelId="passwordSign"
            labelText="Password"
            error={errors?.password?.message}
          >
            <input
              className="input-styled peer"
              required
              id="passwordSign"
              type="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />
          </FormRow>
          <FormRow
            labelId="passwordConfirm"
            labelText="Password confirm"
            error={errors?.passwordConfirm?.message}
          >
            <input
              className="input-styled peer"
              required
              id="passwordConfirm"
              type="password"
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
            />
          </FormRow>
          <div className="flex gap-2">
            <input id="terms" type="checkbox" />
            <label htmlFor="terms" className="text-gray-500">
              I accept all terms & conditions
            </label>
          </div>
          <Button type="secondary" disabled={isLoading}>
            Register Now
          </Button>
        </form>
        <div className="pt-5 text-center">
          <span>
            Already have an account?{" "}
            <a className="cursor-pointer text-blue-500" onClick={onModal}>
              Login now
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
