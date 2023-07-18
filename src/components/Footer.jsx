import logo from "../picsvg_download.svg";
import { Sidebar_Parallelogram } from "./Sidebar-Parallelogram";
import { Mini_Parallelogram } from "./Mini_Parallelogram";
import footer1 from "../images/footer1.jpg";
import footer2 from "../images/footer2.jpg";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import Parallelogram from "./Parallelogram";

function Footer() {
  return (
    <footer className="flex flex-col flex-wrap  border-gray-500">
      <div className="bg-black border-b-2 w-screen space-y-10 sm:space-y-0 p-4 flex flex-col md:flex-row justify-center">
        <div className="flex justify-center flex-col items-center">
          <img className="h-28" src={logo} alt="" />
          <p className="mt-5 max-w-sm text-gray-300 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua lacus vel
            facilisis.
          </p>
          <div className="flex mt-5">
            <Sidebar_Parallelogram>
              <FiFacebook size={15} />
            </Sidebar_Parallelogram>

            <Sidebar_Parallelogram>
              <FiTwitter size={15} />
            </Sidebar_Parallelogram>

            <Sidebar_Parallelogram>
              <FiYoutube size={15} />
            </Sidebar_Parallelogram>

            <Sidebar_Parallelogram>
              <FiInstagram size={15} />
            </Sidebar_Parallelogram>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <h1 className="text-gray-300 text-3xl p-4 italic">
            <Mini_Parallelogram></Mini_Parallelogram> Editors Choice
          </h1>
          <div className="grid grid-rows-2 mt-3 gap-4">
            <div className="flex max-w-sm">
              <img src={footer1} alt="" />

              <span className="flex flex-col">
                <p className="text-white ml-4 max-w-sm text-sm">
                  A MONSTER PROM POSTER GOT HIJACKED FOR A PAPA ROACH CONCERT...
                </p>
                <p className="text-gray-600 ml-4 italic text-xs">
                  {" "}
                  Aug 01, 2019
                </p>
              </span>
            </div>
            <div className="flex max-w-sm">
              <img src={footer2} alt="" />
              <span>
                <p className="text-white ml-4 max-w-sm text-sm">
                  FACEBOOK WANTS TO READ YOUR THOUGHTS WITH ITS AUGMENTED...
                </p>
                <p className="text-gray-600 ml-4 italic text-xs">
                  Aug 01, 2019
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <h1 className="text-gray-300 text-3xl p-4 italic">
            <Mini_Parallelogram></Mini_Parallelogram> TAGS CLOUD
          </h1>
          <div className="grid grid-cols-3 grid-rows-3 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-3">
            <Parallelogram bgColor="solid">
              <p>Gaming</p>
            </Parallelogram>
            <Parallelogram bgColor="solid">
              <p>Platform</p>
            </Parallelogram>
            <Parallelogram bgColor="solid">
              <p>PlayStation</p>
            </Parallelogram>
            <Parallelogram bgColor="solid">
              <p>Hardwere</p>
            </Parallelogram>
            <Parallelogram bgColor="solid">
              <p>Reviews</p>
            </Parallelogram>
            <Parallelogram bgColor="solid">
              <p>Simulation</p>
            </Parallelogram>
            <Parallelogram bgColor="solid">
              <p>Strategy</p>
            </Parallelogram>
            <Parallelogram bgColor="solid">
              <p>Scientific</p>
            </Parallelogram>
            <Parallelogram bgColor="solid">
              <p>Refrences</p>
            </Parallelogram>
            <Parallelogram bgColor="solid">
              <p>Role Playing</p>
            </Parallelogram>
            <Parallelogram bgColor="solid">
              <p>Advantures</p>
            </Parallelogram>
          </div>
        </div>
      </div>

      <div className="h-12 text-gray-300 bg-black flex justify-around items-center flex-col sm:flex-row space-y-4 sm:space-y-0 py-12 px-8 text-center">
        <p>Copyright ©2023 All rights reserved | Made by Team4</p>
        <div className="flex justify-between px-4 mx-4">
          <a className="mx-2" href="#">
            About
          </a>
          <a className="mx-2" href="#">
            Subscribe
          </a>
          <a className="mx-2" href="#">
            Contact
          </a>
          <a className="mx-2" href="#">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
