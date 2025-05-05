import React from 'react';
import Header from './Header';
export default function Visit() {
  // Define your physical address
  const address = '123 Museum Lane, Noida, Uttar Pradesh, India';
  // Generate an embeddable Google Maps URL
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  return (
    <div className="bg-[#fcf6eb] text-[#bf9347] overflow-x-hidden min-h-screen">
      <Header activeTab={""} />
      <div className="max-w-3xl mx-auto py-12 px-4 space-y-8">
        <h1 className="text-4xl font-serif text-gray-900">
          Visit Us
        </h1>
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700">Our Address</h2>
          <p className="text-gray-600">{address}</p>
        </div>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Our Location on Google Maps"
            src={mapSrc}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="text-sm text-gray-500">
          For any on-site consultation or private tours, please contact us via the <a />
          <a href="/contact" className="text-indigo-600 hover:underline">
            Contact
          </a> page to coordinate your visit.
        </p>
      </div>
    </div>
  );
}
