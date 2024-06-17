import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

import PostMedia from "../../ui/PostMedia";

function PostImage({ isHidden, register }) {
  const [images, setImages] = useState([]);

  const thereAreImages = images.length > 0;

  function handleImageChange(e) {
    setImages((prev) => [...prev, ...e.target.files]);
    register("photos", { value: e.target.files, type: "file" });
  }

  if (thereAreImages) {
    const imagesURL = images.map((image) => URL.createObjectURL(image));
    return (
      <div className={`${isHidden && "hidden"}`}>
        <PostMedia imagesPath={imagesURL} />
      </div>
    );
  }

  return (
    <div
      className={`${isHidden && "hidden"} flex min-h-[min(20vw,150px)] w-full items-center justify-center rounded-lg border-[1.5px] border-dashed border-gray-300`}
    >
      <div className="flex items-center gap-2">
        <span>Drag and Drop images or videos or</span>
        <label
          htmlFor="photos"
          className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-gray-300 [&>svg]:size-5"
        >
          <IoCloudUploadOutline />
        </label>
        <input
          type="file"
          multiple
          className="hidden"
          id="photos"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}

export default PostImage;
