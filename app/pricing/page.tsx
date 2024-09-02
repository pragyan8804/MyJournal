import React from 'react';
import Navbar from '@/components/Navbar';
import PricingCard from '@/components/cards/pricing-card';
import Footer from '@/components/Footer';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Free',
      description: 'Perfect for trying out our app with basic features.',
      price: 'Free',
      features: ['One entry per day', 'One journal', 'Basic support'],
      buttonText: 'Sign Up',
      href: '/login',
      isHighlighted: true,
    },
    {
      title: 'Premium',
      description: 'For those who want the full journaling experience.',
      price: '₹0 /month',
      features: [
        'Multiple entries in one journal',
        'Create multiple journals',
        'Audio recordings',
        'Priority support',
        'Personalized stats',
      ],
      buttonText: 'Get started',
      href: '/login',
      isHighlighted: false,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="h-[85vh] flex flex-col justify-center items-center bg-slate-100 dark:bg-slate-950">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-slate-800 dark:text-slate-100">
              Designed for individuals and teams
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Choose a plan that suits your needs and start journaling with ease.
            </p>
          </div>
        </div>
      </section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex justify-center items-center -mt-32 dark:text-slate-100">
        <div className="space-y-8 lg:grid md:grid-cols-2 sm:gap-6 xl:gap-5 lg:space-y-0">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
