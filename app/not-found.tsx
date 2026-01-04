'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-7xl md:text-8xl font-medium tracking-tight text-foreground">
            404
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted">
            This page has drifted into the cosmos.
          </p>
          <Link
            href="/"
            className="inline-block text-lg text-accent-indigo hover:text-foreground transition-colors duration-300 mt-8"
          >
            Return home →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
