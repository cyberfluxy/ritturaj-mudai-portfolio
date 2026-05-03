import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { businesses } from "../data/mock";

const Businesses = () => {
  return (
    <div>
      <section className="pt-12 pb-12 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Ventures</div>
          <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88]">
            BEYOND <br /> THE <span className="text-[#FF5A36]">LENS</span>.
          </h1>
          <p className="max-w-2xl mt-6 text-lg text-[#1A1A1A]/75">
            Two ventures — a media channel and a kitchen — both built on the same belief: the North-East deserves better stories and better food, told and served with care.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-6 space-y-8">
          {businesses.map((b, i) => (
            <Link
              key={b.slug}
              to={`/businesses/${b.slug}`}
              className="card-lift group block relative overflow-hidden rounded-[36px] bg-[#1A1A1A] text-[#FAF6F0]"
            >
              <div className="grid lg:grid-cols-12 min-h-[520px]">
                <div className="lg:col-span-6 relative">
                  <img src={b.image} alt={b.name} className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/40 to-transparent"></div>
                </div>
                <div className="lg:col-span-6 p-10 md:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36]">0{i + 1} · {b.type}</span>
                  </div>
                  <h2 className="font-display text-6xl md:text-7xl leading-[0.95]">{b.name.toUpperCase()}</h2>
                  <div className="font-assamese text-2xl text-[#F4A100] mt-3">{b.nameAssamese}</div>
                  <p className="mt-6 text-[#FAF6F0]/80 max-w-lg leading-relaxed">{b.description}</p>
                  <div className="mt-8 flex items-center gap-6">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#FAF6F0]/60">Founded {b.yearFounded}</span>
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-semibold group-hover:text-[#FF5A36]">
                      Explore <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Businesses;
