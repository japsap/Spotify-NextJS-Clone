import Image from "next/image";

import { GiPauseButton } from "react-icons/gi";
import { BsFillPlayFill, BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";

import {
  Shuffle,
  SkipBack,
  SkipForward,
  Undo,
  Volume2,
  Minimize2,
} from "lucide-react";

export const AppLogo = ({ width, height }) => {
  return (
    <Image
      src="/images/logo.png"
      width={width}
      height={height}
      alt="logo"
      className="grayscale"
    />
  );
};

export const CustomLogonav = () => {
  return (
    <div className="w-full bg-black p-8 px-12">
      <div className="flex-start gap-1">
        <Image
          src="/images/logo.png"
          width={35}
          height={35}
          alt="logo"
          className="grayscale-[10000%]"
        />
        <h1 className="text-2xl text-white font-bold">Spotify</h1>
      </div>
    </div>
  );
};

export const Switch = ({ text }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className={`w-11 h-6 bg-[#727272] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1DB954]`}
      ></div>
      {text && (
        <span className="ml-3 text-sm font-bold text-white">Запомни ме</span>
      )}
    </label>
  );
};

export const Line = () => {
  return <div className="bg-[#292929] w-full h-[1px]"></div>;
};

export const PlayPauseButton = ({ items }) => {
  const [pause, setPause] = useState(false);

  const cl =
    "absolute right-0 top-4 bg-[var(--green)] p-2 text-5xl rounded-full mr-5";

  return (
    <button className={`${items} transition ease-in-out delay-150`}>
      {pause ? (
        <GiPauseButton
          onClick={() => setPause((prev) => !prev)}
          className={cl}
        />
      ) : (
        <BsFillPlayFill
          onClick={() => setPause((prev) => !prev)}
          className={cl}
        />
      )}
    </button>
  );
};

export const RowCards = ({ card }) => {
  return (
    <div className="relative glassCard rounded-md flex-between group">
      <div className="w-full h-[75px] flex rounded-md cursor-pointer">
        <img className="rounded-l-md" src={card.name} />
        {card.heart && (
          <span className={card.style}>
            <BsFillHeartFill className="text-2xl" />
          </span>
        )}
        <div className="p-5 flex items-center">
          <h1 className="text-white text-md font-bold">{card.img}</h1>
        </div>
      </div>
      <PlayPauseButton items="hidden group-hover:block" />
    </div>
  );
};

export const ColCards = ({ card }) => {
  return (
    <div className="relative glassCard rounded-md group p-3">
      <div className="w-full column rounded-md cursor-pointer">
        <img className={` ${card.album ? "rounded-full" : 'rounded-l-md'} h-40 object-cover`} src={card.name} />
        <div className="column gap-3 pt-3">
          <h1 className="text-white text-md font-bold">{card.img}</h1>
          <p className="text-gray-400 leading-4">{card.p}</p>
        </div>
      </div>
      <PlayPauseButton items="hidden group-hover:block" />
    </div>
  );
};

export const FullScreenCurretnSongPlayingContaier = ({
  setToggleFullScreenSong,
}) => {
  const [pause, setPause] = useState(false);

  return (
    <section className="absolute top-0 left-0 p-20 h-full w-full bg-song-fullscreen-bg bg-no-repeat bg-cover z-[999] overflow-hidden">
      <div className="flex-start gap-5 relative">
        <AppLogo width={60} height={60} />
        <div className="column">
          <h1 className="text-white text-xl font-semibold">
            Playing from artist
          </h1>
          <span className="text-white text-2xl font-bold">Lil Baby</span>
        </div>
      </div>

      <div className="column  gap-10 w-full mt-10 md:mt-[400px]">
        <div className="flex-start flex-col md:flex-row items-end gap-10">
          <img
            className="w-[150px]"
            src="https://upload.wikimedia.org/wikipedia/en/e/eb/Drip_Harder_by_Lil_Baby_%26_Gunna.jpg"
          />
          <div className="column gap-5">
            <h1 className="text-white text-5xl font-bold">Emotionaly Scared</h1>
            <p className="text-white text-xl font-bol">Lil Baby</p>
          </div>
        </div>

        <div className="flex-center gap-5">
          <span className="text-white text-sm">0:00</span>
          <input className="w-full fullscreen" type="range" min={0} max={100} />
          <span className="text-white text-sm">3:58</span>
        </div>

        <div className="flex-between">
          <div className="w-full"></div>
          <div className="flex-center gap-4">
            <Shuffle size={30} className="text-white" />
            <SkipBack size={30} className="text-white" />
            {pause ? (
              <BsFillPlayFill
                className="flex-center bg-white rounded-full p-4 cursor-pointer text-black"
                size={60}
                onClick={() => setPause((prev) => !prev)}
              />
            ) : (
              <GiPauseButton
                className="flex-center bg-white rounded-full p-4 cursor-pointer text-black"
                size={60}
                onClick={() => setPause((prev) => !prev)}
              />
            )}

            <SkipForward size={30} className="text-white" />
            <Undo size={30} className="text-white" />
          </div>
          <div className="hidden md:flex justify-end w-full gap-4">
            <div className="flex-center gap-3">
              <Volume2 size={20} className="text-white" />
              <input
                className="w-full lg:w-[100px] fullscreen"
                type="range"
                min={0}
                max={100}
              />
              <Minimize2
                size={20}
                className="text-white cursor-pointer"
                onClick={() => setToggleFullScreenSong((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
