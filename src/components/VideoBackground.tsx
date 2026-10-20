import { useRef, useEffect } from "react";
import heroVideo from "@/assets/matchpoint-tv-sport-30sec.mp4.asset.json";

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
      src={heroVideo.url}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster="/images/facility-aerial.jpg"
    />
  );
};

export default VideoBackground;
