import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const Home = () => {
    return (
        <div className=' font-poppins'>
            <div className='h-full  overflow-hidden relative  bg-[#102f25] grid lg:grid-cols-2 grid-cols-1 items-center text-center lg:pt-20 pt-36'>
                <div className='w-full h-full'>
                    <img src="https://assets.niche.com/static/home/hero-lg.webp" className=' min-h-full' alt="" srcset="" />
                </div>
                <div className=' bg-[#102f25]'>
                    <div className='py-14 space-y-2 text-white relative'>
                        <p className='text-[20px] font-semibold'>FIND THE SCHOOL</p>
                        <h1 className='text-3xl font-semibold'>THAT FITS YOU BEST</h1>
                        <svg className='w-32 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="#298541"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg>

                        <p className='lg:w-1/2 w-full text-lg mx-auto text-center'>
                            Finding the right school shouldn’t be hard. From K‑12 to college to grad school, we make it easy to discover and connect with the best ones for you.
                        </p>
                        <h3 className='text-lg font-semibold pt-4'>
                            START YOUR SEARCH
                        </h3>
                        <div className='md:inline-flex gap-3'>
                            <button type="button" className='px-4 py-2 bg-[#298541] hover:bg-[#234a3d]'>K-12 Schools</button>
                            <button type="button" className='px-8 py-2 ml-2 md:ml-0 bg-[#298541] hover:bg-[#234a3d]'>Colleges</button>
                            <button type="button" className='px-4 py-2 mt-2 ml-2 md:mt-0 md:ml-0 bg-[#298541] hover:bg-[#234a3d]'>Grad Schools</button>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45" className="absolute bottom-0  w-[100%] left-0 wave-svg">
                    <path fill='#FBF5F2' d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.42,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path>
                </svg>
            </div>
            <section className='bg-[#FBF5F2]'>
                <div className='h-full my-container py-20 grid lg:grid-cols-2 grid-cols-1 items-center gap-16'>
                    <div className='space-y-8 lg:order-1 order-2'>
                        <img className='w-[350px]' src="https://assets.niche.com/static/direct-admissions-logo.webp" alt="" srcset="" />
                        <h1 className='text-4xl font-semibold text-[#102f25]'>Get accepted without an<br />application.</h1>
                        <p className='md:w-[90%] text-lg'>
                            No application. No waiting.<br />
                            With Direct Admissions, colleges can accept you based on<br /> the information in your Niche Profile.
                        </p>
                        <div className='text-white md:inline-flex gap-3'>
                            <p>
                                <button className=' px-8 py-2 rounded-3xl bg-[#102f25] font-semibold'>Create a Niche Profile</button>
                            </p>
                            <p className='mt-3 md:mt-0'>
                                <button className='px-4 py-2 rounded-3xl border border-green-900 text-[#102f25] font-semibold hover:bg-[#102f25]'>Learn More</button>
                            </p>
                        </div>
                    </div>
                    <div className='lg:order-2 order-1 h-full'>
                        <img className='w-[600px] h-full' src="https://assets.niche.com/static/home/home-da.webp" alt="" srcset="" />
                    </div>
                </div>
            </section>
            <section className='bg-[#FBF5F2] relative'>
                <div className='font-poppins my-container py-32 lg:py-52'>
                    <div className=' space-y-10'>
                        <div className='text-center space-y-6'>
                            <h2 className='text-[20px] font-medium text-[#102f25]'>FIND YOUR NICHE</h2>
                            <h1 className='text-4xl font-semibold text-[#102f25]'>Your search is unique.<br />
                                Just like you.</h1>
                            <div className="home-squiggle"><svg className=' w-32 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="#102f25"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg></div>
                            <p className='lg:w-1/2 mx-auto text-lg'>
                                We give you all of the data, reviews, and insights in one place to make your search as easy as possible.
                            </p>
                        </div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-0 text-center'>
                            <div className=' space-y-4'>
                                <img className='w-28 mx-auto' src="https://assets.niche.com/static/home/why-icon-1.svg" alt="" srcset="" />
                                <h2 className='text-[#298541] text-2xl font-semibold'>NO HEAVY LIFTING</h2>
                                <p className='lg:w-1/2 mx-auto text-lg pt-5'>
                                    We analyze the data so you don't have to.
                                </p>
                            </div>
                            <div className='space-y-3'>
                                <img className='w-28 mx-auto' src="https://assets.niche.com/static/home/why-icon-2.svg" alt="" srcset="" />
                                <h2 className='text-[#298541] text-2xl font-semibold'>THE GOOD, THE BAD,<br /> & THE HONEST</h2>
                                <p className='md:w-80 mx-auto text-lg '>
                                    Our user reviews let you hear directly from families and students to give you an honest and holistic view.
                                </p>
                            </div>
                            <div className='space-y-3'>
                                <img className='w-28 mx-auto' src="https://assets.niche.com/static/home/why-icon-3.svg" alt="" srcset="" />
                                <h2 className='text-[#298541] text-2xl font-semibold'>LIKE A GLOVE</h2>
                                <p className='lg:w-1/2 mx-auto text-lg pt-5'>
                                    We personalize your search based on what's most important to you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <svg className="bottom-0 left-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1512 3578.12"><path fill='#fff' d="M1512,556.42s-38-103-214-151.21C1135.43,360.67,1019.11,430,873,371c-141.22-57-70.34-103.33-199.7-163.65-155.48-72.5-326.65,9.32-412.23-72.5C146.07,25,0,.23,0,.23V3578.35H1512Z"></path></svg> */}
            </section>
            <section className=' bg-[#fff] relative'>
                <div className='my-container '>
                    <div className=' relative lg:top-52 ml-7'>
                        <h3 className='text-[20px] text-[#298541] pt-4'>
                            REAL NICHE STORIES
                        </h3>
                        <p className='text-[#102f25] text-4xl font-semibold mt-6'>
                            Niche has helped millions<br /> of students and families<br /> find thuir fir.
                        </p>
                    </div>
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        stopOnHover={true}
                        className=''
                        preventMovementUntilSwipeScrollTolerance={true} and swipeScrollTolerance={50}>
                        <div>
                            <div className="left-0  relative h-full w-full">
                                <div className='lg:flex  items-center gap-8 lg:px-36'>
                                    <div className='lg:order-1 order-2 ml-2 space-y-5 w-full p-4 '>
                                        <FaQuoteLeft className='relative lg:right-16 lg:top-16' size={32} color="#333" />
                                        <p className='text-lg text-left lg:w-80 lg:pt-8'>
                                            <span>
                                                When I was applying to college, I had no idea what I was looking for. Niche helped me explore different schools and see breakdowns on many aspects of their programs! Thanks to Niche, I found a school that was a perfect fit!
                                            </span>
                                        </p>
                                        <FaQuoteRight className=' relative lg:left-56 lg:bottom-8' size={32} color="#333" />
                                    </div>
                                    <div className='lg:order-2 order-1 pt-44 lg:pt-0'>
                                        <div className='lg:block hidden '>
                                            <img style={{ width: '300px' }} className='relative left-36' src="https://assets.niche.com/static/home/abby-2.webp" alt="" srcset="" />
                                        </div>
                                        <div className=''>
                                            <img className='relative bottom-32' style={{ width: '400px' }} src="https://assets.niche.com/static/home/abby-1.webp" alt="" srcset="" />
                                        </div>
                                        <div className=' lg:block hidden'>
                                            <img className=' relative bottom-80 left-36' style={{ width: '130px' }} src="https://assets.niche.com/static/home/stamp-found.svg" alt="" srcset="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="left-0 relative h-full w-full">
                                <div className='lg:flex  items-center gap-8 lg:px-36'>
                                    <div className='lg:order-1 order-2 ml-2 space-y-5 w-full p-4 '>
                                        <FaQuoteLeft className='relative lg:right-16 lg:top-16' size={32} color="#333" />
                                        <p className='text-lg text-left lg:w-80 lg:pt-8'>
                                            <span>
                                                When I was applying to college, I had no idea what I was looking for. Niche helped me explore different schools and see breakdowns on many aspects of their programs! Thanks to Niche, I found a school that was a perfect fit!
                                            </span>
                                        </p>
                                        <FaQuoteRight className=' relative lg:left-56 lg:bottom-8' size={32} color="#333" />
                                    </div>
                                    <div className='lg:order-2 order-1 pt-44 lg:pt-0'>
                                        <div className='lg:block hidden '>
                                            <img style={{ width: '300px' }} className='relative left-36' src="https://assets.niche.com/static/home/dayna-2.webp" alt="" srcset="" />
                                        </div>
                                        <div className=''>
                                            <img className='relative bottom-32' style={{ width: '400px' }} src="https://assets.niche.com/static/home/dayna-1.webp" alt="" srcset="" />
                                        </div>
                                        <div className=' lg:block hidden'>
                                            <img className=' relative bottom-96 right-32 lg:block hidden' style={{ width: '120px' }} src="https://assets.niche.com/static/home/stamp-dayna.svg" alt="" srcset="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                {/* <svg className=" absolute bottom-0  left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1512 3578.12"><path fill='#237c3a' d="M1512,556.42s-38-103-214-151.21C1135.43,360.67,1019.11,430,873,371c-141.22-57-70.34-103.33-199.7-163.65-155.48-72.5-326.65,9.32-412.23-72.5C146.07,25,0,.23,0,.23V3578.35H1512Z"></path></svg> */}
            </section>
            <section className='bg-[#237c3a]'>
                <div className='my-container grid lg:grid-cols-2 lg:gap-72 gap-8 py-20'>
                    <div className=''>
                        <div className='bg-white w-32 text-center py-2 rounded-md text-lg font-semibold'>
                            <p>Your List 💚</p>
                        </div>
                        <div className='bg-white relative md:left-10 space-y-3 md:space-y-0 my-6 md:flex gap-4 items-center md:w-[480px] rounded-md  p-2'>
                            <div className=''>
                                <img className='w-12 h-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLQCy5lAPCqjOSj4qPr5URVbZbcyL79H0Mg&usqp=CAU" alt="" srcset="" />
                            </div>
                            <div className=' space-y-2'>
                                <h1>Stony Brook Univercity</h1>
                                <div className=' inline-flex gap-3 items-center'>
                                    <div className='bg-[#237c3a] w-6 h-6 rounded-full'></div>
                                    <div>
                                        <p className='w-44 border-b-4'></p>
                                        <p className='w-32 border-b-4 mt-3'></p>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <p className=' text-[50px]'>|</p>
                            </div>
                            <div>
                                <button className="bg-green-200 px-7 rounded-3xl py-1">Applied</button>
                            </div>
                        </div>
                        <div className='bg-white relative md:right-14 space-y-3 md:space-y-0 my-6 md:flex gap-4 items-center md:w-[480px] rounded-md  p-2'>
                            <div className=''>
                                <img className='w-12 h-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdreKYm4EM1Ofp0Ic-1flrKQQWXNSQOlfyNw&usqp=CAU" alt="" srcset="" />
                            </div>
                            <div className=' space-y-2'>
                                <h1>Pace Univercity</h1>
                                <div className=' inline-flex gap-3 items-center'>
                                    <div className='bg-[#237c3a] w-6 h-6 rounded-full'></div>
                                    <div>
                                        <p className='w-44 border-b-4'></p>
                                        <p className='w-32 border-b-4 mt-3'></p>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <p className=' text-[50px]'>|</p>
                            </div>
                            <div>
                                <button className="bg-blue-200 px-4 rounded-3xl py-1">Researching</button>
                            </div>
                        </div>
                        <div className='bg-white relative md:left-14 space-y-3 md:space-y-0 my-6 md:flex gap-4 items-center md:w-[480px] rounded-md  p-2'>
                            <div className=''>
                                <img className='w-12 h-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOyOErntGPrbWoF57Vz7J6Cjsi_g1sxeADw&usqp=CAU" alt="" srcset="" />
                            </div>
                            <div className=' space-y-2'>
                                <h1>Adelphi Univercity</h1>
                                <div className=' inline-flex gap-3 items-center'>
                                    <div className='bg-[#237c3a] w-6 h-6 rounded-full'></div>
                                    <div>
                                        <p className='w-44 border-b-4'></p>
                                        <p className='w-32 border-b-4 mt-3'></p>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <p className=' text-[50px]'>|</p>
                            </div>
                            <div>
                                <button className="bg-green-200 px-7 rounded-3xl py-1">Touring</button>
                            </div>
                        </div>
                    </div>
                    <div className='py-14 text-white relative space-y-6'>
                        <p className='text-[20px] font-semibold'>STAY ON TRACK</p>
                        <h1 className='text-3xl font-semibold'>Tools to <br /> organize your <br /> school search.</h1>
                        <svg className='w-40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="#fff"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg>

                        <p className='w-full text-lg text-left'>
                            We'll help you build your list, track your progress and get new recommendations as your search narrows.
                        </p>
                        <h3 className='text-lg font-semibold pt-4 underline underline-offset-8'>
                            Start Exploring
                        </h3>
                    </div>
                </div>
                <div className=' relative flex justify-center top-16 z-10'>
                    <img style={{ width: '150px' }} src="https://assets.niche.com/static/home/stamp-everything.svg" alt="" srcset="" />
                </div>
            </section>
            <section className=''>
                <div className='h-fulloverflow-hidden relative  grid lg:grid-cols-2 grid-cols-1 items-center text-center '>
                    <div className='py-20 bg-[#FBF5F2] lg:pl-36'>
                        <div className='py-20 my-container text-left text-[#237c3a] relative space-y-5 '>
                            <p className='text-[20px] font-semibold'>CHOOSE YOUR SCHOOL</p>
                            <h1 className='text-3xl font-semibold'>Everything you need to<br /> make your decision.</h1>
                            <svg className='w-32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="#298541"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg>

                            <p className='lg:w-80 w-full text-lg text-black text-left'>
                                With the information you care about on every school in America, we make it easy for you to compare schools and colleges to make your decision.
                            </p>
                            <h3 className='text-lg font-semibold pt-4 underline underline-offset-4'>
                                Compare K-12 Schools
                            </h3>
                            <h3 className='text-lg font-semibold pt-4 underline underline-offset-4'>
                                Compare Colleges
                            </h3>
                        </div>
                    </div>
                    <div className='py-20 bg-[#ff9800] h-full w-full'>
                        <div className=' grid lg:grid-cols-2 gap-24 mx-auto items-center px-4 md:w-[400px]'>
                            <div className="card card-compact w-full lg:w-[200px] mx-auto  bg-base-100 shadow-xl">
                                <figure><img className='w-full lg:h-[150px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3d2mej8qxlwHKxY3vzn-xnK4T4oWoH4cMA&usqp=CAU" alt="Shoes" /></figure>
                                <div className="card-body text-left space-y-3">
                                    <div className='bg-[#237c3a] w-6 h-6 rounded-full'></div>
                                    <h2 className="card-title">UCLA</h2>
                                    <div>
                                        <p className='text-lg'>Acceptance Rate</p>
                                        <h1 className='text-[#237c3a] text-3xl font-semibold'>12%</h1>
                                    </div>
                                    <div>
                                        <p className='text-lg'>Net Price</p>
                                        <h1 className='text-[#237c3a] text-3xl font-semibold'>15,718</h1>
                                    </div>
                                    <div>
                                        <p className='text-lg'>SAT Range</p>
                                        <h1 className='text-[#237c3a] text-3xl font-semibold'>1300-1530</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-compact w-full lg:w-[200px] mx-auto bg-base-100 shadow-xl">
                                <figure><img className='w-full lg:h-[150px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjd_UYav-z934mFX5a4gwQCghiD7CvZTacQ&usqp=CAU" alt="Shoes" /></figure>
                                <div className="card-body text-left space-y-3">
                                    <div className='bg-[#237c3a] w-6 h-6 rounded-full'></div>
                                    <h2 className="card-title">UC-Berkeley</h2>
                                    <div>
                                        <p className='text-lg'>Acceptance Rate</p>
                                        <h1 className='text-[#237c3a] text-3xl font-semibold'>13%</h1>
                                    </div>
                                    <div>
                                        <p className='text-lg'>Net Price</p>
                                        <h1 className='text-[#237c3a] text-3xl font-semibold'>17,718</h1>
                                    </div>
                                    <div>
                                        <p className='text-lg'>SAT Range</p>
                                        <h1 className='text-[#237c3a] text-3xl font-semibold'>1200-1530</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45" className="absolute bottom-0  w-[100%] left-0 wave-svg">
                        <path fill='#102f25' d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.42,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path>
                    </svg>
                </div>
            </section>
            <section className=' relative bg-[#102f25] text-white'>
                <div className='font-poppins my-container py-20'>
                    <div className=' space-y-10'>
                        <div className='text-center space-y-6'>
                            <h2 className='text-[20px] font-medium text-[#ff9800]'>FIND YOUR NICHE</h2>
                            <h1 className='text-4xl font-semibold '>Your search is unique.<br />
                                Just like you.</h1>
                            <div className="home-squiggle"><svg className=' w-32 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="#ff9800"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg></div>
                            <p className='lg:w-1/2 mx-auto text-lg'>
                                We give you all of the data, reviews, and insights in one place to make your search as easy as possible.
                            </p>
                        </div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-0 text-center'>
                            <div className='text-center hover:bg-[#234a3d] py-8 rounded-md'>
                                <img className='w-[220px] mx-auto' src="https://assets.niche.com/static/home/why-icon-1.svg" alt="" srcset="" />
                                <h2 className='text-[#298541] text-2xl ml-6 flex justify-center font-semibold underline underline-offset-4'>
                                    View Best Colleges
                                </h2>
                            </div>

                            <div className='text-center relative left-12 hover:bg-[#234a3d] py-8 rounded-md'>
                                <img className='w-[220px] mx-auto' src="https://assets.niche.com/static/home/why-icon-2.svg" alt="" srcset="" />
                                <h2 className='text-[#298541] text-2xl relative right-6 flex justify-center font-semibold underline underline-offset-4'>
                                    View Best Colleges
                                </h2>
                            </div>
                            <div className='text-center hover:bg-[#234a3d] py-8 rounded-md'>
                                <img className='w-[220px] mx-auto' src="https://assets.niche.com/static/home/why-icon-3.svg" alt="" srcset="" />
                                <h2 className='text-[#298541] ml-6 text-2xl flex justify-center font-semibold underline underline-offset-4'>
                                    View Best Colleges
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45"><path fill='#f4ece7' d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.41,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path></svg>
            </section>
            <section className='bg-[#f4ece7] relative'>
                <div className='h-full relative my-container grid lg:gap-16 lg:grid-cols-2 grid-cols-1 items-center text-center '>
                    <div className='py-20 '>
                        <div className='py-20 my-container text-left text-[#237c3a] relative space-y-5 '>
                            <p className='text-[20px] font-semibold'>PARTNER WITH NICHE</p>
                            <h1 className='text-3xl font-semibold'>For schools<br /> and colleges</h1>
                            <svg className='w-32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="#298541"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg>

                            <p className=' w-full text-lg text-black text-left'>
                                Are you a college or K-12 school representative? Learn more about how you can partner with Niche to connect with students and families throughout the school search process.
                            </p>
                            <h3 className='text-lg font-semibold pt-4 underline underline-offset-4'>
                                Claim Your School
                            </h3>
                            <button className='bg-[#237c3a] text-white px-4 py-3 rounded-md text-lg'>Learn More</button>
                        </div>
                    </div>
                    <div className=' h-full w-full relative lg:top-44'>
                        <div className=''>
                            <img style={{ width: '400px' }} className='mx-auto lg:mx-0' src="https://assets.niche.com/static/home/partner-dartmouth.webp" alt="" srcset="" />
                        </div>
                        <div className='lg:block hidden '>
                            <img className=' relative right-16 bottom-96' style={{ width: '130px' }} src="https://assets.niche.com/static/home/stamp-claim.svg" alt="" srcset="" />
                        </div>
                        <div className=' lg:block hidden'>
                            <img className=' relative bottom-80 left-60' style={{ width: '300px' }} src="https://assets.niche.com/static/home/partner-nazareth-prep.webp" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className='lg:px-48 py-20'>
                    <div className=' grid grid-cols-1 lg:grid-cols-3 items-center gap-4'>
                        <div className=''>
                            <p className='w-full border-b-4 border-gray-600'></p>
                        </div>
                        <div>
                            <p className='w-full text-center text-lg font-semibold'>Over 1,700 schools partner with Niche</p>
                        </div>
                        <div>
                            <p className='w-full border-b-4 border-gray-600'></p>
                        </div>
                    </div>
                    <div className='my-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center gap-12 lg:gap-6 lg:px-48'>
                        <div>
                            <img className='w-[150px] mx-auto' src="https://assets.niche.com/static/home/logo-phillips-andover.png" alt="" srcset="" />
                        </div>
                        <div>
                            <img className='w-[150px] mx-auto' src="https://assets.niche.com/static/home/logo-oregon.png" alt="" srcset="" />
                        </div>
                        <div>
                            <img className='w-[150px] mx-auto' src="https://assets.niche.com/static/home/logo-wash-jeff.png" alt="" srcset="" />
                        </div>
                        <div>
                            <img className='w-[150px] mx-auto' src="https://assets.niche.com/static/home/logo-marquette.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 45" className="absolute bottom-0  w-[100%] left-0 wave-svg">
                    <path fill='#d0e0ec' d="M2000,17.26a2.6,2.6,0,0,1-.4.49C1970.2,16.56,1970.41,5,1941,5s-29.42,12.75-58.84,12.75S1852.73,5,1823.31,5s-29.42,12.75-58.83,12.75S1735.06,5,1705.64,5s-29.42,12.75-58.83,12.75S1617.39,5,1588,5s-29.41,12.75-58.83,12.75S1499.72,5,1470.3,5s-29.41,12.75-58.83,12.75S1382.05,5,1352.64,5s-29.42,12.75-58.83,12.75S1264.39,5,1235,5s-29.42,12.75-58.83,12.75S1146.73,5,1117.32,5s-29.42,12.75-58.83,12.75S1029.07,5,999.66,5s-29.42,12.75-58.84,12.75S911.41,5,882,5s-29.41,12.75-58.83,12.75S793.74,5,764.33,5,734.91,17.75,705.5,17.75,676.08,5,646.67,5s-29.42,12.75-58.84,12.75S558.42,5,529,5s-29.41,12.75-58.83,12.75S440.76,5,411.34,5s-29.41,12.75-58.83,12.75S323.1,5,293.68,5s-29.42,12.75-58.83,12.75S205.43,5,176,5,146.6,17.75,117.19,17.75,87.77,5,58.36,5C29.11,5,28.93,17.61,0,17.74V50H2000Z" transform="translate(0 -5)"></path>
                </svg>
            </section>
            <section className='bg-[#d0e0ec]'>
                <div className='h-full my-container py-20 grid lg:grid-cols-2 grid-cols-1 items-center gap-16'>
                    <div className='h-full'>
                        <img className='w-[400px] mx-auto h-full' src="https://assets.niche.com/static/home/start-student-with-dog.webp" alt="" srcset="" />
                    </div>
                    <div className='space-y-8'>
                        <div className='py-20 my-container text-center text-[#163e21] relative space-y-7 '>
                            <h1 className='text-4xl font-semibold'>Not sure where to start?</h1>
                            <svg className='w-52 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 17" fill="#163e21"><path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path></svg>

                            <p className=' w-full text-lg text-black'>
                                Tell us what matters most to you and we'll create a custom list of schools tailored to fit your needs.
                            </p>
                            <div className=' space-y-3'>
                                <p className=''>
                                    <button className='bg-[#237c3a] px-2 md:px-0 text-white py-3 text-lg w-full md:w-[380px]'>Take Our College Quiz</button>
                                </p>
                                <p>
                                    <button className='bg-[#237c3a] px-1 md:px-0 text-white py-3 text-lg w-full md:w-[380px]'>Find K-12 Skills Near You</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;