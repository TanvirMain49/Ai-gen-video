import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-center mt-32 max-w-3xl mx-auto">
        <p className="text-lg font-bold">Generate <strong className="text-primary">Video</strong></p>
        <h1 className="text-6xl text-center font-extrabold text-primary">
          Generate videos in seconds with AI
        </h1>

        <p className="font-bold my-4 text-lg text-center">
          Introducing <span className="text-primary font-semibold">VideoGen</span>, the world's fastest and easiest video creation experience. Ever.
        </p>

        <Button>
          Get Started
        </Button>
      </div>
  );
}
