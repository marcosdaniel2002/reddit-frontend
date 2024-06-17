import MenuList from "./MenuList";
import { IoMdHome } from "react-icons/io";
import { FiTrendingUp } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import MenuSlide from "./MenuSlide";
import { FaPlus } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { IoLogoReddit } from "react-icons/io";
import { FaTripadvisor } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineTool } from "react-icons/ai";
import { PiMicrophoneStageLight } from "react-icons/pi";
import { MdContentCopy } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";
import { MdOutlineTopic } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { LuActivity } from "react-icons/lu";

function Menu() {
  return (
    <nav className="absolute -left-4 top-full z-30 h-[calc(100svh-65px)] min-w-[280px] overflow-y-scroll bg-white px-4 pt-4 lg:static lg:top-0 [&>ul]:py-1">
      <ul>
        <MenuList to="/">
          <IoMdHome />
          <span>Home</span>
        </MenuList>
        <MenuList>
          <FiTrendingUp />
          <span>Popular</span>
        </MenuList>
        <MenuList>
          <IoIosStats />
          <span>All</span>
        </MenuList>
      </ul>
      <hr />
      <ul>
        <MenuSlide
          list={
            <MenuList>
              <FaPlus />
              <span>Create a custom feed</span>
            </MenuList>
          }
        >
          CUSTOM FEEDS
        </MenuSlide>
      </ul>
      <hr />
      <ul>
        <MenuSlide
          list={
            <MenuList>
              <span className="size-8 rounded-full">
                <img className="" src="/Ask.png" alt="" />
              </span>
              <span>r/AskReddit</span>
            </MenuList>
          }
        >
          RECENT
        </MenuSlide>
      </ul>
      <hr />
      <ul>
        <MenuSlide
          list={
            <>
              <MenuList>
                <FaPlus />
                <span>Create a community</span>
              </MenuList>
              <MenuList>
                <div className="flex items-center gap-2">
                  <img className="size-8" src="/Reddit-logo2.png" alt="" />
                  <span>r/announcements</span>
                </div>
                <span className="flex size-8 items-center justify-center rounded-full hover:bg-neutral-200">
                  <CiStar className="size-5" />
                </span>
              </MenuList>
            </>
          }
        >
          COMMUNITIES
        </MenuSlide>
      </ul>
      <hr />
      <ul>
        <MenuSlide
          list={
            <>
              <MenuList>
                <IoLogoReddit />
                <span>About Reddit</span>
              </MenuList>
              <MenuList>
                <FaTripadvisor />
                <span>Advertise</span>
              </MenuList>
              <MenuList>
                <IoIosHelpCircleOutline />
                <span>Help</span>
              </MenuList>
              <MenuList>
                <IoBookOutline />
                <span>Blog</span>
              </MenuList>
              <MenuList>
                <AiOutlineTool />
                <span>Careers</span>
              </MenuList>
              <MenuList>
                <PiMicrophoneStageLight />
                <span>Press</span>
              </MenuList>
            </>
          }
        >
          RESOURCES
        </MenuSlide>
      </ul>
      <hr />
      <ul>
        <MenuList>
          <LuActivity />
          <span>Communities</span>
        </MenuList>
        <MenuList>
          <GiSandsOfTime />
          <span>Best of Reddit</span>
        </MenuList>
        <MenuList>
          <MdOutlineTopic />
          <span>Topics</span>
        </MenuList>
      </ul>
      <hr />
      <ul>
        <MenuList>
          <MdContentCopy />
          <span>Content Policy</span>
        </MenuList>
        <MenuList>
          <FaBalanceScale />
          <span>Privacy Policy</span>
        </MenuList>
        <MenuList>
          <FiUserCheck />
          <span>User Agreement</span>
        </MenuList>
      </ul>
    </nav>
  );
}

export default Menu;
