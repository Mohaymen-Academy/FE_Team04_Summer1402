import logo from "../picsvg_download.svg";
import Parallelogram from "./Parallelogram";
import { HiOutlineLogin } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar((prevShowSearchBar) => !prevShowSearchBar);
  };

  return (
    <header>
      <div className="bg-gray-700 h-60 w-screen flex justify-center items-center">
        <img className="h-[200px]" src={logo} />
      </div>
      <nav className="bg-red-700 h-24 w-screen flex justify-center items-center relative">
        <div className="flex justify-center w-11/12 max-w-[1000px] sm:justify-between">
          <Parallelogram>
            <FiMenu className="block sm:hidden" size={30} />
            <HiOutlineLogin className="hidden sm:block" size={30} />
          </Parallelogram>
          <ul className="justify-center items-center max-w-xl hidden sm:flex">
            <li>
              <Parallelogram>
                <p>Home</p>
              </Parallelogram>
            </li>
            <li>
              <Parallelogram>
                <p>Platform</p>
              </Parallelogram>
            </li>
            <li>
              <Parallelogram>
                <p>Reviews</p>
              </Parallelogram>
            </li>
          </ul>
          <div className="relative">
            <Parallelogram onClick={toggleSearchBar}>
              <BiSearchAlt size={30} />
            </Parallelogram>
            {showSearchBar && <SearchBar showSearchBar={showSearchBar} />}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
