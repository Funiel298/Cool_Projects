import { CiSearch } from "react-icons/ci";

const SearchComponent = ({ city, setCity, getStates }) => {
  return (
    <div className="absolute top-5 w-3/4 flex flex-row items-center justify-center">
      <div className=" w-full">
        <CiSearch className="absolute top-1/2 left-2 text-2xl transform -translate-y-1/2 text-black" />
        <input
          type="text"
          className="rounded-2xl p-3 pl-12 w-full text-black outline-none"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              getStates();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
