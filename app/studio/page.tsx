'use client';

import { motion } from 'framer-motion';

export default function Studio() {
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
            Studio
          </h1>
          <p className="text-2xl text-foreground-muted max-w-2xl leading-relaxed">
            A workshop for thoughtful software.
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
              Built from imagination
            </h2>
            <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
              <p>
                The best ideas arrive in the quiet moments before sleep. When the day slows down and the mind wanders freely across the vast universe of possibility.
              </p>
              <p>
                We build software the same way. Slowly. Thoughtfully. With intention.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-l-2 border-accent-blue pl-8">
            <h2 className="text-2xl font-medium text-foreground">
              Philosophy over speed
            </h2>
            <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
              <p>
                We are not interested in moving fast and breaking things. We move deliberately and build things that last.
              </p>
              <p>
                Every line of code is a choice. Every interface is a conversation. Every product is a philosophy made tangible.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-l-2 border-accent-warm pl-8">
            <h2 className="text-2xl font-medium text-foreground">
              Craft, not commodity
            </h2>
            <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
              <p>
                This is a digital workshop, not a factory. We are craftspeople, not vendors.
              </p>
              <p>
                We build web and mobile applications for clients who value quality, intention, and the human touch in technology.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-foreground">
              Who we are
            </h2>
            <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
              <p>
                Young computer science graduates from formal universities. Educated in theory and practice. Trained in algorithms, architecture, and the philosophy of computation.
              </p>
              <p>
                We bring structure, rigor, and creativity to every project. We care deeply about how things are made.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
