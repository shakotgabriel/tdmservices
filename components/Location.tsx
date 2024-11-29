"use client";
import React from 'react';

interface Office {
  name: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

const officeLocation: Office = {
  name: 'Headquarters',
  address: '123 Main Street, Juba, South Sudan',
  phone: '+211 912 345 678',
  email: 'hq@example.com',
  workingHours: 'Mon - Fri, 9:00 AM - 5:00 PM',
};

const Location = () => {
  return (
    <section className="bg-gradient-to-r from-red-200 to-amber-100 p-8 rounded-lg ">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
        Our Office Location
      </h2>
      <div className="max-w-sm mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {officeLocation.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <strong>Address:</strong> {officeLocation.address}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <strong>Phone:</strong> {officeLocation.phone}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            <strong>Email:</strong> <a href={`mailto:${officeLocation.email}`} className="text-blue-500">{officeLocation.email}</a>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Working Hours:</strong> {officeLocation.workingHours}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
