import React from "react";
import { NavListItem } from "../_constant";
interface Props {
  items: NavListItem[];
}
function Dropdown({ items, ...props }: Props) {
  return (
    <div className="absolute bg-white p-5 rounded-xl flex flex-col gap-y-2 top-12">
      {items.map((item) => (
        <div className="flex items-center gap-x-2 text-black text-lg w-fit">
          {item.icon}
          <span className="whitespace-nowrap">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
