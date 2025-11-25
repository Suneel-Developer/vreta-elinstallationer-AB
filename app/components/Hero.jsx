"use client";

import Link from 'next/link'
import { FiChevronRight } from "react-icons/fi";
import { useLanguage } from './LanguageProvider';

const Hero = () => {
    const { translations } = useLanguage();

    return (
        <section className='py-[54px]'>
            <div className='max-w-[1080px] w-[80%] mx-auto py-7 flex flex-col lg:flex-row gap-y-7.5'>
                <div className='lg:w-[47.25%] lg:mr-[5.5%]'>
                    <h1 className='pb-2.5 uppercase text-[3.4em] text-[#344e41] leading-[1.1em] font-bold wrap-break-word'>
                        {translations.hero.title.map((line, index) => (
                            <span key={`${line}-${index}`}>
                                {line}
                                {index !== translations.hero.title.length - 1 && <br />}
                            </span>
                        ))}
                    </h1>

                    <p className='my-[30px] text-[23px] font-normal leading-[1.2em]'>
                        {translations.hero.description}
                    </p>

                    <Link
                        href="#contact"
                        className='border-2 border-[#344e41] bg-[#344e41] hover:bg-white text-white hover:text-[#344e41] rounded-full py-0.5 pl-5 pr-5 hover:pr-10 transition-all duration-300 inline-flex items-center text-xl font-medium leading-[1.7em] relative overflow-hidden group'
                    >
                        <span>{translations.hero.cta}</span>

                        <span className="absolute right-3 inline-flex items-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <FiChevronRight size={24} />
                        </span>
                    </Link>
                </div>

                <div className='lg:w-[47.25%]'>
                    <img src="/assets/SEMIEL5.webp" alt="electrical cabinet" loading='lazy' className='w-full h-full rounded-[5px]' />
                </div>
            </div>
        </section>
    )
}

export default Hero