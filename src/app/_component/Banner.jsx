import { Button } from "@/components/ui/button";
import { FaUsers, FaVideo } from "react-icons/fa";

export default function Banner() {
  return (
    <div 
      className="relative flex flex-col items-center justify-center h-screen w-full mx-auto text-white text-center px-4"
      style={{
        backgroundImage: "url('/img17.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <p className="text-lg font-bold">
          Generate <strong className="text-primary">Video</strong>
        </p>

        <h1 className="text-6xl font-extrabold text-white">
          Generate videos in seconds with AI
        </h1>

        <p className="font-bold my-4 text-lg">
          Introducing <span className="text-primary font-semibold">VideoGen</span>, the world's fastest and easiest video creation experience. Ever.
        </p>

        <Button className="mt-4">Get Started</Button>

        {/* Achievement Section */}
        <div className="mt-8 flex gap-8 justify-center">
          <div className="flex items-center space-x-2">
            <FaUsers className="text-yellow-400 text-2xl" />
            <p className="text-lg font-semibold">100K+</p>
          </div>

          <div className="flex items-center space-x-2">
            <FaVideo className="text-green-400 text-2xl" />
            <p className="text-lg font-semibold">500K+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
