import React from "react";

export default function SalesAndRefunds() {
  return (
    <div className="min-h-screen bg-[#FDF6E3] font-montserrat px-6 py-12 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Sales and Refunds Policy</h1>

        <p className="mb-4 text-sm">Last updated: June 2, 2025</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Booking Confirmation</h2>
        <p className="mb-4">
          All bookings made through our platform are considered confirmed once payment is successfully processed. A confirmation message will be sent via WhatsApp or email.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Payment Terms</h2>
        <p className="mb-4">
          Payments must be made in full at the time of booking. We accept various payment methods including QRIS and bank transfers.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Cancellations</h2>
        <p className="mb-4">
          Cancellations made more than 7 days prior to the trip date are eligible for a full refund. Cancellations within 7 days are non-refundable unless due to exceptional circumstances.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Refund Process</h2>
        <p className="mb-4">
          Refunds (if applicable) will be processed within 7–10 business days to the original method of payment. A small administrative fee may apply.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. No-Show Policy</h2>
        <p className="mb-4">
          Customers who do not arrive on the scheduled date without prior notice are not eligible for refunds.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact for Refunds</h2>
        <p className="mb-4">
          To request a refund or for assistance, please contact our support team via WhatsApp at <a className="text-blue-600 underline" href="https://wa.me/6285356282470">+62 853-5628-2470</a>.
        </p>
      </div>
    </div>
  );
}