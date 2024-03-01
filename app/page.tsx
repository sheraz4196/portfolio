import VideoPlayer from "$/components/custom-video-player/video-player";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center   bg-white overflow-x-hidden">
      <VideoPlayer
        width="w-[800px]"
        height="h-[800px]"
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    </div>
  );
}
