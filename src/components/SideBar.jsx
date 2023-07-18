import logo from "../picsvg_download.svg";
import Parallelogram from "./Parallelogram";
import { Mini_Parallelogram } from "./Mini_Parallelogram";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import img1 from "../images/sbimg.jpg";
import img2 from "../images/sbimg2.jpg";
import img3 from "../images/sbimg3.jpg";
import img4 from "../images/sbimg4.jpg";
import SearchBar from "./SearchBar";
function SideBar() {
  return (
    <div className="bg-black h-screen w-96 overflow-scroll overflow-x-hidden">
      <div className="flex flex-col justify-center ">
        <img className="h-[150px] mt-4" src={logo} alt="" />
        <div className="bg-gray-600 rounded-lg h-14 w-60 self-center mt-5">
          <Parallelogram className="mx-6 w-36 ">
            <BiSearchAlt size={30} />
          </Parallelogram>
        </div>
      </div>
      <ul className="flex mt-12  ml-14">
        <li>
          <Parallelogram bgColor="solid" className="h-10 p-3">
            <FiFacebook size={15} />
          </Parallelogram>
        </li>
        <li>
          <Parallelogram bgColor="solid" className="h-10 p-3">
            <FiTwitter size={15} />
          </Parallelogram>
        </li>
        <li>
          <Parallelogram bgColor="solid" className="h-10 p-3">
            <FiYoutube size={15} />
          </Parallelogram>
        </li>
        <li>
          <Parallelogram bgColor="solid" className="h-10 p-3">
            <FiInstagram size={15} />
          </Parallelogram>
        </li>
      </ul>

      <p className="text-white text-3xl ml-7 mt-16">
        <Mini_Parallelogram></Mini_Parallelogram> INSTAGRAM
      </p>

      <div className="mt-5 ml-5 grid grid-cols-2 grid-rows-2 gap-5 gap-x-0 mb-20">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
}

export { SideBar };
