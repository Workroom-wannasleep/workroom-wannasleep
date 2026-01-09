"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/routing";
import { useParams } from "next/navigation";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/studio", label: "studio" },
  { href: "/works", label: "works" },
  { href: "/contact", label: "contact" },
];

const languages = [
  { code: "ko", label: "KO" },
  { code: "en", label: "EN" },
  { code: "zh", label: "ZH" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const t = useTranslations("nav");
  const currentLocale = params.locale as string;

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-foreground font-medium tracking-tight text-lg transition-colors duration-300 group-hover:text-accent-warm">
                wannasleep;
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links & Language Switcher */}
          <div className="hidden md:flex items-center gap-8 md:gap-12">
            <motion.ul
              className="flex gap-8 md:gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "text-foreground"
                          : "text-foreground-muted hover:text-foreground"
                      }`}
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>

            {/* Desktop Language Switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 border-l border-border pl-8 md:pl-12"
            >
              {languages.map((lang, index) => (
                <div key={lang.code} className="flex items-center">
                  <button
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`text-xs font-medium tracking-wider transition-colors duration-300 ${
                      currentLocale === lang.code
                        ? "text-accent-indigo"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                    aria-label={`Switch to ${lang.label}`}
                  >
                    {lang.label}
                  </button>
                  {index < languages.length - 1 && (
                    <span className="text-foreground-muted mx-2 text-xs">|</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-foreground origin-center"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-foreground"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-foreground origin-center"
            />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background border-l border-border z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                {/* Close Button */}
                <div className="flex justify-end mb-12">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-foreground"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-8">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl font-medium tracking-wide transition-colors duration-300 block ${
                              isActive
                                ? "text-foreground"
                                : "text-foreground-muted hover:text-foreground"
                            }`}
                          >
                            {t(link.label)}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Mobile Language Switcher */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="border-t border-border pt-8"
                >
                  <div className="flex items-center gap-6">
                    {languages.map((lang, index) => (
                      <div key={lang.code} className="flex items-center">
                        <button
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                            currentLocale === lang.code
                              ? "text-accent-indigo"
                              : "text-foreground-muted hover:text-foreground"
                          }`}
                          aria-label={`Switch to ${lang.label}`}
                        >
                          {lang.label}
                        </button>
                        {index < languages.length - 1 && (
                          <span className="text-foreground-muted mx-3 text-sm">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
