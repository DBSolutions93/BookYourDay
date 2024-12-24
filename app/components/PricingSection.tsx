// src/components/PricingSection.tsx

import Link from 'next/link';

type PricingPlan = {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
};

const plans: PricingPlan[] = [
  {
    name: 'Individual',
    price: '35 OMR/mo',
    features: [
      'Up to 20 appointments per month',
      'Basic calendar features',
      'Automated reminders',
      'Email support',
    ],
    buttonText: 'Choose Individual',
    buttonLink: '/signup/individual',
  },
  {
    name: 'Professional',
    price: '50 OMR/mo',
    features: [
      'Unlimited appointments',
      'Advanced calendar features',
      'Automated reminders',
      'Team management',
      'Priority support',
    ],
    buttonText: 'Choose Professional',
    buttonLink: '/signup/professional',
  },
  {
    name: 'Custom',
    price: 'Contact Us',
    features: [
      'All Professional features',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 support',
      'Multi-location management',
    ],
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12 bg-gradient-to-b from-white to-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-primary text-center mb-8">Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="w-full max-w-sm bg-white border border-primary rounded-lg shadow-lg p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-primary mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-secondary mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-accent mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.buttonLink}
                className={`block text-center px-4 py-2 mt-auto bg-gradient-to-r from-primary to-secondary text-white rounded hover:from-secondary hover:to-primary transition ${
                  plan.name === 'Custom' ? 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white' : ''
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
