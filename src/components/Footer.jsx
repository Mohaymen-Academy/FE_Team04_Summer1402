import logo from "../picsvg_download.svg";
import { Sidebar_Parallelogram } from "./Sidebar-Parallelogram";
import { Mini_Parallelogram } from "./Mini_Parallelogram";
import { FooterGameCards } from "./FooterGameCards";
import footer1 from "../images/footer1.jpg";
import footer2 from "../images/footer2.jpg";
import    {FiFacebook, FiInstagram, FiYoutube}from "react-icons/fi";
import    {FiTwitter} from "react-icons/fi";


function Footer() {
  return (
    <>
      <div className="flex flex-col border-b-2 border-gray-500">
    <div className="bg-black w-screen h-96 grid grid-cols-3 ">

      <div className="flex justify-center flex-col">
        <img className="h-28" src={logo} alt="" />
        <p className="ml-20 mt-5 max-w-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lacus vel facilisis.</p>
        <div className="flex ml-20 mt-5">
          <Sidebar_Parallelogram>
          <FiFacebook size={15}/>
          </Sidebar_Parallelogram>

        <Sidebar_Parallelogram>
          <FiTwitter size={15}/>
        </Sidebar_Parallelogram>

        <Sidebar_Parallelogram>
          <FiYoutube size={15}/>
        </Sidebar_Parallelogram>

        <Sidebar_Parallelogram>
          <FiInstagram size={15}/>
        </Sidebar_Parallelogram>
        </div>
        
        
      </div>

      <div className="flex justify-center items-center flex-col">
        <h1 className="text-gray-300 text-3xl p-4 italic"><Mini_Parallelogram></Mini_Parallelogram>      Editors Choice</h1>
        <div className="grid grid-rows-2 mt-3 gap-4">
          <div className="flex max-w-sm">
            <img src={footer1} alt="" />
            
            <span className="flex flex-col"><p className="text-white ml-4 max-w-sm">A MONSTER PROM POSTER GOT HIJACKED FOR A PAPA ROACH CONCERT...</p> 
            <p className="text-gray-600 ml-4 italic text-sm"> Aug 01, 2019</p>
            </span>
          </div>
          <div className="flex max-w-sm">
            <img src={footer2} alt="" />
            <span><p className="text-white ml-4 max-w-sm">FACEBOOK WANTS TO READ YOUR THOUGHTS WITH ITS AUGMENTED...</p>
            <p className="text-gray-600 ml-4 italic text-sm">Aug 01, 2019</p>
            </span>
            
          </div>
        </div>
        
        
      </div>

      <div className="flex justify-center items-center flex-col">
      <h1 className="text-gray-300 text-3xl p-4 italic"><Mini_Parallelogram></Mini_Parallelogram>      TAGS CLOUD</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 mt-3">
      <FooterGameCards><p>Gaming</p></FooterGameCards>
      <FooterGameCards><p>Platform</p></FooterGameCards>
      <FooterGameCards><p>PlayStation</p></FooterGameCards>
      <FooterGameCards><p>Hardwere</p></FooterGameCards>
      <FooterGameCards><p>Reviews</p></FooterGameCards>
      <FooterGameCards><p>Simulation</p></FooterGameCards>
      <FooterGameCards><p>Strategy</p></FooterGameCards>
      <FooterGameCards><p>Scientific</p></FooterGameCards>
      <FooterGameCards><p>Refrences</p></FooterGameCards>
      <FooterGameCards><p>Role Playing</p></FooterGameCards>
      <FooterGameCards><p>Advantures</p></FooterGameCards>

      </div>
       
      </div>
      
      
    </div>
    
    </div>
    <footer className="h-12 text-gray-300 bg-black flex justify-around items-center">
      <p>Copyright ©2023 All rights reserved | This template is made with Love by Team4</p>
      <div className="flex justify-between px-4 mx-4">
        <a className="mx-2" href="#">About</a>
        <a className="mx-2" href="#">Subscribe</a>
        <a className="mx-2" href="#">Contact</a>
        <a className="mx-2" href="#">Support</a>
      </div>
    </footer>
    </>
)
}

export {Footer};
