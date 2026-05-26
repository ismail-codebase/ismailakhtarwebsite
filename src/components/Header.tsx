'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#17252a] text-white shadow-lg">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#3aafa9]">
          <Logo />
        </Link>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-[#3aafa9] transition">Home</Link>
          <Link href="/about" className="hover:text-[#3aafa9] transition">About</Link>
          <Link href="/services" className="hover:text-[#3aafa9] transition">Services</Link>
          <Link href="/portfolio" className="hover:text-[#3aafa9] transition">Portfolio</Link>
          <Link href="/blog" className="hover:text-[#3aafa9] transition">Blog</Link>
          <Link href="/contact" className="hover:text-[#3aafa9] transition">Contact</Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2b7a78] px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="hover:text-[#def2f1] transition">Home</Link>
          <Link href="/about" className="hover:text-[#def2f1] transition">About</Link>
          <Link href="/services" className="hover:text-[#def2f1] transition">Services</Link>
          <Link href="/portfolio" className="hover:text-[#def2f1] transition">Portfolio</Link>
          <Link href="/blog" className="hover:text-[#def2f1] transition">Blog</Link>
          <Link href="/contact" className="hover:text-[#def2f1] transition">Contact</Link>
        </div>
      )}
    </header>
  );
}
