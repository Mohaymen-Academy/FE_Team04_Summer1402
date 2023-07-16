import logo from "../picsvg_download.svg";
import Parallelogram from "./Parallelogram";
function Header() {
  return (
    <header>
      <div className="bg-gray-700 h-60 w-screen flex justify-center items-center">
        <img className="h-[200px]" src={logo} />
      </div>
      <nav className="bg-red-500 h-20 w-screen">
        <ul>
          <li>
            <Parallelogram text="Preview" href="#" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
