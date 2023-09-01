import { User, UserPlus2 } from "lucide-react";
import React from "react";

const RightSide = () => {
  return (
    <div className="hidden md:flex flex-col gap-5 bg-black w-[400px] p-5">
      <div className="flex-between">
        <h1 className="gray-text-hover text-md font-bold">Friend Acitvity</h1>
        <UserPlus2 className="gray-text-hover" />
      </div>
      <p className="text-gray-400">
        Let friends and followers in Spotify see what you are listening to.
      </p>
      <div className="column gap-2">
        {[0, 1, 2].map((num) => (
          <div className="w-full flex-start gap-3" key={num}>
            <div className="relative w-max">
              <User
                className="text-gray-400 bg-[#272727] p-3 text-5xl rounded-full"
                size={50}
              />
              <span className="bg-blue-600 h-2 w-2 rounded-full absolute top-0 right-0 mr-1 mt-1"></span>
            </div>
            <div className="column gap-1 items-start">
              {[0, 1, 2].map((num) => (
                <div
                  key={num}
                  className={`bg-[#272727] h-[8px] rounded-full ${
                    num === 0 ? "w-[100px]" : "w-[85px]"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-400">
        Go to Settings Social and enable 'Share my listening activity on
        Spotify'. You can turn this off at any time.
      </p>
      <div className="flex-center">
        <button className="bg-white text-black rounded-full uppercase w-max py-[10px] px-14 font-bold tracking-wider">
          Settings
        </button>
      </div>
    </div>
  );
};

export default RightSide;
