"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <main className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-foreground">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Email */}
          <div className="space-y-4 pt-8">
            <p className="text-sm uppercase tracking-wider text-foreground-muted">
              {t("email")}
            </p>
            <a
              href="mailto:ceo@wannasleep.biz"
              className="text-3xl md:text-4xl font-medium text-foreground hover:text-accent-green transition-colors duration-300 inline-block"
            >
              ceo@wannasleep.biz
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
