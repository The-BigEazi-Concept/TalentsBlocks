import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = item?.children || [];

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <ul className="relative justify-center items-center gap-[30px] flex text-white text-base font-medium leading-relaxed">
      <li onClick={toggle}>
        <button>{item.title}</button>
      </li>
      <div
        className={`absolute top-8 w-[321px] p-[30px] bg-white flex-col justify-start items-start gap-5 inline-flex ${transClass}`}>
        {menuItems.map((childItem) => (
          <Link
            key={childItem.route}
            className="text-zinc-900 text-base font-semibold hover:bg-neutral-blue px-[15px] py-[20px] w-[100%]"
            to={childItem?.route || ""}>
            {childItem.title}
          </Link>
        ))}
      </div>
    </ul>
  );
}
