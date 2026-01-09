'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Works() {
  const t = useTranslations('works');

  const projects = t.raw('projects') as Array<{
    title: string;
    category: string;
    description: string;
    year: string;
  }>;

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-foreground">
            {t('title')}
          </h1>
          <p className="text-2xl text-foreground-muted max-w-2xl leading-relaxed">
            {t('headline')}
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Project Card */}
              <div className="space-y-6 p-8 rounded-lg border border-border bg-background-elevated transition-all duration-300 hover:border-accent-indigo hover:bg-background">
                {/* Category & Year */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent-warm font-medium">
                    {project.category}
                  </span>
                  <span className="text-foreground-muted">{project.year}</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-medium text-foreground group-hover:text-accent-indigo transition-colors duration-300">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-foreground-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
