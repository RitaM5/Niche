import React from 'react';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='my-container py-12 font-poppins'>
            <div className='w-full text-left'>
                <div className="global-nav__logo mx-auto lg:mx-0 w-52 text-[#298541]"><a title="Niche" href="https://www.niche.com/" data-after-sherlock="true" className="text-green-600" aria-label="Niche Home"><svg className="niche-logo-horizontal" viewBox="0 0 572 112" xmlns="http://www.w3.org/2000/svg">

                    <path d="M428 34.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM428 56.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM428 78.9l.4-.3-.4.3c1.9 1.5 4.1 2.9 6.7 4.2 5.9 3 10.7 4.7 17.6 4.7 7.5 0 14.2-2.8 20.2-5.3l.3-.1c4.1-1.7 9.8-4 15.7-4 5.3 0 10.3 1.4 16.5 4.6 1.4.7 2.6 1.5 3.7 2.1 1.8 1.1 3 1.8 4.1 1.8 1.6 0 2.6-.9 2.6-2.5 0-1.1-.5-1.9-1.8-3-1.9-1.6-4.6-3-6.5-4-6.5-3.2-12-4.6-18.4-4.6-7.4 0-12.3 2.1-17.5 4.3-5.2 2.2-12.9 5.2-19 5.2-5.5 0-9.3-1.7-13.3-3.6-2.9-1.3-4.9-2.7-6.3-3.7-1.4-1-2.4-1.6-3.3-1.6-1.9 0-2.9 1-2.9 2.8 0 1.4 1.2 2.3 1.6 2.7zM377 16.5c-22.6 0-41 18.2-41 40.8S354.4 98 377 98s41-18.2 41-40.8-18.4-40.7-41-40.7zm0 76.2c-19.4 0-35.1-15.9-35.1-35.4s15.7-35.4 35.1-35.4 35.1 15.9 35.1 35.4-15.7 35.4-35.1 35.4z" fill="#298541"></path>

                    <path d="M83.3 23.9c-2.7 0-3.9 1.2-3.9 4.2v46.3L35.5 25.8c-.1-.1-1.3-1.9-3.8-1.9-2.6 0-3.8 1.5-3.8 4.6v56.1c0 2.6 1.4 4.1 3.8 4.1s3.9-1.5 3.9-4V37.1l43.5 49c1.7 1.9 2.9 2.5 4.7 2.5 2.2 0 3.3-1.3 3.3-4V28.1c0-2.8-1.3-4.2-3.8-4.2z" fill="#298541" transform="matrix(.64 0 0 .65 340 20.8)" stroke="#298541" stroke-width="2"></path>

                    <path d="M55.3 23.9c-2.7 0-3.9 1.2-3.9 4.2v46.3L7.5 25.8c-.1-.1-1.3-1.9-3.8-1.9-2.6 0-3.8 1.5-3.8 4.6v56.1c0 2.6 1.4 4.1 3.8 4.1s3.9-1.5 3.9-4V37.1l43.5 49c1.7 1.9 2.9 2.5 4.7 2.5 2.2 0 3.3-1.3 3.3-4V28.1c0-2.8-1.3-4.2-3.8-4.2zM83.3 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3zM160.6 74.1c-.9 0-2.2.8-3.9 2-3.7 2.4-9.8 6.5-18.6 6.5-14.5 0-24.7-13.9-24.7-26.4 0-15.8 12.7-26.4 24.7-26.4 8.3 0 13.2 3.9 16.7 6.8 1.9 1.5 3.4 2.8 4.9 2.8 2.2 0 3.5-1.2 3.5-3.2 0-3.7-11.9-13.3-25-13.3-17.9 0-32.4 14.9-32.4 33.2 0 18.1 14.8 33.4 32.3 33.4 5.8 0 12.3-1.5 17.7-4.2 4.9-2.5 8-5.4 8-7.6 0-2.2-1.3-3.6-3.2-3.6zM187.8 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3zM237.3 23.8c-2.4 0-3.8 1.6-3.8 4.2v56.5c0 2.5 1.6 4.3 3.9 4.3 1.9 0 3.8-1.4 3.8-4.4V28.1c0-2.7-1.4-4.3-3.9-4.3z" fill="#298541"></path>

                    <path fill="#298541" d="M187 52.5h50v7h-50z"></path>

                    <path fill="#298541" d="M187 52.5h50v7h-50zm119.5 29H269v-22h31c3 0 4.3-1.7 4.3-3.5 0-1.6-1.2-3.4-4.4-3.4H269V31h37.5c3.1 0 4.2-1.8 4.2-3.6 0-1-.4-3.3-4.2-3.3h-41.1c-2.6 0-4.2 1.5-4.2 4.2v56.1c0 2.7 1.2 3.9 3.9 3.9h41.4c2.6 0 4.2-1.3 4.2-3.6.1-1.9-1.5-3.2-4.2-3.2z"></path>

                </svg></a></div>
            </div>
            <div className=' border-b-4 border-gray-300 my-3'></div>
            <div className='py-3 lg:flex  gap-36'>
                <div className=' space-y-7'>
                    <ul className=' space-y-3 text-blue-600'>
                        <li className='hover:underline text-lg'>About Us</li>
                        <li className='hover:underline text-lg'>Niche For Schools</li>
                        <li className='hover:underline text-lg'>Niche For Colleges</li>
                        <li className='hover:underline text-lg'>Blog</li>
                        <li className='hover:underline text-lg'>Resource Center</li>
                        <li className='hover:underline text-lg'>Contact Niche</li>
                        <li className='hover:underline text-lg'>Data</li>
                        <li className='hover:underline text-lg'>Careers</li>
                    </ul>
                    <div className='flex gap-3'>
                        <FaFacebook size={32} color="#1877f2" />
                        <FaFacebookMessenger size={32} color="#00bfff" />
                        <FaTwitter size={32} color="#1da1f2" />
                    </div>
                    <div className='flex gap-3'>
                        <FaWhatsapp size={32} color="#25d366" />
                        <FaYoutube size={32} color="#ff0000" />
                        <FaInstagram size={32} color="#bc2a8d" />f
                    </div>
                    <p className='w-full'>©2023 Niche.com Inc.</p>
                </div>
                <div className='mt-10 lg:mt-0 w-full'>
                    <p className='text-[20px] font-semibold'>Discover the schools, companies, and neighborhoods that are right for you.</p>
                    <div className='text-[#298541] text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8 gap-4'>
                        <p>K-12</p>
                        <p>Colleges</p>
                        <p>Places to Live</p>
                        <p>Graduate Schools</p>
                    </div>
                    <div className=' space-y-6'>
                        <p className=' border-b-4'></p>
                        <p className='text-lg text-center'>Do you work for a school or college? <span className='text-blue-600 hover:underline'>Claim Your School</span></p>
                        <p className=' border-b-4'></p>
                    </div>
                    <div className='grid lg:grid-cols-3 gap-6 lg:gap-0 mt-5'>
                        <ul className=' space-y-3'>
                            <li className='hover:underline text-lg'>About Us</li>
                            <li className='hover:underline text-lg'>Niche For Schools</li>
                            <li className='hover:underline text-lg'>Niche For Colleges</li>
                            <li className='hover:underline text-lg'>Blog</li>
                            <li className='hover:underline text-lg'>Resource Center</li>
                            <li className='hover:underline text-lg'>Contact Niche</li>
                            <li className='hover:underline text-lg'>Data</li>
                            <li className='hover:underline text-lg'>Careers</li>
                        </ul>
                        <ul className=' space-y-3 '>
                            <li className='hover:underline text-lg'>About Us</li>
                            <li className='hover:underline text-lg'>Niche For Schools</li>
                            <li className='hover:underline text-lg'>Niche For Colleges</li>
                            <li className='hover:underline text-lg'>Blog</li>
                            <li className='hover:underline text-lg'>Resource Center</li>
                            <li className='hover:underline text-lg'>Contact Niche</li>
                            <li className='hover:underline text-lg'>Data</li>
                            <li className='hover:underline text-lg'>Careers</li>
                        </ul>
                        <ul className=' space-y-3'>
                            <li className='hover:underline text-lg'>About Us</li>
                            <li className='hover:underline text-lg'>Niche For Schools</li>
                            <li className='hover:underline text-lg'>Niche For Colleges</li>
                            <li className='hover:underline text-lg'>Blog</li>
                            <li className='hover:underline text-lg'>Resource Center</li>
                            <li className='hover:underline text-lg'>Contact Niche</li>
                            <li className='hover:underline text-lg'>Data</li>
                            <li className='hover:underline text-lg'>Careers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;