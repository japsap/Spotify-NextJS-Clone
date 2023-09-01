import {
  Heart,
  Shuffle,
  SkipBack,
  SkipForward,
  Undo,
  Mic2,
  GalleryVertical,
  Maximize2,
  Volume2,
} from "lucide-react";
import { GiPauseButton } from "react-icons/gi";
import { BsFillPlayFill } from "react-icons/bs";

import { useState } from "react";

const Bottom = ({ toggleImage, setToggleImage, setToggleFullScreenSong}) => {
  const [pause, setPause] = useState(false);

  return (
    <div className="mt-3 md:mt-0 w-full z-[2] bg-[#1B1B1B] border-t border-[#292929] h-[90px] flex-between gap-3 p-5">
     
     {/* song playing */}
      <div className="hidden lg:flex items-center w-[350px] gap-10">
        <div className="flex gap-3">
          {!toggleImage && (
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/eb/Drip_Harder_by_Lil_Baby_%26_Gunna.jpg"
              width={50}
              height={50}
              onClick={() => setToggleImage((prev) => !prev)}
              alt="music image"
            />
          )}

          <div className="column">
            <h1 className="text-white text-sm mt-2 hover:underline cursor-pointer">
              Emotionaly Scared
            </h1>
            <p className="gray-text-hover text-sm">Lil Baby</p>
          </div>
        </div>
        <Heart className="gray-text-hover cursor-pointer" size={16} />
      </div>
       {/* song playing */}


       {/* player */}
      <div className="column w-full gap-2 items-center">
        <div className="flex-center gap-4">
          <Shuffle size={17} className="gray-text-hover" />
          <SkipBack size={17} className="gray-text-hover" />
          {pause ? (
            <BsFillPlayFill
              className="flex-center bg-white rounded-full p-2 cursor-pointer text-black"
              size={35}
              onClick={() => setPause((prev) => !prev)}
            />
          ) : (
            <GiPauseButton
              className="flex-center bg-white rounded-full p-2 cursor-pointer text-black"
              size={35}
              onClick={() => setPause((prev) => !prev)}
            />
          )}

          <SkipForward size={17} className="gray-text-hover" />
          <Undo size={17} className="gray-text-hover" />
        </div>

        <div className="flex-center w-full gap-3">
          <p>0:00</p>
          <input
            className="w-full xl:w-[600px] bottom"
            type="range"
            min={0}
            max={100}
          />
          <p>3:58</p>
        </div>
      </div>
    {/* player */}


    {/* sound */}
      <div className="hidden lg:flex  gap-4">
        <Mic2 size={17} className="gray-text-hover" />
        <GalleryVertical size={17} className="gray-text-hover" />
        <div className="flex-center gap-3">
          <Volume2 size={17} className="gray-text-hover" />
          <input
            className="w-full lg:w-[100px] bottom"
            type="range"
            min={0}
            max={100}
          />
          <Maximize2 size={17} className="gray-text-hover" onClick={() => setToggleFullScreenSong(prev => !prev)} />
        </div>
      </div>
    {/* sound */}


    </div>
  );
};

export default Bottom;
