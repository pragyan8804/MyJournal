import Footer from '@/components/Footer';
import React from 'react';

export default function TermsOfService() {
  return (
    <>
    <div className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          By accessing or using MyJournal, you agree to the following terms and conditions. Please read them carefully.
        </p>
        
        <ul className="list-disc space-y-4 pl-6">
          <li>
            <h2 className="text-xl font-semibold">Use of Our Services</h2>
            <p>You must comply with these terms and use our services in accordance with the law. You agree not to misuse our platform or interfere with its operation.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Account Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account information and for any activity that occurs under your account.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Intellectual Property</h2>
            <p>All content on the platform, including text, graphics, logos, and images, is the property of MyJournal or its content creators and is protected by copyright law.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Termination of Services</h2>
            <p>We reserve the right to suspend or terminate your account if you violate these terms or engage in any unlawful or harmful activities.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Changes to the Terms</h2>
            <p>We may modify these terms at any time. Continued use of the platform signifies your acceptance of the updated terms.</p>
          </li>
        </ul>
        
        <p className="mt-6">If you have any questions regarding these Terms of Service, feel free to contact us at support@myjournal.com.</p>
      </div>
    </div>
    <Footer />
    </>
  );
}
