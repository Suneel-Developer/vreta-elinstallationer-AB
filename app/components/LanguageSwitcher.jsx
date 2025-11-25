"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const LANGUAGE_OPTIONS = [
  { code: "sv", label: "Swedish", helper: "SE", flag: "/assets/Flag_of_Sweden.svg" },
  { code: "en", label: "English", helper: "EN", flag: "/assets/uk-flag.svg" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const activeLanguage = useMemo(
    () => LANGUAGE_OPTIONS.find((option) => option.code === language),
    [language]
  );

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
      <div
        className="relative backdrop-blur-[2px]"
        ref={containerRef}
        role="navigation"
        aria-label="Language switcher"
      >
        <button
          onClick={toggleDropdown}
          className="bg-white text-[#344e41] cursor-pointer border border-[#d2d9c8] rounded-full px-4 py-2 text-sm font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-all duration-200 flex items-center gap-2 min-w-[120px]"
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <img src={activeLanguage?.flag} alt={activeLanguage?.label} className="w-6 h-6 rounded-full object-cover" />
          <span>{activeLanguage?.label}</span>
        </button>

        <div
          className={`absolute bottom-full right-0 mb-2 origin-bottom-right transition-all duration-200 ${isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
            }`}
        >
          <div className="bg-white border border-[#e1e5da] rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.18)] min-w-[180px] overflow-hidden">
            {LANGUAGE_OPTIONS.map((option) => {
              const isActive = option.code === language;
              return (
                <button
                  key={option.code}
                  onClick={() => handleSelect(option.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors ${isActive
                    ? "bg-[#f4f6ef] text-[#344e41] font-semibold"
                    : "text-[#374236] hover:bg-[#f7f7f2]"
                    }`}
                  role="menuitem"
                >
                  <img src={option.flag} alt={option.label} className="w-6 h-6 rounded-full object-cover" />

                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

