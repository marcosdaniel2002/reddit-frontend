import FormRowSettingsAccount from "./FormRowSettingsAccount";
import Button from "../../../ui/Button";
import { useForm } from "react-hook-form";
import { useUpdateUserPassword } from "./useUpdateUserPassword";

function FormPassword() {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { isLoading, updateCurrentUserPassword } = useUpdateUserPassword();

  const { errors } = formState;

  function onSubmit(data) {
    const { password, newPassword, newPasswordConfirm } = data;
    console.log("HERE");
    updateCurrentUserPassword({ password, newPassword, newPasswordConfirm });
  }

  return (
    <div>
      <h3 className="spacing mb-6 text-xl font-semibold tracking-wider">
        PASSWORD CHANGE
      </h3>
      <form
        action=""
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRowSettingsAccount
          labelId="password"
          labelText="Current password"
          error={errors?.password?.message}
        >
          <input
            placeholder="••••••••"
            id="password"
            type="password"
            className="input-styled-account"
            {...register("password")}
          />
        </FormRowSettingsAccount>
        <FormRowSettingsAccount
          labelId="newPassword"
          labelText="New password"
          error={errors?.newPassword?.message}
        >
          <input
            placeholder="••••••••"
            id="newPassword"
            type="password"
            className="input-styled-account"
            {...register("newPassword", {
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </FormRowSettingsAccount>
        <FormRowSettingsAccount
          labelId="newPasswordConfirm"
          labelText="Confirm password"
          error={errors?.newPasswordConfirm?.message}
        >
          <input
            placeholder="••••••••"
            id="newPasswordConfirm"
            type="password"
            className="input-styled-account"
            {...register("newPasswordConfirm", {
              validate: (value) =>
                value === getValues().newPassword || "Passwords do not match",
            })}
          />
        </FormRowSettingsAccount>
        <div className="flex justify-end">
          <Button type="secondary" disabled={isLoading}>
            Save password
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormPassword;
