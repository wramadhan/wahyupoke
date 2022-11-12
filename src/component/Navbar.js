import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor("bg-primary");
      setTextColor("text-secondary");
    } else {
      setColor("bg-secondary");
      setTextColor("text-primary");
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div
      className={`px-[25px] w-full py-[16px] shadow-md ${color} flex justify-between dark:bg-primary shadow-lg `}
    >
      <div className="flex">
        <Icon
          className={`text-3xl ${textColor}`}
          icon="ic:twotone-catching-pokemon"
        />
        <h1 className={`${textColor} text-2xl font-bold`}>Wahyu Poke</h1>
      </div>
      <button>
        <Icon icon="bi:moon-fill" className={`text-3xl ${textColor}`} />
      </button>
    </div>
  );
};

export default Navbar;
