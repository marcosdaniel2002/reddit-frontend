import { IoIosMore } from "react-icons/io";

import PostButton from "./PostButton";
import { GoComment } from "react-icons/go";
import { FcReddit } from "react-icons/fc";
import { IoShareOutline } from "react-icons/io5";
import ButtonRounded from "./ButtonRounded";
import PostMedia from "./PostMedia";
import { server_path } from "../utils/utils";

function Post({ post }) {
  const ago = new Date(post.createdAt);
  const now = new Date();
  const diff = now - ago;

  const time_ago = () => {
    if (diff < 1000) {
      return "Just now";
    }
    if (diff < 60000) {
      return `${Math.floor(diff / 1000)} seconds ago`;
    }
    if (diff < 3600000) {
      return `${Math.floor(diff / 60000)} minutes ago`;
    }
    if (diff < 86400000) {
      return `${Math.floor(diff / 3600000)} hours ago`;
    }
    if (diff < 2678400000) {
      return `${Math.floor(diff / 86400000)} days ago`;
    }
    return `${Math.floor(diff / 2678400000)} months ago`;
  };

  return (
    <>
      <article className="-z-20 mx-auto mb-3 max-w-[540px] px-4">
        <div className="my-1 flex justify-between pt-4 text-xs">
          <div className="flex min-h-8 flex-wrap items-center gap-1.5">
            <a
              href=""
              className="group flex items-center gap-1 px-0.5 py-1 font-semibold"
            >
              <img
                src={`${server_path}/images/users/${post.user.photo}`}
                alt={`${post.user.usermame} profile picture`}
                className="size-8 rounded-full"
              />
              <span className="group-hover:text-blue-950">
                u/{post.user.username}
              </span>
            </a>
            <span className="size-[3px] rounded-full bg-gray-600"></span>
            <time className="text-gray-600">{time_ago()}</time>
            <span className="size-[3px] rounded-full bg-gray-600"></span>
            <p className="text-gray-600">Popular on Reddit now</p>
          </div>
          <div className="flex items-center gap-1 pl-2">
            <button className="h-6 rounded-full bg-blue-800 px-[11px] font-semibold text-white">
              Join
            </button>
            <button className="flex size-8 items-center justify-center rounded-full px-1.5 hover:bg-gray-300 [&>svg]:text-base">
              <IoIosMore />
            </button>
          </div>
        </div>
        <h3 className="mb-1 block text-base font-semibold text-stone-800 sm:text-lg">
          {post.title}
        </h3>
        <p className="my-3">{post.body}</p>
        <PostMedia
          imagesPath={post.photos.map(
            (photo) => `${server_path}/images/posts/${photo}`,
          )}
        />
        <div className="flex items-center gap-3">
          <div className="flex h-8 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold [&_svg]:size-5">
            <ButtonRounded />
            <span>5K</span>
            <ButtonRounded type="dislike" />
          </div>
          <PostButton>
            <GoComment />
            <span>217</span>
          </PostButton>
          <PostButton>
            <FcReddit />
            <span>1</span>
          </PostButton>
          <PostButton>
            <IoShareOutline />
            <span>Share</span>
          </PostButton>
        </div>
      </article>
      <hr />
    </>
  );
}

export default Post;
