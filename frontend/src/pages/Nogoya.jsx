import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mic, Radio, Film, Quote, Users, Facebook, Instagram } from "lucide-react";
import { nogoyaContent, businesses } from "../data/mock";

const Nogoya = () => {
  const biz = businesses.find((b) => b.slug === "nogoya");
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1A1A1A] text-[#FAF6F0] overflow-hidden">
        <div className="absolute inset-0">
          <img src={nogoyaContent.hero} alt="Nogoya" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A]/70 to-[#1A1A1A]"></div>
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 pt-20 pb-24">
          <Link to="/businesses" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#FAF6F0]/70 hover:text-[#FF5A36] mb-10">
            <span className="rotate-180 inline-block"><ArrowUpRight className="w-3.5 h-3.5" /></span> Ventures
          </Link>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Independent Media · Est. {biz.yearFounded}</div>
              <h1 className="font-display text-[clamp(4rem,12vw,11rem)] leading-[0.85]">
                NOGOYA<span className="text-[#FF5A36]">.</span>
              </h1>
              <div className="font-assamese text-3xl text-[#F4A100] mt-3">{biz.nameAssamese}</div>
            </div>
            <div className="lg:col-span-4">
              <p className="text-lg text-[#FAF6F0]/80 leading-relaxed">{biz.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— The vision</div>
            <h2 className="font-serif-display text-5xl md:text-6xl italic leading-[0.95]">A slow, honest archive of the North-East.</h2>
          </div>
          <div className="lg:col-span-7 text-lg leading-relaxed text-[#1A1A1A]/85 space-y-5">
            <p>{biz.description}</p>
            <p>We are a small studio out of Nagaon. We make films, podcasts, and field reports — in Assamese first, English second — about the people, places, and questions that mainstream media has been too lazy to cover well.</p>
            <p>Nogoya is independent. There is no investor pulling strings, no algorithm we are scared of. We are building for the next decade.</p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— What we stand for</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.9] mb-12">FOUR PILLARS.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {nogoyaContent.pillars.map((p, i) => (
              <div key={p} className="card-lift bg-[#FAF6F0] rounded-3xl p-7 border border-[#1A1A1A]/10">
                <div className="font-display text-5xl text-[#FF5A36] mb-4">0{i + 1}</div>
                <p className="text-[#1A1A1A]/85 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Reach */}
      <section className="py-20 bg-[#FFE8DC]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— By the numbers</div>
            <h2 className="font-serif-display text-4xl md:text-5xl italic leading-[0.95]">A small team, a big intention.</h2>
            <p className="mt-5 text-[#1A1A1A]/75 max-w-md">Founded in {nogoyaContent.founded}, Nogoya is run by a tight group of journalists, editors and producers — all working out of Nagaon.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-6">
              <Users className="w-5 h-5 text-[#FF5A36] mb-4" />
              <div className="font-display text-4xl">~20</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/55 mt-2">Team members</div>
            </div>
            <div className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-6">
              <Facebook className="w-5 h-5 text-[#FF5A36] mb-4" />
              <div className="font-display text-4xl">{nogoyaContent.reach.facebook}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/55 mt-2">Facebook followers</div>
            </div>
            <div className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-6">
              <Instagram className="w-5 h-5 text-[#FF5A36] mb-4" />
              <div className="font-display text-4xl">{nogoyaContent.reach.instagram}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/55 mt-2">Instagram followers</div>
            </div>
          </div>
        </div>
      </section>


      {/* Shows */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— Our shows</div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">WHAT WE'RE <br /> MAKING.</h2>
            </div>
            <div className="flex items-center gap-4 text-[#1A1A1A]/70">
              <span className="inline-flex items-center gap-2"><Mic className="w-4 h-4 text-[#FF5A36]" /> Podcasts</span>
              <span className="inline-flex items-center gap-2"><Film className="w-4 h-4 text-[#FF5A36]" /> Documentaries</span>
              <span className="inline-flex items-center gap-2"><Radio className="w-4 h-4 text-[#FF5A36]" /> Field reports</span>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {nogoyaContent.shows.map((s) => (
              <article key={s.title} className="card-lift group bg-white rounded-3xl overflow-hidden border border-[#1A1A1A]/10">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF5A36]">{s.type}</span>
                  <h3 className="mt-2 font-serif-display text-3xl leading-tight">{s.title}</h3>
                  <div className="font-assamese text-base text-[#1A1A1A]/55 mt-1">{s.titleAssamese}</div>
                  <p className="mt-4 text-sm text-[#1A1A1A]/75 leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="py-24 bg-[#1A1A1A] text-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src={nogoyaContent.studioImage} alt="Nogoya Studio" className="w-full h-full object-cover kenburn" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— The Studio</div>
            <h2 className="font-serif-display text-5xl md:text-6xl italic leading-[0.95]">Built in Nagaon. Heard everywhere.</h2>
            <p className="mt-6 text-[#FAF6F0]/75 text-lg leading-relaxed">A small two-room studio with a wooden booth, two mics, a camera rig, and a kettle that never stops boiling. This is where the work happens.</p>
            <Quote className="w-8 h-8 text-[#FF5A36] mt-10 mb-4" />
            <p className="font-serif-display text-2xl italic">“We are not chasing virality. We are chasing the truth, slowly.”</p>
            <div className="font-assamese text-[#F4A100] mt-3">— Nogoya Manifesto</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FF5A36] text-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h3 className="font-display text-5xl md:text-6xl leading-[0.95]">PARTNER WITH NOGOYA.</h3>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FAF6F0] px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#FAF6F0] hover:text-[#1A1A1A]">
            Get in touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Nogoya;
