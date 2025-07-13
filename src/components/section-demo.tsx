"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "./ui/button";
import { Icons } from "./ui/icon";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

type Props = {
  playVideo: boolean;
};

export function SectionDemo({ playVideo }: Props) {
  const playerRef = useRef<any>();
  const [isPlaying, setPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.5); // Start at 1.5x speed
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useHotkeys(
    "space",
    () => {
      togglePlay();
    },
    []
  );

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      playerRef.current?.pause();
    } else {
      playerRef.current?.play();
    }

    setPlaying((prev) => !prev);
  }, [isPlaying]);

  const handleRestart = () => {
    playerRef.current.currentTime = 0;
  };

  const changeSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    if (playerRef.current) {
      playerRef.current.playbackRate = speed;
    }
  };

  // Apply playback speed when video loads
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  useHotkeys(
    "backspace",
    () => {
      handleRestart();
    },
    [playerRef]
  );

  useEffect(() => {
    if (isDesktop && playerRef.current) {
      if (playVideo && !isPlaying) {
        playerRef.current.play();
        setPlaying(true);
      } else if (!playVideo && isPlaying) {
        playerRef.current.pause();
        setPlaying(false);
      }
    }
  }, [playVideo, isDesktop, isPlaying]);

  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Demo - Version 0.5 (Private beta)</span>
        <span className="text-muted-foreground">
          <Link href="/">neurov.ai</Link>
        </span>
      </div>
      <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="group">
          <div className="absolute top-[50%] left-[50%] w-[300px] h-[50px] -ml-[150px] -mt-[50px] group-hover:opacity-100 hidden md:flex space-x-2 items-center justify-center opacity-0 z-30 transition-all">
            <Button
              size="icon"
              className="rounded-full w-12 h-12 bg-transparent border border-border text-foreground hover:bg-accent"
              onClick={handleRestart}
            >
              <Icons.Reply size={20} />
            </Button>
            <Button
              size="icon"
              className="rounded-full w-12 h-12"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Icons.PauseOutline size={20} />
              ) : (
                <Icons.PlayOutline size={20} />
              )}
            </Button>
            <div className="flex space-x-1">
              <Button
                size="sm"
                variant={playbackSpeed === 1 ? "default" : "outline"}
                onClick={() => changeSpeed(1)}
                className="text-xs px-2 py-1 h-8"
              >
                1x
              </Button>
              <Button
                size="sm"
                variant={playbackSpeed === 1.5 ? "default" : "outline"}
                onClick={() => changeSpeed(1.5)}
                className="text-xs px-2 py-1 h-8"
              >
                1.5x
              </Button>
              <Button
                size="sm"
                variant={playbackSpeed === 2 ? "default" : "outline"}
                onClick={() => changeSpeed(2)}
                className="text-xs px-2 py-1 h-8"
              >
                2x
              </Button>
            </div>
          </div>
          <video
            ref={playerRef}
            onClick={togglePlay}
            src="/ARENA1.mp4"
            autoPlay={false}
            controls={!isDesktop}
            className="w-full max-h-[90%] lg:max-h-full mt-8 bg-card max-w-[1280px] m-auto"
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
