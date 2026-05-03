import React, { useMemo, useState } from "react";
import { X } from "lucide-react";
import { galleryImages, galleryCategories } from "../data/mock";

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(
    () => (active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active)),
    [active]
  );

  return (
    <div>
      {/* Hero */}
      <section className="pt-12 pb-12 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Gallery</div>
          <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88]">
            FRAMES FROM <span className="text-[#FF5A36]">A LIFE</span>
            <br /> ON THE ROAD.
          </h1>
          <div className="font-assamese text-xl text-[#1A1A1A]/70 mt-5">রাস্তাৰ পৰা ছবি — জীৱনৰ টুক্ৰা।</div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-[#FAF6F0]/90 backdrop-blur border-y border-[#1A1A1A]/10">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-semibold border ${
                active === c
                  ? "bg-[#1A1A1A] text-[#FAF6F0] border-[#1A1A1A]"
                  : "bg-transparent text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#FF5A36] hover:text-[#FF5A36]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((g, idx) => (
              <button
                key={g.id}
                onClick={() => setLightbox(g)}
                className="mb-5 break-inside-avoid block w-full text-left group overflow-hidden rounded-3xl bg-white border border-[#1A1A1A]/10 card-lift"
              >
                <div className={`relative ${idx % 3 === 0 ? "aspect-[4/5]" : idx % 3 === 1 ? "aspect-[3/4]" : "aspect-square"}`}>
                  <img src={g.src} alt={g.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover kenburn" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#FF5A36]">{g.category}</div>
                      <div className="text-[#FAF6F0] font-serif-display text-lg leading-tight">{g.title}</div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-[#1A1A1A]/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FAF6F0] text-[#1A1A1A] flex items-center justify-center hover:bg-[#FF5A36] hover:text-[#FAF6F0]"
            onClick={() => setLightbox(null)}
            aria-label="close"
          >
            <X className="w-5 h-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl w-full">
            <div className="rounded-3xl overflow-hidden">
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[80vh] object-contain bg-black" />
            </div>
            <figcaption className="mt-5 text-[#FAF6F0] flex items-center justify-between">
              <div>
                <div className="font-serif-display text-2xl">{lightbox.title}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-[#FF5A36] mt-1">{lightbox.category}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default Gallery;
