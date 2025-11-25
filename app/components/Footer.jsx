"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { translations } = useLanguage();
  const { footer } = translations;

  return (
    <footer>
      <div className="py-[54px] bg-[#344e41]">
        <div className="max-w-[2000px] w-[70%] mx-auto py-7 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-16 lg:gap-7">
          <div className="order-2 lg:order-1">
            <p className="text-white mb-[1em] text-base">
              <strong>{footer.company}</strong>
              <br />
              <strong>{footer.orgNumber}</strong>
              <br />
              <strong>{footer.addressLine1}</strong>
              <br />
              <strong>{footer.addressLine2}</strong>
            </p>

            <p className="text-white text-base">
              <strong>{footer.telephoneLabel}</strong> :{" "}
              <Link href="tel:46762641447">46762641447</Link>
              <br />
              <strong>{footer.emailLabel}</strong> : Gustav@vretael.com
            </p>
          </div>

          <h2 className="text-[1.2em] sm:text-[1.6em] text-white font-bold uppercase text-center order-1 lg:order-2">
            {translations.shared.companyName}
          </h2>

          <div className="flex gap-6 order-3 lg:order-3 justify-around lg:justify-start w-full lg:w-fit">
            <img
              src="/assets/medlemslogga.png"
              alt="medlemslogga"
              loading="lazy"
              className="h-20"
            />
            <img
              src="/assets/sbcert-logo.jpg"
              alt="sbcert-logo"
              loading="lazy"
              className="h-16"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#23352c]">
        <div className="max-w-[2000px] w-[70%] mx-auto py-7 text-center">
          <p className="text-white text-base">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
