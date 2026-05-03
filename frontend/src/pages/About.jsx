import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Camera, Mic, Utensils } from "lucide-react";
import { profile, philosophy, galleryImages, testimonials } from "../data/mock";

const About = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative bg-[#FAF6F0] pt-12 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— The Person</div>
            <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.9]">
              A BOY FROM <br />
              <span className="text-[#FF5A36]">NAGAON</span>, <br />
              WITH A CAMERA.
            </h1>
            <div className="font-assamese text-2xl text-[#1A1A1A]/70 mt-6">নগাঁৱৰ এটি লৰা — এখন ক্যামেৰাৰ সৈতে।</div>
            <div className="mt-8 flex items-center gap-4 text-sm text-[#1A1A1A]/70">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-[#FF5A36]" /> {profile.location}</span>
              <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/40"></span>
              <span>Storyteller since 2019</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <img src={profile.heroImage} alt={profile.name} className="w-full h-full object-cover kenburn" />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Bio</div>
              <h2 className="font-serif-display text-4xl italic leading-tight">The long version.</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {["YouTuber", "Founder", "Filmmaker", "Assamese Voice"].map((t) => (
                  <span key={t} className="text-xs uppercase tracking-[0.18em] border border-[#1A1A1A]/20 rounded-full px-3 py-1.5">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-[#1A1A1A]/85">
            {profile.longBio.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:font-display first-letter:text-7xl first-letter:text-[#FF5A36] first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]" : ""}>{p}</p>
            ))}
            <blockquote className="mt-10 border-l-2 border-[#FF5A36] pl-6 font-serif-display italic text-2xl text-[#1A1A1A]">
              "মোৰ ক্যামেৰা এখন নোতোৱা — একচাম চোৱা চকু।"
              <div className="font-sans text-base not-italic mt-3 text-[#1A1A1A]/70">My camera is my notebook — a thousand watching eyes.</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— What I do</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] mb-12">FOUR HATS, <br /> ONE STORYTELLER.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Camera, title: "Content Creator", as: "চিন্তা সৃষ্টিকাৰী", text: "Vlogs, reels and travel films across YouTube and Instagram." },
              { icon: Mic, title: "Media Founder", as: "মিডিয়া প্ৰতিষ্ঠাতা", text: "Building Nogoya — an indie media channel for the North-East." },
              { icon: Utensils, title: "F&B Entrepreneur", as: "খাদ্য ব্যৱসায়ী", text: "Running Mudai Kitchen 24, an Assamese street-food kitchen." },
              { icon: Camera, title: "Brand Storyteller", as: "ব্ৰ্যাণ্ড কাহিনীকাৰ", text: "Campaigns and films for brands that respect honest narratives." },
            ].map((r) => (
              <div key={r.title} className="card-lift bg-white border border-[#1A1A1A]/10 rounded-3xl p-7">
                <div className="w-12 h-12 rounded-2xl bg-[#FF5A36]/10 text-[#FF5A36] flex items-center justify-center mb-5">
                  <r.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display text-2xl leading-tight mb-1">{r.title}</h3>
                <div className="font-assamese text-sm text-[#1A1A1A]/55 mb-3">{r.as}</div>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#1A1A1A] text-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Philosophy</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] mb-14 max-w-4xl">THE PRINCIPLES THAT GUIDE THE WORK.</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {philosophy.map((p, i) => (
              <div key={p.title} className="border-t border-[#FAF6F0]/20 pt-6">
                <div className="font-display text-6xl text-[#FF5A36] mb-4">0{i + 1}</div>
                <h3 className="font-serif-display text-3xl leading-tight italic mb-2">{p.title}</h3>
                <div className="font-assamese text-base text-[#F4A100] mb-4">{p.titleAssamese}</div>
                <p className="text-[#FAF6F0]/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Words</div>
          <h2 className="font-serif-display text-5xl md:text-6xl italic leading-tight mb-12">What people say.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <figure key={i} className="card-lift bg-white border border-[#1A1A1A]/10 rounded-3xl p-7">
                <div className="font-display text-5xl text-[#FF5A36] leading-none mb-4">“</div>
                <blockquote className="text-[#1A1A1A]/85 leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-[#1A1A1A]/10">
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A]/60 mt-1">{t.org}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Snapshots */}
      <section className="py-20 bg-[#FFE8DC]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— Off camera</div>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.9]">SOME SNAPSHOTS.</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-semibold hover:text-[#FF5A36]">View all <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((g) => (
              <div key={g.id} className="aspect-square rounded-2xl overflow-hidden">
                <img src={g.src} alt={g.title} className="w-full h-full object-cover kenburn" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
