"use client";

import { useTranslation } from "../Translations/TranslationContext"
import { 
  Clock, 
  Users, 
  HeartHandshake, 
  MapPin, 
  CreditCard, 
  Calendar, 
  BellRing, 
  BarChart3 
} from "lucide-react";

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export function Features() {
  const  { t } = useTranslation(); // Use 'common' namespace for translations

  const features: Feature[] = [
    {
      icon: Clock,
      title: t("features.0.title"),
      description: t("features.0.description"),
    },
    {
      icon: Users,
      title: t("features.1.title"),
      description: t("features.1.description"),
    },
    {
      icon: HeartHandshake,
      title: t("features.2.title"),
      description: t("features.2.description"),
    },
    {
      icon: MapPin,
      title: t("features.3.title"),
      description: t("features.3.description"),
    },
    {
      icon: CreditCard,
      title: t("features.4.title"),
      description: t("features.4.description"),
    },
    {
      icon: Calendar,
      title: t("features.5.title"),
      description: t("features.5.description"),
    },
    {
      icon: BellRing,
      title: t("features.6.title"),
      description: t("features.6.description"),
    },
    {
      icon: BarChart3,
      title: t("features.7.title"),
      description: t("features.7.description"),
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-primary/10 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          {t("features_title")} {/* Fetches "Powerful Features" */}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-tr from-primary/20 to-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
