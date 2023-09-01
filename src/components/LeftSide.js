import { leftSide } from "@constants/Data";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Line } from "./FixedComponents/components";

const LeftSide = ({ toggleImage, setToggleImage, toggleLeftSide, setToggleLeftSide }) => {
  return (
    <div className={`fixed ${toggleLeftSide ? '-left-[350px]' : 'left-0'} md:relative md:left-0 w-[350px] column z-[1] bg-black max-h-screen text-gray-400 p-5`}>
      <div className="column gap-10 ">
        <ul className="column gap-5">
          <MoreHorizontal className="hover:text-white" onClick={() => setToggleLeftSide(prev => !prev)}/>
          {leftSide.topLinks.map((link, id) => (
            <li key={id} className="leftsideLinks">
              <i>{link.icon}</i>
              {link.n}
            </li>
          ))}
        </ul>

        <ul className="column gap-5">
          {leftSide.topBottomLinks.map((link, id) => (
            <li key={id} className="leftsideLinks">
              <i className={link.bg}>{link.icon}</i>
              {link.n}
            </li>
          ))}
          <Line />
        </ul>

        <ul className="column gap-3 mb-[38px] text-sm h-[500px] overflow-hidden">
          {leftSide.music.map((m, i) => (
            <li  key={i} className="hover:text-white cursor-pointer">{m}</li>
          ))}
        </ul>

        {toggleImage && (
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/eb/Drip_Harder_by_Lil_Baby_%26_Gunna.jpg"
            className="absolute bottom-0 left-0 w-full h-auto cursor-pointer"
            onClick={() => setToggleImage((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};

export default LeftSide;
