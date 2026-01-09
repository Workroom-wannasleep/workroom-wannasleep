"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Studio() {
  const t = useTranslations("studio");

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-foreground">
            {t("title")}
          </h1>
          <a
            href="https://dongwan.kim"
            className="text-xl text-foreground-muted"
          >
            Architect 完
          </a>
          <p className="text-2xl text-foreground-muted max-w-2xl leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* Philosophy Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-16"
        >
          {/* Section 1 */}
          <section className="space-y-4 border-l-2 border-accent-indigo pl-8">
            <h2 className="text-2xl font-medium text-foreground">
              {t("sections.imagination.title")}
            </h2>
            <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
              <p>{t("sections.imagination.content1")}</p>
              <p>{t("sections.imagination.content2")}</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-l-2 border-accent-blue pl-8">
            <h2 className="text-2xl font-medium text-foreground">
              {t("sections.philosophy.title")}
            </h2>
            <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
              <p>{t("sections.philosophy.content1")}</p>
              <p>{t("sections.philosophy.content2")}</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-l-2 border-accent-warm pl-8">
            <h2 className="text-2xl font-medium text-foreground">
              {t("sections.craft.title")}
            </h2>
            <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
              <p>{t("sections.craft.content1")}</p>
              <p>{t("sections.craft.content2")}</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-foreground">
              {t("sections.who.title")}
            </h2>
            <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
              <p>{t("sections.who.content1")}</p>
              <p>{t("sections.who.content2")}</p>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
