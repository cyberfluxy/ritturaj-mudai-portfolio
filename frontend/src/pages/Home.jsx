import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play, Instagram, Youtube, MapPin, Quote } from "lucide-react";
import { profile, stats, socials, philosophy, businesses, featuredVideos, galleryImages, collaborations } from "../data/mock";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 pt-12 lg:pt-16 pb-16 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#1A1A1A]"></span>
              <span className="font-assamese text-[#FF5A36] text-lg">{profile.greeting}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/60">Hello, I am</span>
            </div>
            <h1 className="font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.86] tracking-tight">
              RITTURAJ
              <br />
              <span className="text-[#FF5A36]">MUDAI</span><span className="font-script text-[#1A1A1A] text-[0.4em] align-top ml-2">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#1A1A1A]/75 leading-relaxed">
              {profile.shortBio}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/about" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FAF6F0] px-7 py-3.5 rounded-full text-sm uppercase tracking-[0.18em] font-semibold hover:bg-[#FF5A36]">
                The story <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a href={socials.youtube.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#1A1A1A]/30 px-7 py-3.5 rounded-full text-sm uppercase tracking-[0.18em] font-semibold hover:bg-[#1A1A1A] hover:text-[#FAF6F0]">
                <Play className="w-4 h-4" /> Watch on YouTube
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-[#1A1A1A]/70">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#FF5A36]" /> {profile.location}</div>
              <div className="hidden sm:flex items-center gap-2"><Instagram className="w-4 h-4" /> {socials.instagram.handle}</div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-[#FFE8DC] shadow-[0_30px_80px_-30px_rgba(255,90,54,0.45)]">
              <img src={profile.heroImage} alt={profile.name} className="w-full h-full object-cover kenburn" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-[#FAF6F0]/90 backdrop-blur text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full">Creator · 2025</span>
                <span className="font-assamese text-[#FAF6F0] bg-[#1A1A1A]/70 backdrop-blur px-3 py-1.5 rounded-full text-sm">ৰিতুৰাজ</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A]/85 backdrop-blur text-[#FAF6F0] rounded-2xl px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">Highest Reel Views</div>
                  <div className="font-display text-2xl">1.2 MILLION</div>
                </div>
                <Instagram className="w-6 h-6 text-[#FF5A36]" />
              </div>
            </div>
            {/* floating sticker */}
            <div className="hidden md:flex absolute -top-6 -left-6 rotate-[-8deg] bg-[#F4A100] text-[#1A1A1A] px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-bold">
              From Nagaon ✨
            </div>
            <div className="hidden md:flex absolute -bottom-8 -right-4 rotate-[6deg] bg-[#1A1A1A] text-[#FAF6F0] px-5 py-3 rounded-2xl items-center gap-2 shadow-2xl">
              <Youtube className="w-5 h-5 text-[#FF5A36]" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">Subscribers</div>
                <div className="font-display text-xl leading-none">21K+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats marquee */}
        <div className="border-y border-[#1A1A1A]/15 bg-[#FAF6F0] overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1A1A1A]/10">
            {stats.map((s) => (
              <div key={s.label} className="px-3 md:px-6 first:pl-0 last:pr-0">
                <div className="font-display text-3xl md:text-5xl leading-none text-[#1A1A1A]">{s.value}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / PHILOSOPHY */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— The Why</div>
            <h2 className="font-serif-display text-5xl md:text-6xl leading-[0.95] italic">
              Stories that <br /> stay <span className="font-script text-[#FF5A36] not-italic">honest</span>.
            </h2>
            <p className="mt-6 text-[#1A1A1A]/70 max-w-sm">
              The lens is just an excuse — the real work is listening, sitting down with people, and letting their stories speak for themselves.
            </p>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-5">
            {philosophy.map((p, i) => (
              <div key={p.title} className="card-lift bg-white rounded-3xl p-7 border border-[#1A1A1A]/10">
                <div className="font-display text-5xl text-[#FF5A36] mb-4">0{i + 1}</div>
                <h3 className="font-serif-display text-2xl leading-tight mb-2">{p.title}</h3>
                <div className="font-assamese text-sm text-[#1A1A1A]/60 mb-4">{p.titleAssamese}</div>
                <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED VIDEOS */}
      <section className="py-24 bg-[#1A1A1A] text-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— Watch</div>
              <h2 className="font-display text-6xl md:text-7xl leading-[0.9]">
                ON THE <span className="text-[#FF5A36]">CHANNEL</span>
              </h2>
            </div>
            <a href={socials.youtube.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start md:self-auto text-sm uppercase tracking-[0.2em] hover:text-[#FF5A36]">
              All videos <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredVideos.map((v) => (
              <article key={v.title} className="card-lift group">
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <img src={v.thumb} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-[#FF5A36] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-[#FAF6F0] ml-0.5" fill="currentColor" />
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 bg-[#FAF6F0] text-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full">{v.views} views</span>
                </div>
                <h3 className="mt-5 font-serif-display text-xl leading-tight">{v.title}</h3>
                <div className="font-assamese text-sm text-[#FAF6F0]/60 mt-1">{v.titleAssamese}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESSES TEASER */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— The Ventures</div>
              <h2 className="font-display text-6xl md:text-7xl leading-[0.9]">BEYOND THE LENS</h2>
              <p className="mt-4 max-w-xl text-[#1A1A1A]/70">Two businesses, one shared belief — that local stories and local flavours deserve the world's attention.</p>
            </div>
            <Link to="/businesses" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-semibold hover:text-[#FF5A36] self-start md:self-auto">
              All ventures <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {businesses.map((b) => (
              <Link
                key={b.slug}
                to={`/businesses/${b.slug}`}
                className="card-lift group relative overflow-hidden rounded-3xl bg-[#1A1A1A] text-[#FAF6F0]"
              >
                <div className="absolute inset-0">
                  <img src={b.image} alt={b.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"></div>
                </div>
                <div className="relative p-8 md:p-10 min-h-[460px] flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">{b.type}</span>
                  <h3 className="font-display text-5xl md:text-6xl leading-[0.95]">{b.name.toUpperCase()}</h3>
                  <div className="font-assamese text-lg text-[#F4A100] mt-2">{b.nameAssamese}</div>
                  <p className="mt-4 text-[#FAF6F0]/75 max-w-md">{b.tagline}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-semibold">
                    Visit <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-24 bg-[#FFE8DC]">
        <div className="max-w-[1400px] mx-auto px-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— Frames</div>
            <h2 className="font-display text-6xl md:text-7xl leading-[0.9]">FROM THE <span className="text-[#FF5A36]">ROAD</span></h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-semibold hover:text-[#FF5A36] self-start md:self-auto">
            Open gallery <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 snap-x-start pb-2">
          {galleryImages.slice(0, 8).map((g) => (
            <figure key={g.id} className="flex-none w-[280px] md:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden relative bg-white">
              <img src={g.src} alt={g.title} className="w-full h-full object-cover kenburn" loading="lazy" />
              <figcaption className="absolute bottom-3 left-3 bg-[#FAF6F0]/95 text-[#1A1A1A] text-xs px-3 py-1.5 rounded-full uppercase tracking-[0.2em]">{g.category}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* COLLABORATIONS MARQUEE */}
      <section className="py-20 bg-[#FAF6F0] overflow-hidden border-y border-[#1A1A1A]/10">
        <div className="max-w-[1400px] mx-auto px-6 mb-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— Trusted by</div>
          <h2 className="font-serif-display text-3xl md:text-4xl italic">Brands & institutions I've collaborated with.</h2>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...collaborations, ...collaborations].map((c, i) => (
              <div key={i} className="px-10 flex items-center gap-3">
                <span className="font-display text-3xl md:text-4xl text-[#1A1A1A]/80">{c.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / TESTIMONIAL */}
      <section className="py-28 bg-[#1A1A1A] text-[#FAF6F0]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Quote className="w-10 h-10 mx-auto text-[#FF5A36] mb-6" />
          <p className="font-serif-display text-3xl md:text-5xl italic leading-tight">
            "A small village in Assam deserves the same screen as any city in the world."
          </p>
          <div className="mt-8 font-assamese text-lg text-[#F4A100]">— ৰিতুৰাজ মুদৈ</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FF5A36] text-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.3em] mb-3">— Let's build</div>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">HAVE A STORY <br /> TO TELL?</h2>
            <p className="mt-5 max-w-xl text-[#1A1A1A]/80 text-lg">Brand collaborations, documentary partnerships, speaking sessions, or just a chai — my inbox is open.</p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FAF6F0] px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#FAF6F0] hover:text-[#1A1A1A]">
              Start a conversation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
