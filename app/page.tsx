// src/pages/index.tsx
import Head from "next/head";
import Layout from "./components/Layout";
import { Hero } from "./components/HeroSection";
import DashboardSection from "./components/DashboardSection";
import { Features } from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>BOOKYOURDAY - Simplify Your Scheduling</title>
        <meta
          name="description"
          content="Manage your appointments effortlessly with BOOKYOURDAY, the intuitive scheduling software designed to enhance your productivity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="BOOKYOURDAY - Simplify Your Scheduling"
        />
        <meta
          property="og:description"
          content="Manage your appointments effortlessly with BOOKYOURDAY, the intuitive scheduling software designed to enhance your productivity."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://www.bookyourday.com" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Add more as needed */}
      </Head>
      <Hero />
      <DashboardSection />
      <Features />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
    </Layout>
  );
};

export default Home;
