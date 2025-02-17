import Banner from "@/app/_component/Banner";
import AiTools from "./_component/AiTools";
import AiShowCase from "./_component/AiShowCase";
import Premium from "./_component/Premium";
import QnA from "./_component/QnA";
import Reviews from "./_component/Review";

export default function page() {
  return (
    <div>
      <Banner />
      <AiTools />
      <AiShowCase />
      <Premium />
      <QnA />
      <Reviews />
    </div>
  )
}
