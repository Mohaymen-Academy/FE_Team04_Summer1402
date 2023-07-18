import Parallelogram from "./Parallelogram";

const SearchBar = (props) => {
  return (
    <div className="w-72 absolute -bottom-24 z-30 -right-14 sm:right-4">
      <div
        className={`transition-all duration-300${
          props.showSearchBar ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100 border-4 border-red-500 rounded-lg px-4 py-4 text-lg w-full focus:outline-none focus:border-red-700"
        />
      </div>
    </div>
  );
};

export default SearchBar;
