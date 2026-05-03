import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, MapPin, Leaf, Flame, IndianRupee } from "lucide-react";
import { mudaiKitchenContent, businesses } from "../data/mock";

const MudaiKitchen = () => {
  const biz = businesses.find((b) => b.slug === "mudai-kitchen");
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#FFE8DC] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 pt-12 pb-16 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Link to="/businesses" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#1A1A1A]/65 hover:text-[#FF5A36] mb-8">
              <span className="rotate-180 inline-block"><ArrowUpRight className="w-3.5 h-3.5" /></span> Ventures
            </Link>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Street Food Kitchen · Est. {biz.yearFounded}</div>
            <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.85]">
              MUDAI <br /> KITCHEN <span className="text-[#FF5A36]">24</span>.
            </h1>
            <div className="font-assamese text-3xl text-[#1A1A1A]/75 mt-3">{biz.nameAssamese}</div>
            <p className="mt-6 max-w-xl text-lg text-[#1A1A1A]/80">{biz.tagline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FAF6F0] px-4 py-2 rounded-full uppercase tracking-[0.2em] text-xs font-semibold"><Clock className="w-3.5 h-3.5" /> {mudaiKitchenContent.hours}</span>
              <span className="inline-flex items-center gap-2 text-[#1A1A1A]/70"><MapPin className="w-4 h-4 text-[#FF5A36]" /> Nagaon, Assam</span>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-[28px] overflow-hidden">
              <img src={mudaiKitchenContent.hero} alt="Mudai Kitchen 24" className="w-full h-full object-cover kenburn" />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Our story</div>
            <h2 className="font-serif-display text-5xl md:text-6xl italic leading-[0.95]">From my mother's kitchen to yours.</h2>
            <div className="font-assamese text-xl text-[#1A1A1A]/65 mt-4">মাৰ ৰান্ধাঘৰৰ পৰা আপোনাৰ পাতলৈ।</div>
          </div>
          <div className="lg:col-span-7 text-lg leading-relaxed text-[#1A1A1A]/85 space-y-5">
            <p>{mudaiKitchenContent.story}</p>
            <p>{biz.description}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Leaf, ...mudaiKitchenContent.values[0] },
              { icon: Flame, ...mudaiKitchenContent.values[1] },
              { icon: IndianRupee, ...mudaiKitchenContent.values[2] },
            ].map((v) => (
              <div key={v.label} className="card-lift bg-[#FAF6F0] rounded-3xl p-7 border border-[#1A1A1A]/10">
                <span className="w-12 h-12 rounded-2xl bg-[#FF5A36]/10 text-[#FF5A36] flex items-center justify-center mb-5"><v.icon className="w-5 h-5" /></span>
                <h3 className="font-serif-display text-2xl leading-tight">{v.label}</h3>
                <p className="mt-3 text-sm text-[#1A1A1A]/75 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— Today's menu</div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">FROM THE <br /> KITCHEN.</h2>
            </div>
            <span className="font-assamese text-xl text-[#1A1A1A]/65">আজিৰ পাতলৈ</span>
          </div>
          <div className="bg-white rounded-[36px] border border-[#1A1A1A]/10 overflow-hidden">
            <div className="divide-y divide-[#1A1A1A]/10">
              {mudaiKitchenContent.menu.map((m) => (
                <div key={m.name} className="grid md:grid-cols-12 px-7 md:px-10 py-7 gap-4 hover:bg-[#FFE8DC]/40">
                  <div className="md:col-span-7">
                    <h3 className="font-serif-display text-2xl md:text-3xl leading-tight">{m.name}</h3>
                  </div>
                  <div className="md:col-span-3 text-[#1A1A1A]/75">{m.desc}</div>
                  <div className="md:col-span-2 md:text-right font-display text-3xl text-[#FF5A36]">{m.price}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm text-[#1A1A1A]/55">* Menu rotates with the season — ingredients are sourced fresh, every morning.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#FFE8DC]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— The kitchen</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.9] mb-10">A LITTLE TASTE.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {mudaiKitchenContent.gallery.map((src, i) => (
              <div key={i} className={`rounded-3xl overflow-hidden ${i === 0 ? "col-span-2 md:col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
                <img src={src} alt="Mudai Kitchen dish" className="w-full h-full object-cover kenburn" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] text-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— Visit us</div>
            <h3 className="font-display text-5xl md:text-6xl leading-[0.95]">COME, EAT WITH US.</h3>
            <p className="mt-4 text-[#FAF6F0]/75 max-w-2xl">Find us in Nagaon — the kitchen runs 24 hours, the kettle is always on, and the pithas are best when fresh.</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#FF5A36] text-[#FAF6F0] px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#FAF6F0] hover:text-[#1A1A1A]">
              Reserve a table <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MudaiKitchen;
