import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    { question: "Is it accessible?", answer: "Yes. It adheres to the WAI-ARIA design pattern and ensures compatibility with screen readers, keyboard navigation, and other assistive technologies. This allows users with disabilities to interact with the content seamlessly and improves the overall usability of the platform." },
    { question: "How does it work?", answer: "You just need to click on the question to view the answer. When you click on a question, the accordion expands to reveal the corresponding answer while collapsing any previously opened question, ensuring a clean and organized view. This improves user experience by making information easily accessible without overwhelming the user with excessive content all at once." },
    { question: "Can I use it for free?", answer: "Yes, it is completely free to use. You don't need to pay any subscription fee or purchase a license to access its features. Additionally, it is open-source, meaning you can modify the code and customize it to suit your specific needs without any restrictions." },
    { question: "Is it customizable?", answer: "Yes, you can modify styles and behaviors as needed. You have full control over the appearance, including colors, typography, spacing, and animations. Additionally, you can extend the functionality by integrating it with other components or adding custom behaviors based on your requirements." },
    { question: "What technologies are used in this component?", answer: "This accordion component is built using modern web technologies, including React and Tailwind CSS. React enables dynamic and efficient UI rendering, while Tailwind CSS provides a utility-first approach for styling, ensuring flexibility and ease of customization. The component also follows best practices for accessibility and performance optimization." },
    { question: "Can I integrate this into an existing project?", answer: "Yes, this component is designed to be modular and can be easily integrated into any existing React project. You just need to import the component and use it within your application's structure. Since it follows a lightweight and reusable architecture, it does not introduce unnecessary dependencies or affect the existing functionality of your project." },
    { question: "Does it support nested accordions?", answer: "Yes, you can nest accordions within each other to create a hierarchical structure of questions and answers. This is particularly useful for FAQs with multiple subtopics, allowing users to navigate through detailed information in an organized manner without cluttering the interface." }
  ];
  
  export default function QnA() {
    return (
      <div className="w-10/12 mx-auto grid grid-cols-12 gap-12 py-16">
        <div className="col-span-4 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-primary leading-tight">
            Have questions? <br />
            We have answers!
          </h1>
          <p className="text-lg font-medium mt-4 text-gray-600">
            Want to know more? You can email us anytime at
            <span className="text-primary font-semibold"> support@example.com</span>
          </p>
        </div>
  
        <div className="col-span-8">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-4 border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <AccordionTrigger className="bg-white px-6 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100 transition-all duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    );
  }