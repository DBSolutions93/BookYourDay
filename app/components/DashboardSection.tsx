// src/components/DashboardSection.tsx
import Image from 'next/image';

const DashboardSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <Image
              src="/light-booking.png"
              alt="Dashboard Example"
              width={1000}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
