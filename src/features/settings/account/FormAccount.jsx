import { server_path } from "../../../utils/utils";
import { useForm } from "react-hook-form";
import { useUser } from "../../authentication/useUser";

import FormRowSettingsAccount from "./FormRowSettingsAccount";
import Button from "../../../ui/Button";
import { useUpdateUser } from "./useUpdateUser";
import { useState } from "react";

function FormAccount() {
  const {
    user: { name, email, photo, username },
  } = useUser();
  const { register, handleSubmit } = useForm();
  const { isLoading, updateCurrentUser } = useUpdateUser();
  const [selectedImage, setSelectedImage] = useState(null);

  function handleImageChange(e) {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
    register("photo", { value: e.target.files[0], type: "file" });
  }

  function onSubmit(data) {
    const { name, username, email, photo } = data;
    const form = new FormData();
    form.append("name", name);
    form.append("username", username);
    form.append("email", email);
    form.append("photo", photo);
    updateCurrentUser(form);
  }

  return (
    <div>
      <h3 className="spacing mb-6 text-xl font-semibold tracking-wider">
        YOUR ACCOUNT SETTINGS
      </h3>
      <form
        action=""
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRowSettingsAccount labelId="name" labelText="Your name">
          <input
            id="name"
            type="text"
            className="input-styled-account"
            defaultValue={name}
            {...register("name")}
          />
        </FormRowSettingsAccount>
        <FormRowSettingsAccount labelId="username" labelText="Your username">
          <input
            id="username"
            type="text"
            className="input-styled-account"
            defaultValue={username}
            {...register("username")}
          />
        </FormRowSettingsAccount>
        <FormRowSettingsAccount labelId="email" labelText="Your email address">
          <input
            id="email"
            type="text"
            className="input-styled-account"
            defaultValue={email}
            {...register("email", {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRowSettingsAccount>
        <div className="flex items-center gap-4">
          <img
            src={selectedImage || `${server_path}/images/users/${photo}`}
            alt=""
            className="size-[75px] rounded-full"
          />
          <input
            type="file"
            accept="image/*"
            id="photo"
            className="hidden"
            onChange={handleImageChange}
          />
          <label
            htmlFor="photo"
            className="cursor-pointer rounded-sm border-b-2 border-primary p-1 font-semibold text-gray-600 transition-all hover:-translate-y-1 hover:bg-primary hover:text-white"
          >
            Choose a new photo
          </label>
        </div>
        <div className="flex justify-end">
          <Button type="secondary" disabled={isLoading}>
            Save settings
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormAccount;
