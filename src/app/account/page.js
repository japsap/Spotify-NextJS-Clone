"use client";

import Bottom from "@components/Bottom";
import Center from "@components/Center";
import { FullScreenCurretnSongPlayingContaier } from "@components/FixedComponents/components";
import LeftSide from "@components/LeftSide";
import RightSide from "@components/RightSide";
import Top from "@components/Top";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

const page = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    }
  });

  const [toggleImage, setToggleImage] = useState(false);
  const [toggleLeftSide, setToggleLeftSide] = useState(true);
  const [toggleFullScreenSong, setToggleFullScreenSong] = useState(false);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="column">
      <div className="flex justify-between">
        <LeftSide
          toggleImage={toggleImage}
          setToggleImage={setToggleImage}
          toggleLeftSide={toggleLeftSide}
          setToggleLeftSide={setToggleLeftSide}
        />
        <div className="column w-full">
          <Top setToggleLeftSide={setToggleLeftSide} />
          <Center />
        </div>
        <RightSide />
      </div>
      <Bottom
        toggleImage={toggleImage}
        setToggleImage={setToggleImage}
        setToggleFullScreenSong={setToggleFullScreenSong}
      />
      {toggleFullScreenSong && (
        <FullScreenCurretnSongPlayingContaier
          toggleFullScreenSong={toggleFullScreenSong}
          setToggleFullScreenSong={setToggleFullScreenSong}
        />
      )}
    </div>
  );
};

export default page;
