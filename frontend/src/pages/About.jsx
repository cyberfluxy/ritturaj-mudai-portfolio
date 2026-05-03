import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Camera, Mic, Utensils, GraduationCap, Trophy, Users, Calendar, Award, Languages } from "lucide-react";
import { profile, philosophy, galleryImages, testimonials, journey, education, careerHistory, achievements, platformBreakdown } from "../data/mock";

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
              <span className="text-[#FF5A36]">NONOI</span>, <br />
              WITH A CAMERA.
            </h1>
            <div className="font-assamese text-2xl text-[#1A1A1A]/70 mt-6">ননোইৰ এটি লৰা — এখন ক্যামেৰাৰ সৈতে।</div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#1A1A1A]/70">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-[#FF5A36]" /> {profile.location}</span>
              <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/40"></span>
              <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> Born {profile.dob}</span>
              <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/40"></span>
              <span>Storyteller since 2019</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <img src={profile.heroImage} alt={profile.name} className="w-full h-full object-cover kenburn" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-4">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Languages</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {profile.languages.map((l) => (
                    <span key={l} className="text-xs px-2 py-1 rounded-full bg-[#FFE8DC]">{l}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-4">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Strengths</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {profile.strengths.slice(0, 2).map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-full bg-[#FFE8DC]">{s}</span>
                  ))}
                </div>
              </div>
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
                {["YouTuber", "Founder · Nogoya", "Founder · Mudai Kitchen 24", "Filmmaker", "Assamese Voice"].map((t) => (
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

      {/* Journey timeline */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— The Journey</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] mb-14">FROM 2002 <br />TO TODAY.</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#1A1A1A]/15"></div>
            <div className="space-y-10">
              {journey.map((j, i) => (
                <div key={j.year} className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className="hidden md:block"></div>
                  <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <span className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 mt-2 w-8 h-8 rounded-full bg-[#FF5A36] text-[#FAF6F0] flex items-center justify-center text-[10px] font-bold"><span className="w-2.5 h-2.5 rounded-full bg-[#FAF6F0]"></span></span>
                    <div className="font-display text-4xl text-[#FF5A36] leading-none mb-2">{j.year}</div>
                    <h3 className="font-serif-display text-2xl leading-tight">{j.title}</h3>
                    <p className="mt-2 text-[#1A1A1A]/75 max-w-md">{j.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Education</div>
            <h2 className="font-serif-display text-5xl italic leading-[0.95]">School books, college campuses, and a camera that never stopped.</h2>
            <div className="mt-6 inline-flex items-center gap-2 text-[#1A1A1A]/70"><GraduationCap className="w-5 h-5 text-[#FF5A36]" /> Currently pursuing M.A. at Tezpur University</div>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {education.map((e) => (
              <article key={e.level} className="card-lift bg-[#FAF6F0] border border-[#1A1A1A]/10 rounded-3xl p-6 md:p-7 grid md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-2">
                  <div className="font-display text-3xl text-[#FF5A36] leading-none">{e.level}</div>
                </div>
                <div className="md:col-span-6">
                  <div className="font-semibold text-lg">{e.institution}</div>
                  <div className="text-sm text-[#1A1A1A]/65">{e.board}</div>
                </div>
                <div className="md:col-span-2 text-sm md:text-right">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A]/55">Result</div>
                  <div className="font-medium">{e.score}</div>
                </div>
                <div className="md:col-span-2 text-sm md:text-right">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A]/55">Year</div>
                  <div className="font-medium">{e.year}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Experience</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] mb-12">WHAT I'VE <br /> BEEN DOING.</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {careerHistory.map((c) => (
              <article key={c.role + c.org} className="card-lift bg-white border border-[#1A1A1A]/10 rounded-3xl p-7">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF5A36] font-semibold">{c.period}</span>
                </div>
                <h3 className="font-serif-display text-2xl leading-tight">{c.role}</h3>
                <div className="text-sm text-[#1A1A1A]/65 mt-1">{c.org}</div>
                <p className="mt-4 text-[#1A1A1A]/80 leading-relaxed">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-[#1A1A1A] text-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— Highlights</div>
              <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">MOMENTS <br /> THAT MATTERED.</h2>
            </div>
            <span className="font-assamese text-xl text-[#F4A100]">উল্লেখযোগ্য সাফল্য</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((a) => (
              <article key={a.title} className="bg-[#FAF6F0]/5 border border-[#FAF6F0]/10 rounded-3xl p-7 hover:border-[#FF5A36] transition-colors">
                <div className="font-display text-5xl text-[#FF5A36] leading-none mb-4">{a.metric}</div>
                <h3 className="font-serif-display text-2xl leading-tight italic mb-3">{a.title}</h3>
                <p className="text-[#FAF6F0]/75 text-sm leading-relaxed">{a.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Across platforms</div>
          <h2 className="font-serif-display text-5xl md:text-6xl italic leading-[0.95] mb-12">Where you'll find me.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {platformBreakdown.map((p) => (
              <div key={p.platform} className="card-lift bg-[#FAF6F0] border border-[#1A1A1A]/10 rounded-3xl p-7">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#FF5A36]">{p.platform}</div>
                <div className="mt-3 font-display text-3xl">{p.value}</div>
                <div className="mt-2 text-sm text-[#1A1A1A]/70">{p.handle}</div>
                <p className="mt-4 text-sm text-[#1A1A1A]/65">{p.note}</p>
              </div>
            ))}
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
              { icon: Camera, title: "Content Creator", as: "চিন্তা সৃষ্টিকাৰী", text: "1,500+ vlogs, reels and travel films across YouTube, Instagram and Facebook." },
              { icon: Mic, title: "Media Founder", as: "মিডিয়া প্ৰতিষ্ঠাতা", text: "Founder & Editor of Nogoya — a digital news portal with a team of ~20." },
              { icon: Utensils, title: "F&B Entrepreneur", as: "খাদ্য ব্যৱসায়ী", text: "Running Mudai Kitchen 24, an Assamese street-food kitchen open 24 hours." },
              { icon: Trophy, title: "Brand Storyteller", as: "ব্ৰ্যাণ্ড কাহিনীকাৰ", text: "Campaigns and films for brands that respect honest narratives." },
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
      <section className="py-24 bg-[#FFE8DC]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Philosophy</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] mb-14 max-w-4xl">THE PRINCIPLES THAT GUIDE THE WORK.</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {philosophy.map((p, i) => (
              <div key={p.title} className="border-t border-[#1A1A1A]/20 pt-6">
                <div className="font-display text-6xl text-[#FF5A36] mb-4">0{i + 1}</div>
                <h3 className="font-serif-display text-3xl leading-tight italic mb-2">{p.title}</h3>
                <div className="font-assamese text-base text-[#1A1A1A]/65 mb-4">{p.titleAssamese}</div>
                <p className="text-[#1A1A1A]/75 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family / personal note */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Roots</div>
            <h2 className="font-serif-display text-5xl italic leading-[0.95]">Family is where the camera always returns.</h2>
            <div className="font-assamese text-lg text-[#1A1A1A]/65 mt-4">পৰিবাৰ—অনাৰ পৰা সব শুৰু।</div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            <div className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-3"><Users className="w-5 h-5 text-[#FF5A36]" /><div className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Father</div></div>
              <div className="font-serif-display text-2xl">{profile.family.father}</div>
            </div>
            <div className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-3"><Users className="w-5 h-5 text-[#FF5A36]" /><div className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Mother</div></div>
              <div className="font-serif-display text-2xl">{profile.family.mother}</div>
            </div>
            <div className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-6 sm:col-span-2">
              <div className="flex items-center gap-3 mb-3"><MapPin className="w-5 h-5 text-[#FF5A36]" /><div className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Permanent address</div></div>
              <div className="font-medium leading-relaxed">{profile.fullAddress}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Words</div>
          <h2 className="font-serif-display text-5xl md:text-6xl italic leading-tight mb-12">What people say.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <figure key={i} className="card-lift bg-[#FAF6F0] border border-[#1A1A1A]/10 rounded-3xl p-7">
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
