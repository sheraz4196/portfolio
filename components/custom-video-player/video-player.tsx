"use client";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  VolumeIcon,
  VolumeXIcon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import useKey from "$/Hooks/useKey";
import useTimeFormat from "$/Hooks/useTimeFormat";
export type VideoPlayerProps = {
  url: string;
  height?: string;
  width?: string;
};
export default function VideoPlayer({
  url,
  height = "h-full",
  width = "w-full",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(1);
  const formatedTime = useTimeFormat(currentTime);
  const formatedDuration = useTimeFormat(duration);
  const [isPlaying, setIsPlaying] = useState(false); // for managing play or pause functionality
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    if (videoElement) {
      const handleTimeUpdate = () => {
        setCurrentTime(videoElement.currentTime);
      };
      const handleDurationChange = () => {
        setDuration(videoElement.duration);
      };
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
      videoElement.addEventListener("loadedmetadata", handleDurationChange);
      console.log(duration);
      return () => {
        if (videoElement) {
          videoElement.removeEventListener("timeupdate", handleTimeUpdate);
          videoElement.removeEventListener(
            "loadedmetadata",
            handleDurationChange
          );
        }
      };
    }
  }, []);
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = prevVolume;
        setVolume(prevVolume);
      } else {
        setPrevVolume(videoRef.current.volume);
        videoRef.current.volume = 0;
        setVolume(0);
      }
      setIsMuted(!isMuted);
    }
  };
  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };
  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };
  const decreaseVolume = () => {
    const newVolume = Math.max(0, volume - 0.1);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const increaseVolume = () => {
    const newVolume = Math.min(1, volume + 0.1);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const clickedPosition =
      event.clientX - event.currentTarget.getBoundingClientRect().left;
    const progressBarWidth = event.currentTarget.clientWidth;
    const newTime = (clickedPosition / progressBarWidth) * duration;
    videoRef.current.currentTime = newTime;
  };

  useKey(" ", togglePlay);
  useKey("m", toggleMute);
  useKey("ArrowLeft", skipBackward);
  useKey("ArrowRight", skipForward);
  useKey("ArrowUp", increaseVolume);
  useKey("ArrowDown", decreaseVolume);

  return (
    <div className={`relative overflow-x-hidden bg-white  ${height} ${width}`}>
      <div className="h-full w-full flex justify-center items-center">
        <video
          ref={videoRef}
          src={url}
          className="overflow-x-hidden"
          onClick={togglePlay}
        ></video>
      </div>
      <div aria-label="controls" className="w-full">
        <div className="flex items-center justify-center w-full absolute top-[50%] translate-y-[-50%] z-50">
          <div className="flex  gap-12">
            <button
              type="button"
              aria-label="Skip Backward"
              className="p-4 rounded-full focus-nl"
              onClick={skipBackward}
            >
              <SkipBack />
            </button>
            <button
              type="button"
              aria-label="Play-Pause-Button"
              className="p-4 rounded-lg focus-nl  bg-blue-900 z-50"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause fill="white" /> : <Play fill="white" />}
            </button>
            <button
              type="button"
              aria-label="Skip Backward"
              className="p-4 rounded-full focus-nl"
              onClick={skipForward}
            >
              <SkipForward />
            </button>
          </div>
        </div>
        <div className="absolute bottom-48 w-full z-50">
          <div className="flex flex-col gap-2 px-3">
            <div className="flex items-center justify-between">
              <div
                aria-label="time-formater"
                className="text-base font-medium tracking-wider"
              >
                <span>{formatedTime}</span> {"/"}
                <span>{formatedDuration}</span>
              </div>
              <div aria-label="extras">
                <div id="Volume-Sliders" className="flex gap-3 items-center">
                  <button
                    type="button"
                    aria-label="Toggle Mute"
                    className="p-2 focus-nl"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeXIcon /> : <VolumeIcon />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    aria-label="Volume Slider"
                  />
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div
              aria-label="progressbar"
              className="w-full h-2 rounded-lg bg-gray-300 cursor-pointer relative"
              onClick={handleProgressBarClick}
            >
              <div
                className="absolute left-0 top-0 h-full bg-blue-900"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
