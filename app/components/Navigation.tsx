"use client";

import { motion } from "framer-motion";
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
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const t = useTranslations("nav");
  const currentLocale = params.locale as string;

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
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

        {/* Navigation Links & Language Switcher */}
        <div className="flex items-center gap-8 md:gap-12">
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

          {/* Language Switcher */}
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
      </div>
    </nav>
  );
}
