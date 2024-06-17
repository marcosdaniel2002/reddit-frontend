import { useSearchParams } from "react-router-dom";

import PostImage from "./PostImage";
import PostNav from "./PostNav";
import PostText from "./PostText";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useCreatePost } from "./useCreatePost";

function Post() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm();
  const { createPost, isLoading } = useCreatePost();

  const type = searchParams.get("type");

  function onSubmit(data) {
    const { title, body, photos } = data;

    const form = new FormData();
    form.append("title", title);
    form.append("body", body);
    Array.from(photos).forEach((photo) => form.append("photos", photo));

    createPost(form);
  }

  return (
    <div className="max-w-[750px]">
      <h2 className="my-2 text-2xl font-bold">Create post</h2>
      <PostNav type={type} setSearchParams={setSearchParams} />
      <form
        action=""
        className="mt-2 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative">
          <input
            required
            type="text"
            className="peer min-w-[340px] rounded-full border-[1.5px] border-gray-300 px-4 pb-2 pt-5 outline-none"
            id="title"
            {...register("title", {
              required: { value: true, message: "This field is required!" },
            })}
          />
          <label
            htmlFor=""
            className="absolute left-4 top-4 text-base text-gray-500 transition-all peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm"
          >
            Title
          </label>
        </div>
        <PostText isHidden={type != "TEXT"} register={register} />
        <PostImage isHidden={type != "IMAGE"} register={register} />
        <div className="flex justify-end gap-3">
          <Button disabled={true} type="secondary">
            Save draft
          </Button>
          <Button type="secondary">Post</Button>
        </div>
      </form>
    </div>
  );
}

export default Post;

// peer-valid:text-black peer-focus:text-black
