import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AiToolCard from "./AiToolCard";

export default function AiTools() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-primary font-bold text-center">
        Our AI Tools Suite
      </h1>
      <p className="text-base max-w-xl mx-auto text-center font-semibold mt-3">
        AI Gen Short Video offers advanced AI-powered tools to simplify video
        creation. From automated editing to smart enhancements, our suite helps
        you generate high-quality short videos quickly and effortlessly.
      </p>

      <div className="w-10/12 mx-auto my-24">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <AiToolCard
                image="/Tool-1.jpg"
                text="Text to Image"
                paragraph="Ignite your creative spark with Imagine AI Image Generator. Describe your vision with words, and watch the powerful tool translate them into captivating artwork. Catalyze a flurry of ideas and conquer creative roadblocks."
              />
            </CarouselItem>
            <CarouselItem>
              <AiToolCard
                image="/banner.jpg"
                text="AI Video Generator"
                paragraph="AI Video Generator
                Ditch the filming crew as Imagine AI Art Creates HD Videos Instantly. Convert scripts or ideas into stunning 4K videos with just a few clicks. Forget time consuming filming, editing, and acting as the AI does it all in seconds."
              />
            </CarouselItem>
            <CarouselItem>
              <AiToolCard 
              image="/img14.jpg"
              text="Creative Upscaler"
              paragraph="Creative Upscaler
              From Blurry to Beautiful: Imagine AI Image Generator Creative Upscaler. The image enhancement tool instantly transforms them into crisp, high-definition masterpieces. Imagine AI Art Generator makes it fast and easy."/>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
