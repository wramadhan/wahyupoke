import React from "react";
import { Icon } from "@iconify/react";

const Card = ({ name, id, klik }) => {
  return (
    <div
      onClick={klik}
      className="m-[25px] duration-200 w-[180px] bg-cover bg-center h-[180px] dark:border-darkprime border-primary border-4 rounded-2xl"
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png")`,
      }}
    >
      <div className="duration-300 w-full flex justify-center flex-col bg-primary/20 dark:hover:bg-darkprime hover:bg-primary/100 dark:hover:text-primary hover:text-secondary text-transparent text-center h-5/6">
        Click to see Detail{" "}
        <Icon className="text-center w-full text-5xl" icon="entypo:eye" />
      </div>
      <div className="w-full rounded-b-md bg-primary dark:bg-darkprime h-1/6">
        <p className="font-bold text-secondary dark:text-primary text-center text-2xl">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Card;
