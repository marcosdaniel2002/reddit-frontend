import { useEffect } from "react";
import ReactDom from "react-dom";
import { blockScreen } from "../utils/utils";

function ModalDark() {
  useEffect(function () {
    blockScreen(true);
    return () => blockScreen(false);
  }, []);

  return ReactDom.createPortal(
    <div className="absolute top-[65px] z-20 h-[calc(100svh-65px)] w-svw overflow-hidden bg-black opacity-50"></div>,
    document.getElementById("portal"),
  );
}

export default ModalDark;
