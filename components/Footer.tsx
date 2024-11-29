"use client";
// components/Footer.jsx
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-fresh dark:bg-gray-900 font-black ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                    <a href="/" className="block w-[180px] h-[150px] animate-bounce"> {/* Set a fixed width for the logo */}
            <Image 
              src="/images/TDMLOGO.png" // Path to the logo in the public folder
              alt="Brand Logo"
              width={300} // Fixed width for the logo
              height={80} // Fixed height to ensure it doesn't affect the navbar size
              className="object-contain" // Ensures the image scales properly within the box
            />
          </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-black text-gray-900 uppercase dark:text-white"> </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">Expertise</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">Testimonials</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"> </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">LOCATION</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">JUBA TOWN,<br /> PEOPLE&apos;S BANK BUILDING,<br /> 2nD FLOOR</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"> </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">CONTACTS</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">(+211) 919 985553 <br /> 925 747575</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-800">© 2024 <a href="/" className="hover:underline">TDM SERVICE & INVESTMENTS</a>. All Rights Reserved.</span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaFacebookF className="w-4 h-4" aria-hidden="true" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaDiscord className="w-4 h-4" aria-hidden="true" />
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaTwitter className="w-4 h-4" aria-hidden="true" />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaGithub className="w-4 h-4" aria-hidden="true" />
                            <span className="sr-only">GitHub page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
