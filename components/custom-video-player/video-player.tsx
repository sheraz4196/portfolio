export type VideoPlayerProps = {
  url: string;
};

export default function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div>
      <video src={url}></video>
    </div>
  );
}
