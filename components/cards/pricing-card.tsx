import React from 'react';
import Link from 'next/link';

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  href: string;
  isHighlighted?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  buttonText,
  href,
  isHighlighted = false,
}) => {
  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-sm text-center text-slate-900 dark:text-slate-100 rounded-3xl border shadow-xl xl:p-8 
      ${isHighlighted ? 'bg-slate-100 dark:bg-slate-900 dark:border-slate-600' : 'bg-slate-200 dark:bg-slate-800 dark:border-slate-600'}`}
    >
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {description}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="text-5xl font-extrabold">{price}</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:ring-slate-200 font-medium rounded-full text-sm py-2.5 text-center dark:text-white dark:focus:ring-slate-900"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default PricingCard;
