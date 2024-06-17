import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Arrow from "./Arrow";

function PostMedia({ imagesPath = [] }) {
  const [index, setIndex] = useState(0);
  const isSingle = imagesPath.length === 1;

  function nextPage() {
    setIndex((prev) => prev + 1);
  }

  function prevPage() {
    setIndex((prev) => prev - 1);
  }

  return (
    <div className="relative mb-4 flex aspect-square max-h-[500px] w-full cursor-pointer justify-center overflow-hidden rounded-2xl">
      <img
        src={imagesPath.at(index)}
        className="absolute -z-10 aspect-square size-full object-cover blur-3xl"
        alt=""
      />
      <img src={imagesPath.at(index)} alt="" className="object-contain" />

      {!isSingle && (
        <>
          <DotsContainer numDots={imagesPath.length} currentIndex={index} />
          {index !== 0 && (
            <a className="absolute left-7 top-1/2">
              <Arrow onClick={prevPage}>
                <FaChevronLeft />
              </Arrow>
            </a>
          )}
          {index != imagesPath.length - 1 && (
            <span className="absolute right-7 top-1/2">
              <Arrow onClick={nextPage}>
                <FaChevronRight />
              </Arrow>
            </span>
          )}
        </>
      )}
    </div>
  );
}

function DotsContainer({ numDots, currentIndex }) {
  return (
    <div className="absolute bottom-12 flex size-min items-center gap-1 rounded-full bg-black/65 p-1">
      {Array.from({ length: numDots }, (_, i) => (
        <span
          key={i}
          className={`size-[6px] rounded-full ${i === currentIndex ? "bg-white" : "bg-gray-600"}`}
        ></span>
      ))}
    </div>
  );
}

export default PostMedia;
