import { useState } from "react";

export function useDropdown(initialState: boolean): [boolean, () => void] {
  const [isDropdownOpen, setIsDropdownOpen] = useState(initialState);
  const dropdownHandler = () => {
    setIsDropdownOpen((value) => !value);
  };

  return [isDropdownOpen, dropdownHandler];
}
