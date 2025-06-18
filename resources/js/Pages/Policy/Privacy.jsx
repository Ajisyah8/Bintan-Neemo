import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FDF6E3] min-h-screen font-montserrat text-gray-800 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to us. This privacy policy explains how we collect,
          use, and protect your information when you use our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, phone number, and email
          when you contact us, book a trip, or interact with our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          Your information is used solely to provide better service, respond to inquiries,
          process bookings, and improve our website experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
        <p className="mb-4">
          We take appropriate measures to ensure the safety of your data and prevent
          unauthorized access or disclosure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p className="mb-4">
          We may use trusted third-party services (e.g., WhatsApp) to process communication.
          These services may have access to your data only to perform specific tasks.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Consent</h2>
        <p className="mb-4">
          By using our website, you consent to the terms outlined in this privacy policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. All changes will be posted
          on this page.
        </p>

        <p className="text-sm text-gray-600 mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
