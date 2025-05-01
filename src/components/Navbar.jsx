import { CiSearch } from "react-icons/ci";

function Navbar({ activeIndex, setActiveIndex }) {
  const sections = ["jordan1", "vapormax", "airforce", "jordan4", "jordan11"];

  return (
    <nav className="bg-[rgb(13,13,14)] text-white p-5">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl cursor-pointer font-bold">
            <span className="text-teal-500">S</span>neakers!
          </h1>
        </div>

        <div className="bg-gray-100 p-1 rounded-2xl flex items-center mx-auto md:mx-0 w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none border-none text-black w-full pl-4 py-1"
          />
          <CiSearch className="text-black mr-3 text-[20px] cursor-pointer" />
        </div>

        <div className="text-center md:text-right hidden md:block">
          <p className="text-[16px] md:text-[20px] border-b border-teal-500 w-fit mx-auto md:mx-0">
            Limited Offer!
          </p>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <ul className="flex justify-start md:justify-center gap-5 md:gap-10 whitespace-nowrap px-2">
          {sections.map((section, index) => (
            <li
              key={section}
              className={
                activeIndex === index ? "active-layout" : "list-layout"
              }
              onClick={() => setActiveIndex(index)}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
