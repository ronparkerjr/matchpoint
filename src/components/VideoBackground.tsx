import { publicAsset } from "@/lib/publicAsset";
import { useRef, useEffect } from "react";

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      src={publicAsset("/videos/features/matchpoint-tv-sport-30sec.mp4")}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={publicAsset("/images/facility-aerial.jpg")}
    />
  );
};

export default VideoBackground;
