"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Link from "next/link";

import { HiUser } from "react-icons/hi2";
import { FaCarAlt } from "react-icons/fa";
import { TiLightbulb } from "react-icons/ti";
import { FaBolt, FaIndustry, FaNetworkWired } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Footer from "./components/Footer";
import { useLanguage } from "./components/LanguageProvider";

const renderLines = (lines = []) =>
  lines.map((line, index) => (
    <span key={`${line}-${index}`}>
      {line}
      {index !== lines.length - 1 && <br />}
    </span>
  ));

export default function Home() {
  const { translations: t } = useLanguage();

  return (
    <>
      <Header />

      <Hero />

      <section className="bg-[#a4b18a] py-[54px]">
        <div className="max-w-[2000px] w-[70%] mx-auto flex items-center flex-col lg:flex-row gap-y-7.5">
          <div className="lg:w-[48.5%] lg:mr-[3%]">
            <h1 className="pb-2.5 uppercase text-[2.6em] text-white leading-[1.1em] font-bold wrap-break-word">
              {renderLines(t.expertise.title)}
            </h1>
          </div>

          <div className="lg:w-[48.5%] text-lg text-white font-normal space-y-4">
            <p>{t.expertise.body[0]}</p>

            <p>{t.expertise.body[1]}</p>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-2.5 mt-[64px]">
        <div className="w-[73%] max-w-[2000px] mx-auto py-[5px] flex items-center flex-wrap gap-8">
          <div className="flex-1 mx-auto flex items-center flex-col gap-5 text-center cursor-pointer">
            <HiUser className="text-[#344e41] text-[40px]" />

            <h3 className="pb-2.5 uppercase text-lg leading-[1.1em] font-bold whitespace-nowrap">
              {t.services.cards.serviceElectrician}
            </h3>
          </div>

          <div className="flex-1 mx-auto flex items-center flex-col gap-5 text-center cursor-pointer">
            <FaIndustry className="text-[#344e41] text-[35px]" />

            <h3 className="pb-2.5 uppercase text-lg leading-[1.1em] font-bold whitespace-nowrap">
              {t.services.cards.industry}
            </h3>
          </div>

          <div className="flex-1 mx-auto flex items-center flex-col gap-5 text-center cursor-pointer">
            <FaBolt className="text-[#344e41] text-[40px]" />

            <h3 className="pb-2.5 uppercase text-lg leading-[1.1em] font-bold whitespace-nowrap">
              {t.services.cards.force}
            </h3>
          </div>

          <div className="flex-1 mx-auto flex items-center flex-col gap-5 text-center cursor-pointer">
            <FaNetworkWired className="text-[#344e41] text-[40px]" />

            <h3 className="pb-2.5 uppercase text-lg leading-[1.1em] font-bold whitespace-nowrap">
              {t.services.cards.automation}
            </h3>
          </div>

          <div className="flex-1 mx-auto flex items-center flex-col gap-5 text-center cursor-pointer">
            <TiLightbulb className="text-[#344e41] text-[40px]" />

            <h3 className="pb-2.5 uppercase text-lg leading-[1.1em] font-bold whitespace-nowrap">
              {t.services.cards.lighting}
            </h3>
          </div>

          <div className="flex-1 mx-auto flex items-center flex-col gap-5 text-center cursor-pointer">
            <img
              src="/assets/shield-Virus-icon.png"
              alt="shield-Virus-icon"
              className="h-10"
            />

            <h3 className="pb-2.5 uppercase text-lg leading-[1.1em] font-bold whitespace-nowrap">
              {t.services.cards.safety}
            </h3>
          </div>

          <div className="flex-1 mx-auto flex items-center flex-col gap-5 text-center cursor-pointer">
            <FaCarAlt className="text-[#344e41] text-[40px]" />

            <h3 className="pb-2.5 uppercase text-lg leading-[1.1em] font-bold whitespace-nowrap">
              {t.services.cards.landbox}
            </h3>
          </div>
        </div>
      </section>

      <section className="py-[54px]">
        <div className="max-w-[1080px] w-[80%] mx-auto py-7 flex flex-col lg:flex-row gap-y-7.5">
          <div className="lg:w-[47.25%] lg:mr-[5.5%]">
            <h1 className="pb-2.5 uppercase text-[2.6em] text-[#344e41] leading-[1.1em] font-bold wrap-break-word">
              {renderLines(t.rot.title)}
            </h1>

            <p className="mt-7.5 mb-[18px] text-lg font-normal">
              {t.rot.body[0]}
            </p>

            <p className="mb-7.5 text-lg font-normal">{t.rot.body[1]}</p>

            <Link
              href="#"
              className="border-2 border-[#344e41] bg-[#344e41] hover:bg-white text-white hover:text-[#344e41] rounded-full py-0.5 pl-5 pr-5 hover:pr-10 transition-all duration-300 inline-flex items-center text-xl font-medium leading-[1.7em] relative overflow-hidden group"
            >
              <span>{t.shared.contactCta}</span>

              <span className="absolute right-3 inline-flex items-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <FiChevronRight size={24} />
              </span>
            </Link>
          </div>

          <div className="lg:w-[47.25%]">
            <img
              src="/assets/img2.webp"
              alt="electrical cabinet"
              loading="lazy"
              className="w-full h-full rounded-[5px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#a4b18a] py-[54px] overflow-x-hidden">
        <div className="max-w-[1080px] w-[80%] mx-auto py-7 flex flex-col lg:flex-row gap-y-7.5">
          <div className="lg:w-[57.8%] lg:mr-[5.5%]">
            <h1 className="pb-2.5 uppercase text-[2.6em] text-white leading-[1.1em] font-bold wrap-break-word">
              {renderLines(t.capabilities.title)}
            </h1>

            <p className="mt-7.5 text-lg font-normal text-white">
              {t.capabilities.body}
            </p>
          </div>

          <div className="relative lg:w-[36.7%] min-h-[20em] lg:min-h-auto mt-[4em] lg:mt-0 -ml-6 sm:ml-0">
            <div className="w-[240px] sm:w-[18em] h-[240px] sm:h-[18em] p-[2em] mb-[7.493%] bg-[#f9f9f9] absolute left-0 rounded-full flex flex-col justify-center gap-2 items-center text-center">
              <FaBolt className="text-[#344e41] text-[2em]" />

              <h3 className="text-[1.2em] uppercase font-bold leading-[1.1em]">
                {t.capabilities.highlights.commercial}
              </h3>
            </div>

            <div className="w-[100px] sm:w-[112px] h-[100px] sm:h-[112px] p-[.5em] mb-[7.493%] bg-[#f9f9f9] absolute left-[200px] sm:left-[246.4px] -top-[56px] sm:-top-[56px] rounded-full flex flex-col justify-center gap-2 items-center text-center">
              <TiLightbulb className="text-[#344e41] text-[2em]" />

              <h3 className="text-[.7em] uppercase font-bold leading-[1.1em]">
                {t.capabilities.highlights.lighting}
              </h3>
            </div>

            <div className="w-[130px] sm:w-[153.6px] h-[130px] sm:h-[153.6px] p-4 mb-[7.493%] bg-[#f9f9f9] absolute left-[250px] sm:left-[300.8px] top-[46px] sm:top-[51.2px] rounded-full flex flex-col justify-center gap-2 items-center text-center">
              <img
                src="/assets/shield-Virus-icon.png"
                alt="shield-Virus-icon"
                className="h-6"
              />

              <h3 className="text-[.8em] uppercase font-bold leading-[1.1em]">
                {t.capabilities.highlights.tailored}
              </h3>
            </div>

            <div className="w-[100px] sm:w-[112px] h-[100px] sm:h-[112px] p-[.5em] bg-[#f9f9f9] absolute left-[205px] sm:left-[263.2px] top-[192px] sm:top-[212.8px] rounded-full flex flex-col justify-center gap-2 items-center text-center">
              <FaCarAlt className="text-[#344e41] text-[2em]" />

              <h3 className="text-[.7em] uppercase font-bold leading-[1.1em]">
                {t.capabilities.highlights.charging}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[54px]">
        <div className="max-w-[1080px] w-[80%] mx-auto py-7 flex flex-col lg:flex-row gap-y-7.5">
          <div className="lg:w-[36.7%] lg:mr-[5.5%]">
            <img
              src="/assets/cars-outsite-the-workshop.webp"
              alt="cars outside the workshop"
              loading="lazy"
              className="w-full h-auto rounded-[5px]"
            />
          </div>

          <div className="lg:w-[57.8%]">
            <div className="w-[100px] h-[1.6px] mb-10 bg-[#344e41]"></div>

            <h1 className="pb-2.5 uppercase text-[2.6em] text-[#344e41] leading-[1.1em] font-bold wrap-break-word">
              {renderLines(t.business.title)}
            </h1>

            <p className="mt-2.5 mb-[4.758%] text-lg font-normal">
              {t.business.body}
            </p>

            <Link
              href="#"
              className="border-2 border-[#344e41] bg-[#344e41] hover:bg-white text-white hover:text-[#344e41] rounded-full py-0.5 pl-5 pr-5 hover:pr-10 transition-all duration-300 inline-flex items-center text-xl font-medium leading-[1.7em] relative overflow-hidden group"
            >
              <span>{t.shared.contactCta}</span>

              <span className="absolute right-3 inline-flex items-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <FiChevronRight size={24} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#a4b18a] py-[54px]">
        <div className="max-w-[1080px] w-[80%] mx-auto py-7 flex flex-col lg:flex-row gap-y-7.5">
          <div className="lg:w-[57.8%] lg:mr-[5.5%]">
            <div className="w-[100px] h-[1.6px] mb-10 bg-white"></div>

            <h1 className="pb-2.5 uppercase text-[2.6em] text-white leading-[1.1em] font-bold wrap-break-word">
              {renderLines(t.promise.title)}
            </h1>

            <p className="mt-2.5 mb-[4.758%] text-lg font-normal text-white">
              {t.promise.body}
            </p>

            <Link
              href="#"
              className="border-2 border-[#344e41] bg-[#344e41] hover:bg-transparent text-white hover:text-[#344e41] rounded-full py-0.5 pl-5 pr-5 hover:pr-10 transition-all duration-300 inline-flex items-center text-xl font-medium leading-[1.7em] relative overflow-hidden group"
            >
              <span>{t.shared.contactCta}</span>

              <span className="absolute right-3 inline-flex items-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <FiChevronRight size={24} />
              </span>
            </Link>
          </div>

          <div className="lg:w-[36.7%]">
            <img
              src="/assets/img3.webp"
              alt="electrical cabinet"
              loading="lazy"
              className="w-full h-auto rounded-[5px]"
            />
          </div>
        </div>
      </section>

      <section className="py-[54px]" id="contact">
        <div className="max-w-[1080px] w-[80%] mx-auto py-7 flex flex-col lg:flex-row gap-y-7.5">
          <div className="lg:w-[57.8%] lg:mr-[5.5%]">
            <h1 className="pb-2.5 uppercase text-[2.6em] text-[#344e41] leading-[1.1em] font-bold wrap-break-word">
              {renderLines(t.contactSection.title)}
            </h1>

            <p className="mt-[4.758%] text-lg font-normal">
              {t.contactSection.body}
            </p>
          </div>

          <div className="lg:w-[36.7%]">
            <div className="border border-black rounded-[3px] py-[1.2em] px-[2em]">
              <p className="text-base font-normal">
                {t.contactSection.placeholder}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
