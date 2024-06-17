import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Icon() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 960);

  const updateMedia = function () {
    setDesktop(window.innerWidth > 960);
  };

  useEffect(function () {
    window.addEventListener("resize", updateMedia);

    return function () {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  return (
    <Link to="/" className="">
      {isDesktop ? (
        <img className="w-[115.9px]" src="/Reddit-logo.png" alt="" />
      ) : (
        <img className="h-10" src="/Reddit-logo2.png" alt="" />
      )}
    </Link>
  );
}

export default Icon;
