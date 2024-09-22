import Footer from '@/components/Footer';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <>
    <div className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy outlines the types of personal information we collect and how we use, disclose, and protect that information.
        </p>
        
        <ul className="list-disc space-y-4 pl-6">
          <li>
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <p>We collect personal information such as your name, email address, and profile image when you sign in using Google OAuth.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">How We Use Your Information</h2>
            <p>Your information is used to personalize your experience, improve our services, and allow you to access our platform securely.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Data Security</h2>
            <p>We implement security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Sharing of Information</h2>
            <p>We do not share your personal information with third parties except as required by law or with your explicit consent.</p>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. You will be notified of significant changes through our platform.</p>
          </li>
        </ul>
        
        <p className="mt-6">If you have any questions regarding this Privacy Policy, feel free to contact us at support@myjournal.com.</p>
      </div>
    </div>
    <Footer />
    </>
  );
}
