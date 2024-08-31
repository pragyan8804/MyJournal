import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-slate-200 dark:bg-slate-900 text-base-content p-10 flex justify-around items-start rounded-3xl">
      <aside className="flex flex-col items-start">
        <Image
          src="/logo.jpg"
          width={50}
          height={50}
          alt="MyJournal Logo"
          className="mb-2"
        />
        <p className="text-lg font-medium">
          MyJournal
          <br />
          <span className="text-sm font-normal">
            Capture your moments, your way
          </span>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title font-semibold mb-4">SERVICES</h6>
        <Link href="/pricing" className="link link-hover block">Pricing</Link>
        <Link href="/features" className="link link-hover block">Features</Link>
        <Link href="/sitemap" className="link link-hover block">Sitemap</Link>
      </nav>
      <nav>
        <h6 className="footer-title font-semibold mb-4">COMPANY</h6>
        <Link href="/about-us" className="link link-hover block">About us</Link>
        <Link href="/contact" className="link link-hover block">Contact</Link>
        <Link href="/tech-stack" className="link link-hover block">Tech Stack</Link>
        {/* <Link href="/press-kit" className="link link-hover block">Press kit</Link> */}
      </nav>
      <nav>
        <h6 className="footer-title font-semibold mb-4">LEGAL</h6>
        <Link href="/terms-of-use" className="link link-hover block">Terms of use</Link>
        <Link href="/privacy-policy" className="link link-hover block">Privacy policy</Link>
        <Link href="/cookie-policy" className="link link-hover block">Cookie policy</Link>
      </nav>
      <nav>
        <h6 className="footer-title font-semibold mb-4">SOCIALS</h6>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link link-hover block">GitHub</a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="link link-hover block">Discord</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link link-hover block">LinkedIn</a>
      </nav>
    </footer>
  );
};

export default Footer;
