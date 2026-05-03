import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { collaborations, testimonials } from "../data/mock";

const Collaborations = () => {
  const grouped = collaborations.reduce((acc, c) => {
    acc[c.category] = acc[c.category] || [];
    acc[c.category].push(c);
    return acc;
  }, {});

  return (
    <div>
      <section className="pt-12 pb-12 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Collaborations</div>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88]">
              BRANDS, <br /> PEOPLE, <br /> <span className="text-[#FF5A36]">PROJECTS.</span>
            </h1>
            <div className="font-assamese text-xl text-[#1A1A1A]/70 mt-5">একোলগে কাম কৰা সকলো।</div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-[#1A1A1A] text-[#FAF6F0] rounded-3xl p-7">
              <Sparkles className="w-6 h-6 text-[#FF5A36] mb-4" />
              <p className="text-lg leading-relaxed">A hand-picked record of campaigns, films and partnerships from the past few years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="py-12 bg-white border-y border-[#1A1A1A]/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#1A1A1A]/10">
            {collaborations.map((c) => (
              <div key={c.name} className="bg-white aspect-[3/2] flex items-center justify-center text-center px-3 hover:bg-[#FFE8DC] group">
                <div>
                  <div className="font-display text-2xl md:text-3xl leading-tight group-hover:text-[#FF5A36]">{c.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/50 mt-2">{c.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grouped table */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="font-serif-display text-4xl md:text-5xl italic mb-12">By category.</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(grouped).map(([cat, items]) => (
              <div key={cat} className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-7">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display text-3xl">{cat.toUpperCase()}</h3>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#1A1A1A]/55">{items.length} project{items.length > 1 ? "s" : ""}</span>
                </div>
                <ul className="divide-y divide-[#1A1A1A]/10">
                  {items.map((p) => (
                    <li key={p.name} className="py-3 flex items-center justify-between">
                      <span className="font-medium">{p.name}</span>
                      <span className="text-sm text-[#FF5A36]">{p.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1A1A1A] text-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Words from partners</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.9] mb-12">WHAT THEY SAY.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-[#FAF6F0]/5 border border-[#FAF6F0]/10 rounded-3xl p-7">
                <div className="font-display text-5xl text-[#FF5A36] leading-none mb-4">“</div>
                <blockquote className="text-[#FAF6F0]/85 leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-[#FAF6F0]/15">
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[#FAF6F0]/55 mt-1">{t.org}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FF5A36] text-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-5xl md:text-6xl leading-[0.95]">LET'S BUILD <br /> THE NEXT ONE.</h3>
            <p className="mt-3 max-w-md text-[#1A1A1A]/85">Open to brand campaigns, documentary partnerships, and long-form content collabs.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FAF6F0] px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#FAF6F0] hover:text-[#1A1A1A]">
            Get in touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
