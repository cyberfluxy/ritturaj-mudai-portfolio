import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube, Send, CheckCircle2 } from "lucide-react";
import { profile, socials } from "../data/mock";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "Brand Collaboration", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: persist locally so the user feels the form works
    const inbox = JSON.parse(localStorage.getItem("rm_inbox") || "[]");
    inbox.unshift({ ...form, at: new Date().toISOString() });
    localStorage.setItem("rm_inbox", JSON.stringify(inbox.slice(0, 20)));
    setSent(true);
    toast({ title: "Message received ✨", description: "Thank you. Ritturaj will get back to you soon." });
    setTimeout(() => {
      setForm({ name: "", email: "", subject: "Brand Collaboration", message: "" });
      setSent(false);
    }, 3500);
  };

  return (
    <div>
      <section className="pt-12 pb-16 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-4">— Contact</div>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88]">
              SAY <span className="text-[#FF5A36]">HELLO</span>.
            </h1>
            <div className="font-assamese text-2xl text-[#1A1A1A]/70 mt-4">এটা চাহ খাওঁক, গল্প কৰোঁ।</div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-3">
            <a href={`mailto:${profile.email}`} className="card-lift bg-white border border-[#1A1A1A]/10 rounded-3xl p-5 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-[#FF5A36]/10 text-[#FF5A36] flex items-center justify-center"><Mail className="w-5 h-5" /></span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Email</div>
                <div className="font-medium">{profile.email}</div>
              </div>
            </a>
            <a href={`tel:${profile.phone}`} className="card-lift bg-white border border-[#1A1A1A]/10 rounded-3xl p-5 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-[#FF5A36]/10 text-[#FF5A36] flex items-center justify-center"><Phone className="w-5 h-5" /></span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Phone</div>
                <div className="font-medium">{profile.phone}</div>
              </div>
            </a>
            <div className="card-lift bg-white border border-[#1A1A1A]/10 rounded-3xl p-5 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-[#FF5A36]/10 text-[#FF5A36] flex items-center justify-center"><MapPin className="w-5 h-5" /></span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Based in</div>
                <div className="font-medium">{profile.location}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-[#FAF6F0]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-8 md:p-10">
              <h2 className="font-serif-display text-3xl italic mb-1">Tell me what's on your mind.</h2>
              <p className="text-sm text-[#1A1A1A]/60 mb-8">All messages are read personally. Expect a reply within 48 hours.</p>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Your name</label>
                  <input required name="name" value={form.name} onChange={onChange} className="mt-2 w-full bg-transparent border-b border-[#1A1A1A]/25 focus:border-[#FF5A36] outline-none py-2.5" placeholder="Anuradha Borah" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Email</label>
                  <input required type="email" name="email" value={form.email} onChange={onChange} className="mt-2 w-full bg-transparent border-b border-[#1A1A1A]/25 focus:border-[#FF5A36] outline-none py-2.5" placeholder="you@email.com" />
                </div>
              </div>
              <div className="mt-6">
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">What is this about?</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Brand Collaboration", "Documentary", "Speaking", "Mudai Kitchen Order", "Just saying hi"].map((s) => (
                    <button type="button" key={s} onClick={() => setForm((f) => ({ ...f, subject: s }))} className={`text-xs uppercase tracking-[0.18em] rounded-full px-4 py-2 border ${form.subject === s ? "bg-[#1A1A1A] text-[#FAF6F0] border-[#1A1A1A]" : "border-[#1A1A1A]/20 hover:border-[#FF5A36] hover:text-[#FF5A36]"}`}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/55">Message</label>
                <textarea required rows={5} name="message" value={form.message} onChange={onChange} className="mt-2 w-full bg-transparent border border-[#1A1A1A]/15 rounded-2xl focus:border-[#FF5A36] outline-none p-4 resize-none" placeholder="Tell me a bit about the project, the timeline, and what excites you..." />
              </div>
              <button type="submit" disabled={sent} className="mt-8 inline-flex items-center gap-2 bg-[#FF5A36] disabled:bg-[#1A1A1A] text-[#FAF6F0] px-7 py-3.5 rounded-full text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#1A1A1A]">
                {sent ? (<><CheckCircle2 className="w-4 h-4" /> Sent</>) : (<><Send className="w-4 h-4" /> Send message</>)}
              </button>
            </form>
          </div>
          <aside className="lg:col-span-5 space-y-5">
            <div className="bg-[#1A1A1A] text-[#FAF6F0] rounded-3xl p-8">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5A36] mb-3">— Follow</div>
              <h3 className="font-serif-display text-3xl italic mb-5">Or just slide into DMs.</h3>
              <a href={socials.instagram.url} target="_blank" rel="noreferrer" className="flex items-center justify-between py-4 border-t border-[#FAF6F0]/15 group">
                <span className="flex items-center gap-3"><Instagram className="w-5 h-5 text-[#FF5A36]" /> Instagram</span>
                <span className="text-sm opacity-70 group-hover:text-[#FF5A36]">{socials.instagram.handle}</span>
              </a>
              <a href={socials.youtube.url} target="_blank" rel="noreferrer" className="flex items-center justify-between py-4 border-t border-[#FAF6F0]/15 group">
                <span className="flex items-center gap-3"><Youtube className="w-5 h-5 text-[#FF5A36]" /> YouTube</span>
                <span className="text-sm opacity-70 group-hover:text-[#FF5A36]">{socials.youtube.handle}</span>
              </a>
            </div>
            <div className="bg-[#FFE8DC] rounded-3xl p-8">
              <div className="font-assamese text-xl text-[#1A1A1A]/80">“চাহ একাপ খাই গল্প কৰোঁ।”</div>
              <div className="text-sm text-[#1A1A1A]/65 mt-2">A cup of cha and a conversation — always open.</div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Contact;
