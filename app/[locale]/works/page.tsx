'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

type Project = {
  title: string;
  category: string;
  description: string;
  year: string;
  month: string;
  link: string;
};

function TimelineItem({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {/* Year Label - Left side on desktop */}
      <div className={`${isEven ? 'md:order-1' : 'md:order-2'} flex ${isEven ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${isEven ? 'text-right' : 'text-left'} md:${isEven ? 'text-right' : 'text-left'}`}
        >
          <div className="text-5xl md:text-6xl font-medium text-accent-green tracking-tight">
            {project.year}
          </div>
          <div className="text-xl text-foreground-muted mt-2">
            {project.month}
          </div>
        </motion.div>
      </div>

      {/* Timeline Dot - Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-6 h-6 rounded-full bg-accent-green border-4 border-background shadow-lg"
        />
      </div>

      {/* Project Card - Right side on desktop */}
      <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <motion.article
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 30 : -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group"
        >
          <a
            href={project.link || undefined}
            target={project.link ? '_blank' : undefined}
            rel={project.link ? 'noopener noreferrer' : undefined}
            className={`block space-y-6 p-8 rounded-lg border border-border bg-background-elevated transition-all duration-300 hover:border-accent-green hover:bg-background hover:shadow-xl hover:shadow-accent-green/10 ${
              project.link ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            {/* Category */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-accent-warm font-medium uppercase tracking-wider">
                {project.category}
              </span>
              {project.link && (
                <svg
                  className="w-5 h-5 text-foreground-muted group-hover:text-accent-green transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              )}
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-medium text-foreground group-hover:text-accent-green transition-colors duration-300">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-foreground-muted leading-relaxed">
              {project.description}
            </p>
          </a>
        </motion.article>
      </div>
    </motion.div>
  );
}

export default function Works() {
  const t = useTranslations('works');
  const timelineRef = useRef(null);

  const projects = (t.raw('projects') as Project[]).sort((a, b) => {
    // Sort by year and month, newest first
    const dateA = parseInt(a.year) * 100 + parseInt(a.month);
    const dateB = parseInt(b.year) * 100 + parseInt(b.month);
    return dateB - dateA;
  });

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground">
            {t('title')}
          </h1>
          <p className="text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            {t('headline')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative space-y-24 md:space-y-32">
          {/* Vertical Line - Desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground-muted to-transparent hidden md:block" />

          {projects.map((project, index) => (
            <TimelineItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
