"use client";

import { useTranslation } from "../Translations/TranslationContext"

type Testimonial = {
  name: string;
  role: string;
  photo: string;
  message: string;
};

const TestimonialsSection = () => {
  const  {t } = useTranslation();

  // Fetch testimonials from translations
  const testimonials = t("testimonials") as unknown as Testimonial[];


  return (
    <section id="testimonials" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          {t("testimonials_title")}
        </h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start"
            >
              {/* <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full mr-6 mb-4 md:mb-0 object-cover"
              /> */}
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
