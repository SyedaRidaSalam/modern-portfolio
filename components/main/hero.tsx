import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col md:h-screen w-full overflow-hidden">
   <video
  autoPlay
  muted
  loop
  playsInline // Yeh sab se important hai iPhone ke liye
  preload="auto"
  className="rotate-180 absolute -top-[570px] md:-top-[420px] left-0 w-full h-[120vh] object-cover -z-20"
>
  <source src="/videos/blackhole.webm" type="video/webm" />
  {/* Safari (iPhone) ke liye MP4 backup hona zaroori hai agar webm na chale */}
  <source src="/videos/blackhole.mp4" type="video/mp4" /> 
</video>

      <HeroContent />
    </div>
  );
};
