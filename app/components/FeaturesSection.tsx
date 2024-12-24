
import { 
  Clock, 
  Users, 
  HeartHandshake, 
  MapPin, 
  CreditCard, 
  Calendar, 
  BellRing, 
  BarChart3 
} from 'lucide-react';

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Clock,
    title: 'Provide online bookings 24/7',
    description: 'A scheduling app keeps your business available for booking 24/7, allowing your customers to book at their convenience. Provide an exceptional booking experience and gain more loyal customers.'
  },
  {
    icon: Users,
    title: 'Organize employees with flexibility',
    description: 'Create flexible and specific schedules for your employees. Manage all staff calendars from one dashboard or allow them to self-schedule.'
  },
  {
    icon: HeartHandshake,
    title: 'Take care of your customers',
    description: 'BookYourDay\'s CRM enables you to create customer lists and maintain customer data. Learn about your customers\' favorite services, send them birthday greetings or loyalty coupons, and provide the best possible customer experience.'
  },
  {
    icon: MapPin,
    title: 'Manage multi-location business',
    description: 'If you have more than one business location, you don\'t need a different tool for each one. Manage all your locations with BookYourDay appointment scheduling app and have the entire business organization in one place.'
  },
  {
    icon: CreditCard,
    title: 'Get paid online',
    description: 'Accept online payments through secure payment gateways, automatically send invoices, and easily receive payment for your services, all safely and on time.'
  },
  {
    icon: Calendar,
    title: 'Sync your calendars',
    description: 'Connect your Outlook or Google Calendar with BookYourDay and have a single view of all your booked appointments. Calendar sync helps you avoid double bookings and scheduling conflicts.'
  },
  {
    icon: BellRing,
    title: 'Reduce no shows',
    description: 'Don\'t waste time on manual text reminders. Send automated email, SMS or WhatsApp reminders to your customers before an appointment and reduce no-shows to a great extent.'
  },
  {
    icon: BarChart3,
    title: 'Gain insight into business performance',
    description: 'With a single glance at BookYourDay\'s dashboard, you can track your business occupancy, returning customer rate, most in-demand employees and services, and view your earnings.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-primary/10 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Powerful Features</h2>
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
  )
}
