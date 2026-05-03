import React, { useEffect, useState } from "react";
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Youtube, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { profile, socials } from "../data/mock";

const navLinks = [
  { to: "/", label: "Home", labelAs: "ঘৰ" },
  { to: "/about", label: "About", labelAs: "পৰিচয়" },
  { to: "/gallery", label: "Gallery", labelAs: "গেলেৰী" },
  { to: "/businesses", label: "Businesses", labelAs: "ব্যৱসায়" },
  { to: "/collaborations", label: "Collaborations", labelAs: "সহযোগ" },
  { to: "/contact", label: "Contact", labelAs: "যোগাযোগ" },
];

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1A1A1A] flex flex-col">
      {/* Top announcement strip */}
      <div className="bg-[#1A1A1A] text-[#FAF6F0] text-[11px] tracking-[0.25em] uppercase">
        <div className="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between">
          <span className="font-assamese text-[12px] tracking-normal">নমস্কাৰ — welcome to my world</span>
          <span className="hidden md:flex items-center gap-2 opacity-80">
            <MapPin className="w-3 h-3" /> Nagaon, Assam
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 ${scrolled ? "bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#1A1A1A]/10" : "bg-transparent"}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-full bg-[#FF5A36] flex items-center justify-center text-[#FAF6F0] font-display text-base">RM</span>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide">RITTURAJ</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/60">Mudai · Nagaon</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `link-underline text-[13px] uppercase tracking-[0.18em] font-medium ${isActive ? "text-[#FF5A36]" : "text-[#1A1A1A]"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={socials.instagram.url} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-[#FAF6F0]">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={socials.youtube.url} target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-[#FAF6F0]">
              <Youtube className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-2 bg-[#FF5A36] text-[#FAF6F0] px-5 py-2.5 rounded-full text-[12px] uppercase tracking-[0.18em] font-semibold hover:bg-[#1A1A1A]"
            >
              Let's talk <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden w-10 h-10 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center"
            onClick={() => setOpen((s) => !s)}
            aria-label="menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-[#FAF6F0] border-t border-[#1A1A1A]/10">
            <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `flex items-baseline justify-between py-2 border-b border-[#1A1A1A]/10 ${isActive ? "text-[#FF5A36]" : "text-[#1A1A1A]"}`
                  }
                >
                  <span className="font-display text-2xl tracking-wide">{l.label}</span>
                  <span className="font-assamese text-sm opacity-70">{l.labelAs}</span>
                </NavLink>
              ))}
              <Link to="/contact" className="mt-2 inline-flex items-center justify-center gap-2 bg-[#FF5A36] text-[#FAF6F0] px-5 py-3 rounded-full text-sm uppercase tracking-[0.18em] font-semibold">
                Let's talk <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-[#1A1A1A] text-[#FAF6F0] mt-24">
        <div className="max-w-[1400px] mx-auto px-6 py-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="font-assamese text-2xl text-[#F4A100] mb-3">{profile.greeting}</div>
            <h3 className="font-display text-5xl md:text-6xl leading-[0.95]">{profile.name.toUpperCase()}</h3>
            <p className="mt-5 max-w-md text-[#FAF6F0]/70 leading-relaxed">{profile.shortBio}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#FAF6F0]/70">
              <MapPin className="w-4 h-4 text-[#FF5A36]" /> {profile.location}
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FAF6F0]/50 mb-4">Explore</div>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-[#FF5A36]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FAF6F0]/50 mb-4">Connect</div>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 mb-3 hover:text-[#FF5A36]">
              <Mail className="w-4 h-4" /> {profile.email}
            </a>
            <a href={socials.youtube.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 mb-3 hover:text-[#FF5A36]">
              <Youtube className="w-4 h-4" /> {socials.youtube.handle}
            </a>
            <a href={socials.instagram.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#FF5A36]">
              <Instagram className="w-4 h-4" /> {socials.instagram.handle}
            </a>
          </div>
        </div>
        <div className="border-t border-[#FAF6F0]/10">
          <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#FAF6F0]/50">
            <span>© {new Date().getFullYear()} Ritturaj Mudai. All rights reserved.</span>
            <span className="font-assamese">নগাঁৱৰ পৰা ভাৰ্চুৱেল জগতলৈ — built with love.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
