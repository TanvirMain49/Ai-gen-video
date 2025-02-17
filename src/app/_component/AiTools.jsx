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

      <div className="w-10/12 mx-auto mt-24">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <AiToolCard />
            </CarouselItem>
            <CarouselItem>
            <AiToolCard />
            </CarouselItem>
            <CarouselItem>
            <AiToolCard />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
