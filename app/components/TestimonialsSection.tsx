// src/components/TestimonialsSection.tsx
import Image from 'next/image';

type Testimonial = {
  name: string;
  role: string;
  photo: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Jane Doe',
    role: 'Business Owner',
    photo: '/images/testimonial1.jpg',
    message: 'BOOKYOURDAY has transformed the way I manage appointments. It’s intuitive and reliable!',
  },
  {
    name: 'John Smith',
    role: 'Freelancer',
    photo: '/images/testimonial2.jpg',
    message: 'The automated reminders have significantly reduced my no-show rate. Highly recommend!',
  },
  {
    name: 'Emily Johnson',
    role: 'Team Manager',
    photo: '/images/testimonial3.jpg',
    message: 'Managing my team’s schedules has never been easier. BOOKYOURDAY is a game-changer.',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">What Our Users Say</h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start">
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full mr-6 mb-4 md:mb-0 object-cover"
              />
              <div>
                <p className="text-gray-600 mb-2">{testimonial.message}</p>
                <p className="text-primary font-medium">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
