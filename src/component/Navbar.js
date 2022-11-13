import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useAppContext } from "../context/Store";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dark, handleDark } = useAppContext(useAppContext);
  const [color, setColor] = useState("");
  const [colorDark, setColorDark] = useState("text-darkprime");
  const [textColor, setTextColor] = useState("text-primary");
  const [textColorDark, setTextColorDark] = useState("");

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor("bg-primary");
      setColorDark("bg-darkprime");
      setTextColor("text-secondary");
      setTextColorDark("text-primary");
    } else {
      setColor("bg-secondary");
      setColorDark("bg-primary");
      setTextColor("text-primary");
      setTextColorDark("text-darkprime");
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={dark}>
      <div
        className={`px-[25px] duration-200 w-full py-[16px] shadow-md ${color} flex justify-between dark:${colorDark} shadow-lg `}
      >
        <Link to="/">
          <div className="flex">
            <Icon
              className={`text-3xl duration-200 dark:${textColorDark} ${textColor}`}
              icon="ic:twotone-catching-pokemon"
            />
            <h1
              className={`${textColor} dark:${textColorDark} text-2xl font-bold`}
            >
              Wahyu Poke
            </h1>
          </div>
        </Link>
        <button onClick={handleDark}>
          {dark === "dark" ? (
            <Icon
              icon="grommet-icons:sun"
              className={`active:rotate-45 duration-300 text-3xl dark:${textColorDark} ${textColor}`}
            />
          ) : (
            <Icon
              icon="bi:moon-fill"
              className={`active:rotate-45 duration-300 text-3xl dark:${textColorDark} ${textColor}`}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
