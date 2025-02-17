import { FaStar } from 'react-icons/fa';

const reviews = [
  { name: "Alice Johnson", review: "This platform exceeded my expectations! The UI is seamless, and I found exactly what I needed quickly. Highly recommended!", rating: 5, image: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Michael Smith", review: "Excellent service with great accessibility features. It’s easy to navigate, even for someone new to the platform.", rating: 4, image: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Sophia Brown", review: "A fantastic experience! The interface is intuitive, and the performance is smooth. I will be using this again.", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "Daniel Wilson", review: "I appreciate the effort put into making this component accessible and user-friendly. Well done!", rating: 4, image: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Emma Taylor", review: "The customization options are great! I was able to tweak the styles to fit my project perfectly.", rating: 5, image: "https://randomuser.me/api/portraits/women/5.jpg" },
  { name: "Liam Martinez", review: "I love the responsiveness of this component. It works well across all devices and screen sizes.", rating: 4, image: "https://randomuser.me/api/portraits/men/6.jpg" },
  { name: "Olivia Anderson", review: "Super easy to integrate into my React project. The documentation was clear and helpful!", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" },
  { name: "Noah Thomas", review: "Fast, lightweight, and effective. It provides a great user experience without unnecessary complexity.", rating: 4, image: "https://randomuser.me/api/portraits/men/8.jpg" },
  { name: "Isabella White", review: "I appreciate how simple yet powerful this component is. Keep up the great work!", rating: 5, image: "https://randomuser.me/api/portraits/women/9.jpg" },
  { name: "Ethan Harris", review: "This is exactly what I was looking for. The animations are smooth, and the UX is on point.", rating: 4, image: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Ava Lewis", review: "I had a small issue, but the support team was quick to respond and help. Excellent service!", rating: 3, image: "https://randomuser.me/api/portraits/women/11.jpg" },
  { name: "James Walker", review: "I've used many similar components, but this one stands out in terms of quality and ease of use.", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" },
  { name: "Charlotte Hall", review: "It’s great to see accessibility being prioritized. This makes a huge difference for many users.", rating: 4, image: "https://randomuser.me/api/portraits/women/13.jpg" },
  { name: "Benjamin Allen", review: "This component is a game-changer. It saved me hours of development time!", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
  { name: "Mia Scott", review: "Simple, elegant, and functional. Everything you need in a well-designed UI component.", rating: 4, image: "https://randomuser.me/api/portraits/women/15.jpg" }
];

export default function Reviews() {
  return (
    <div className="w-10/12 mx-auto py-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">What People Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-4">
              <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full mr-4" />
              <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
            </div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`text-yellow-500 ${i < review.rating ? 'fill-current' : ''}`} />
              ))}
            </div>
            <p className="text-gray-600 mt-2">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
