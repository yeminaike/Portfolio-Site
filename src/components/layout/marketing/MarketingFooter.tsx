'use client';

// import Facebook from '@/app/(marketing)/landingmisc/icons/footer/Facebook';
// import Instagram from '@/app/(marketing)/landingmisc/icons/footer/Instagram';
// import Linkedln from '@/app/(marketing)/landingmisc/icons/footer/Linkedln';
// import Video from '@/app/(marketing)/landingmisc/icons/footer/Video';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function MarketingFooter() {
    return (
        <footer className="w-full bg-[#0E1325] pt-[3.1875rem] text-white">
            {/* Logo Section */}
            <div className="flex items-center justify-center ">
                <div className="flex sm:gap-[1.375rem] gap-[1rem]">
                    <Image
                        alt="footerLogo"
                        src="/images/SeedsFooterLogo.png"
                        width={69}
                        height={69}
                        className="w-[4rem] h-[4rem] mt-[1rem]"
                    />
                    <p className="lg:text-[4.375rem] [@media(max-width:640px)]:mt-[1.2rem] md:text-[3.375rem] sm:text-[2.8rem] text-[1.7rem] font-medium text-[#fff]">
                        Seeds & Pennies
                    </p>
                </div>
            </div>


            <div className=" xl:px-[2rem] 2xl:px-[6.25rem]  px-[1.5rem]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-[4.375rem] gap-6">

                    <div className="hidden sm:flex gap-[1rem] ">
                        <a
                            href='https://www.linkedin.com/showcase/seeds-pennies/'
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            {/* <Linkedln /> */}
                        </a>


                        <a
                            href="https://youtube.com/@seedsandpennies?si=qH5TZ9K5gL6Myj3L"
                              target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            {/* <Video /> */}
                        </a>
                    </div>


                    <div className="flex flex-wrap justify-center sm:gap-[3.25rem] gap-[3rem]">
                        <Link
                            href='/marketingsections/about-us'
                        >
                            <p className="text-[#fff] ">About us</p>
                        </Link>


                        <Link
                            href={'/marketingsections/FAQ'}

                        >
                            <p className="text-[#fff] ">FAQs</p>
                        </Link>


                        <Link href={'/marketingsections/contact-us'}>
                            <p className="text-[#fff] ">Contact us</p>
                        </Link>

                    </div>


                    <div className="hidden sm:flex gap-[1rem]">
                        <a
                            href="https://www.instagram.com/theseedsandpennies?igsh=MWp0OGRmc3Mxc2JhZg=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            {/* <Instagram /> */}
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61562893198627&mibextid=rS40aB7S9Ucbxw6v"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            {/* <Facebook /> */}
                        </a>



                    </div>


                    <div className="flex sm:hidden flex-wrap justify-center gap-[1rem]">



                        <a
                            href="https://youtube.com/@seedsandpennies?si=qH5TZ9K5gL6Myj3L"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"

                        >
                            {/* <Video /> */}
                        </a>
                        <a
                            href="https://www.instagram.com/theseedsandpennies?igsh=MWp0OGRmc3Mxc2JhZg=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"

                        >
                            {/* <Instagram  /> */}
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61562893198627&mibextid=rS40aB7S9Ucbxw6v"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            {/* <Facebook /> */}
                        </a>
                        <a
                            href="https://www.linkedin.com/showcase/seeds-pennies/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            {/* <Linkedln /> */}
                        </a>

                    </div>
                </div>

                <div className="mt-[4.5rem] h-px w-full bg-white/20"></div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-wrap justify-between w-full xl:px-[6.25rem] px-[1.5rem] pb-[3.125rem]">
                <p className="text-[#EAEAEA] text-sm font-normal mt-[0.75rem]">
                    Copyright © 2024, Seeds & Pennies. All rights reserved.
                </p>
                <div className="flex gap-[1.5rem]">
                    <Link
                    href={'/privacypolicy'}
                    >
                     <p className="text-[#EAEAEA] text-sm font-normal mt-[0.75rem]">Privacy Policy</p>
                    </Link>
                   
                    {/* <p className="text-[#EAEAEA] text-sm font-normal mt-[0.75rem]">Terms of Service</p> */}
                </div>
            </div>
        </footer>
    );
}
