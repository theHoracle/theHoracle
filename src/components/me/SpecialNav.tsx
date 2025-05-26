// components/ScrollSpy.js
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SpecialNav() {
  const [activeSection, setActiveSection] = useState('');
  const jumpLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const options = {
      root: null, // Use viewport as root
      rootMargin: '-50% 0% -50% 0%', // Consider middle 50% of viewport
      threshold: 0 // Trigger as soon as any part is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="hidden lg:block">
      <ul className="mt-16 w-max">
        {jumpLinks.map((link) => (
          <li key={link.href} className="mb-2">
            <Link
              href={link.href}
              className={`group flex items-center py-3  ${
                activeSection === link.href.substring(1)
                  ? 'active'
                  : ''
              }`}
              >
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-primary dark:group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none' />
              <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-primary dark:group-hover:text-slate-200 group-focus-visible:text-slate-200'>
              {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
