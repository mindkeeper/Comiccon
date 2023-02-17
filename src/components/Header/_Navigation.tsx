import { NavListItem } from "./_constant";
import { FiChevronDown } from "react-icons/fi";
import { BiCube } from "react-icons/bi";
import { useDropdown } from "../../hooks/useDropdown";
import Dropdown from "./_SVGs/_NavigationDropdown";
import clsx from "clsx";
function Navigation() {
  const [isDropdownOpen, dropDownHandler] = useDropdown(false);
  const navList: NavListItem[] = [
    { label: "Home" },
    { label: "Guess Stars" },
    { label: "Brands" },
    { label: "Contacts" },
    { label: "Become an Exhibitor", icon: <BiCube /> },
    { label: "Promote Your Brand", icon: <BiCube /> },
    { label: "FAQ", icon: <BiCube /> },
    { label: "Event Guidlines", icon: <BiCube /> },
    { label: "Safety and Weapon Policy", icon: <BiCube /> },
    { label: "Anti Harrasment Policy", icon: <BiCube /> },
  ];

  const mainNavigation: NavListItem[] = navList.slice(0, 4);
  const hiddenNavigation: NavListItem[] = navList.slice(4);
  return (
    <nav className="hidden lg:flex lg:items-center absolute left-1/2 -translate-x-1/2 gap-x-2 text-white">
      {mainNavigation.map((item) => (
        <span className="rounded-xl select-none cursor-pointer px-5 py-4 bg-transparent hover:bg-primary-gray transition-all duration-300">
          {item.label}
        </span>
      ))}
      <div
        className={clsx(
          "flex gap-x-1 items-center",
          " relative rounded-xl select-none cursor-pointer px-5 py-4 bg-transparent hover:bg-primary-gray transition-all duration-300"
        )}
        onClick={dropDownHandler}
      >
        <span>More</span>
        <FiChevronDown />
        {isDropdownOpen && <Dropdown items={hiddenNavigation} />}
      </div>
    </nav>
  );
}

export default Navigation;
