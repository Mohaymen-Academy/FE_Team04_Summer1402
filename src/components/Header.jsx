import logo from "../picsvg_download.svg";
import Parallelogram from "./Parallelogram";
import { HiOutlineLogin } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";

function Header() {
  return (
    <header>
      <div className="bg-gray-700 h-60 w-screen flex justify-center items-center">
        <img className="h-[200px]" src={logo} />
      </div>
      <nav className="bg-red-600 h-24 w-screen flex justify-center items-center">
        <div className="flex justify-between w-11/12 max-w-[1000px]">
          <Parallelogram>
            <HiOutlineLogin size={30} />
          </Parallelogram>
          <ul className="flex justify-center items-center max-w-xl">
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
          <Parallelogram>
            <BiSearchAlt size={30} />
          </Parallelogram>
        </div>
      </nav>
    </header>
  );
}

export default Header;
