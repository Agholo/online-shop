import { createContext, useState } from "react";

export const PopupControl = createContext();

const PopupOpen = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <PopupControl.Provider value={{ isOpen, setOpen }}>
      {children}
    </PopupControl.Provider>
  );
};

export default PopupOpen;
