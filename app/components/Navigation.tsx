'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/studio', label: 'Studio' },
  { href: '/works', label: 'Works' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

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
              workroom wannasleep
            </span>
          </motion.div>
        </Link>

        {/* Navigation Links */}
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
                      ? 'text-foreground'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </nav>
  );
}
