"use client";

import Link from 'next/link';
import { HiBars3 } from "react-icons/hi2";
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { translations } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`w-full bg-white sticky top-0 flex items-center z-30 transition-all duration-300 ease-in-out ${isScrolled ? 'h-[60px]' : 'h-[82px]'
                }`}
            style={{ boxShadow: "0 1px 0 rgba(0,0,0,.1)" }}
        >
            <div className='max-w-[2000px] w-[70%] mx-auto flex items-center justify-between'>
                <Link href="/">
                    <h2
                        className={`text-[#344e41] font-bold uppercase text-center order-1 lg:order-2 transition-all duration-300 ease-in-out ${isScrolled
                                ? 'text-[1em] sm:text-[1.3em]'
                                : 'text-[1.2em] sm:text-[1.6em]'
                            }`}
                    >
                        {translations.header.title}
                    </h2>
                </Link>

                <button
                    className={`text-[#344e41] cursor-pointer transition-all duration-300 ease-in-out ${isScrolled ? 'text-[28px]' : 'text-[32px]'
                        }`}
                >
                    <HiBars3 />
                </button>
            </div>
        </header>
    );
};

export default Header;