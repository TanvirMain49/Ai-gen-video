import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    title: "Basic",
    price: "$11",
    tokens: "4.5K tokens/quarter",
    features: [
      "Up to ~900 Image Generations/3 months",
      "Up to ~300 Video Generations/3 months",
      "General Commercial Terms",
      "Image Generations Visibility: Public",
      "4 concurrent Generations",
    ],
    highlight: false,
  },
  {
    title: "Standard",
    price: "$25",
    tokens: "15K tokens/quarter",
    features: [
      "Up to ~3000 Image Generations/3 months",
      "Up to ~1000 Video Generations/3 months",
      "General Commercial Terms",
      "Image Generations Visibility: Public",
      "8 concurrent Generations",
    ],
    highlight: false,
  },
  {
    title: "Professional",
    price: "$50",
    tokens: "45K tokens/quarter",
    features: [
      "Up to ~9000 Image Generations/3 months",
      "Up to ~3000 Video Generations/3 months",
      "All styles and models",
      "General Commercial Terms",
      "Image Generation Visibility: Private",
      "12 Concurrent Generations",
      "Priority Support",
    ],
    highlight: true, // This plan is highlighted
  },
  {
    title: "Unlimited",
    price: "$100",
    tokens: "120K tokens/quarter",
    features: [
      "Unlimited Realtime Generations",
      "Up to ~24000 Image Generations/3 months",
      "Up to ~8000 Video Generations/3 months",
      "All styles and models",
      "General Commercial Terms",
      "Image Generation Visibility: Private",
      "16 Concurrent Generations",
    ],
    highlight: false,
  },
];

export default function Premium() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 mt-24">
        <h2 className="text-5xl font-bold text-primary">Pricing Plans</h2>
        <p className="text-base mt-2 mb-10 max-w-xl mx-auto text-center font-semibold">Choose the best plan that fits your needs. Whether you're an individual creator or a high-demand professional, our flexible pricing options ensure you get the best value for your AI-generated content.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-8xl">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={cn(
              "rounded-xl p-6 shadow-lg transition-all duration-300",
              plan.highlight
                ? "bg-[#3D2C8D] text-white border border-gray-300"
                : "bg-neutral-900 border border-gray-700"
            )}
          >
            <CardContent className="text-center text-white">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-3xl font-bold my-2">{plan.price} <span className="text-sm">/month</span></p>
              <p className="text-sm text-gray-400 mb-4">Billed quarterly</p>
              <p className="text-gray-400 text-sm">{plan.tokens}</p>

              <Button
                className={cn(
                  "w-full py-2 mt-4 rounded-md text-white transition-all duration-300",
                  plan.highlight ? "bg-black hover:bg-gray-900" : "bg-gray-800 hover:bg-gray-700"
                )}
              >
                Get Started
              </Button>

              <ul className="mt-6 space-y-2 text-sm text-gray-300 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    ✅ <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
