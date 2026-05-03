
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import { FadeIn, SlideIn, ScaleIn } from "../../components/AnimatedSection";
// import { useState } from "react";

// export default function ContactPage() {
//     const [formData, setFormData] = useState({
//         name: '',
//         age: '',
//         phone: '',
//         program: 'Abacus Mental Math',
//         message: ''
//     });
//     const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setStatus('submitting');

//         try {
//             const res = await fetch('/api/contact', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formData),
//             });

//             if (!res.ok) {
//                 const data = await res.json();
//                 throw new Error(data.error || 'Submission failed');
//             }

//             setStatus('success');
//             setFormData({ name: '', age: '', phone: '', program: 'Abacus Mental Math', message: '' });
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             setStatus('error');
//         }
//     };

//     return (
//         <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#f6f7f8] dark:bg-[#111921] font-sans text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
//             <Navbar />

//             {/* Header Section */}
//             <section className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden text-center">
//                 <div className="absolute inset-0 opacity-10 pointer-events-none">
//                     <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#197fe6] rounded-full blur-3xl"></div>
//                     <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#197fe6] rounded-full blur-3xl"></div>
//                 </div>
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//                     <div className="max-w-3xl mx-auto">
//                         <span className="inline-block px-4 py-1.5 rounded-full bg-[#197fe6]/10 text-[#197fe6] text-sm font-bold mb-4 uppercase tracking-wider">Reach Out to Us</span>
//                         <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
//                             Start Your Child's <span className="text-[#197fe6]">Genius Journey</span> Today
//                         </h1>
//                         <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
//                             Have questions about our mental math or brain development programs? Our expert educators at the Dwarka branch are here to help.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Main Contact Section */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-24 relative z-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//                     {/* Contact Information Cards */}
//                     <div className="lg:col-span-4 space-y-6">
//                         <FadeIn>
//                             <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
//                                 <div className="w-12 h-12 bg-[#197fe6]/10 rounded-lg flex items-center justify-center mb-6 text-[#197fe6]">
//                                     <span className="material-symbols-outlined">location_on</span>
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-2">Visit Our Center</h3>
//                                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
//                                     D-168 C, Patel Garden,<br />
//                                     Near Dwarka Hospital,<br />
//                                     Dwarka, New Delhi - 110075
//                                 </p>
//                             </div>
//                         </FadeIn>

//                         <FadeIn delay={0.1}>
//                             <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
//                                 <div className="w-12 h-12 bg-[#197fe6]/10 rounded-lg flex items-center justify-center mb-6 text-[#197fe6]">
//                                     <span className="material-symbols-outlined">call</span>
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-2">Call Us Directly</h3>
//                                 <p className="text-slate-600 dark:text-slate-400 mb-1 font-medium text-lg">+91 98765 43210</p>
//                                 <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">+91 91234 56789</p>
//                             </div>
//                         </FadeIn>

//                         <FadeIn delay={0.2}>
//                             <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
//                                 <div className="w-12 h-12 bg-[#197fe6]/10 rounded-lg flex items-center justify-center mb-6 text-[#197fe6]">
//                                     <span className="material-symbols-outlined">mail</span>
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-2">Send an Email</h3>
//                                 <p className="text-slate-600 dark:text-slate-400">info@ascentoabacus.com</p>
//                                 <p className="text-slate-600 dark:text-slate-400">admissions@ascentoabacus.com</p>
//                             </div>
//                         </FadeIn>
//                     </div>

//                     {/* Inquiry Form */}
//                     <div className="lg:col-span-8">
//                         <FadeIn delay={0.3}>
//                             <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 h-full">
//                                 <h2 className="text-3xl font-bold mb-2">Admission Inquiry</h2>
//                                 <p className="text-slate-600 dark:text-slate-400 mb-8">Fill out the form below and our counselor will call you back within 24 hours.</p>

//                                 {status === 'success' && (
//                                     <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-start gap-3">
//                                         <span className="material-symbols-outlined text-green-500 shrink-0">check_circle</span>
//                                         <div>
//                                             <p className="font-bold">Inquiry Submitted!</p>
//                                             <p className="text-sm">Your inquiry has been submitted successfully. Our counselor will call you back within 24 hours.</p>
//                                         </div>
//                                     </div>
//                                 )}
//                                 {status === 'error' && (
//                                     <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-start gap-3">
//                                         <span className="material-symbols-outlined text-red-500 shrink-0">error</span>
//                                         <div>
//                                             <p className="font-bold">Something went wrong</p>
//                                             <p className="text-sm">Please try again later or call us directly at +91 98765 43210.</p>
//                                         </div>
//                                     </div>
//                                 )}

//                                 <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div className="space-y-2">
//                                         <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Parent Name <span className="text-red-500">*</span></label>
//                                         <input
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             required
//                                             className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-[#197fe6] focus:border-transparent transition-all"
//                                             placeholder="Enter your full name"
//                                             type="text"
//                                         />
//                                     </div>
//                                     <div className="space-y-2">
//                                         <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Child's Age</label>
//                                         <input
//                                             name="age"
//                                             value={formData.age}
//                                             onChange={handleChange}
//                                             min={3}
//                                             max={18}
//                                             className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-[#197fe6] focus:border-transparent transition-all"
//                                             placeholder="Enter age (e.g. 7)"
//                                             type="number"
//                                         />
//                                     </div>
//                                     <div className="space-y-2">
//                                         <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number <span className="text-red-500">*</span></label>
//                                         <input
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleChange}
//                                             required
//                                             className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-[#197fe6] focus:border-transparent transition-all"
//                                             placeholder="+91 XXXXX XXXXX"
//                                             type="tel"
//                                         />
//                                     </div>
//                                     <div className="space-y-2">
//                                         <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Program of Interest</label>
//                                         <select
//                                             name="program"
//                                             value={formData.program}
//                                             onChange={handleChange}
//                                             className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-[#197fe6] focus:border-transparent transition-all"
//                                         >
//                                             <option>Abacus Mental Math</option>
//                                             <option>Vedic Mathematics</option>
//                                             <option>Brain Gym</option>
//                                             <option>Pre-Abacus</option>
//                                             <option>Calligraphy</option>
//                                             <option>Handwriting Improvement</option>
//                                         </select>
//                                     </div>
//                                     <div className="space-y-2 md:col-span-2">
//                                         <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Message</label>
//                                         <textarea
//                                             name="message"
//                                             value={formData.message}
//                                             onChange={handleChange}
//                                             className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-[#197fe6] focus:border-transparent transition-all resize-none"
//                                             placeholder="Tell us more about your child's requirements..."
//                                             rows={4}
//                                         ></textarea>
//                                     </div>
//                                     <div className="md:col-span-2">
//                                         <button
//                                             disabled={status === 'submitting'}
//                                             className="w-full md:w-auto bg-[#197fe6] hover:bg-[#197fe6]/90 disabled:opacity-60 disabled:cursor-not-allowed text-white px-10 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#197fe6]/20"
//                                             type="submit"
//                                         >
//                                             {status === 'submitting' ? (
//                                                 <>
//                                                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
//                                                     </svg>
//                                                     Sending...
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     Send Inquiry <span className="material-symbols-outlined">send</span>
//                                                 </>
//                                             )}
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </FadeIn>
//                     </div>
//                 </div>
//             </section>

//             {/* Location Map Section */}
//             <section className="bg-[#f6f7f8] dark:bg-[#111921] py-12">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
//                         <div>
//                             <h2 className="text-3xl font-bold mb-2">Find Us in Dwarka</h2>
//                             <p className="text-slate-600 dark:text-slate-400">We are conveniently located near Dwarka Hospital for easy access.</p>
//                         </div>
//                         <Link
//                             className="inline-flex items-center gap-2 text-[#197fe6] font-bold hover:underline"
//                             href="https://maps.google.com/?q=D-168+C+Patel+Garden+Dwarka+New+Delhi"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             Open in Google Maps <span className="material-symbols-outlined text-sm">open_in_new</span>
//                         </Link>
//                     </div>
//                     <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
//                         <Image
//                             alt="Location Map"
//                             src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdrKdbiCpkUUy3tu2gkKOAIQHARHPZeSUCnBvHmWlI5wcMrsyFj5bDXqpEDOxyOjGeEmqvR59JHC-oKym5zlg3qGVNjb0ok0RTPq7GUMsxJcHV9Sliw1r23HxRUbpH0UvU3lK49sTrdo-gjriWGuIWa9HEmvkFTIrc_bXnoUNGGUBAq_Yby-UrSrmuMAEYwILg0eR0zszCHR3v9wmPoYMwgh_ZrHtQy18ZhRfJvcTZSLElglIaCIWgvvRcHvRdr54qOseoFfLPXYc"
//                             fill
//                             className="w-full h-full object-cover grayscale contrast-125 opacity-80"
//                         />
//                         <div className="absolute top-8 left-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-2xl max-w-sm hidden md:block">
//                             <div className="flex items-start gap-4">
//                                 <div className="w-10 h-10 bg-[#197fe6] rounded-full flex items-center justify-center shrink-0">
//                                     <span className="material-symbols-outlined text-white">location_on</span>
//                                 </div>
//                                 <div>
//                                     <h4 className="font-bold text-slate-900 dark:text-white">Ascento Abacus Dwarka</h4>
//                                     <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">D-168 C, Patel Garden, Opp. Dwarka Hospital, Sector 15, New Delhi.</p>
//                                     <Link
//                                         href="https://maps.google.com/?q=D-168+C+Patel+Garden+Dwarka+New+Delhi"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="inline-flex items-center gap-1 text-[#197fe6] text-xs font-bold mt-2 hover:underline"
//                                     >
//                                         Get Directions <span className="material-symbols-outlined text-xs">open_in_new</span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// }





















"use client";

// ─────────────────────────────────────────────
// /app/contact/page.jsx  — Ascento Contact Page
// ─────────────────────────────────────────────
import Link from "next/link";
import { useState } from "react";

const contactInfo = [
  { emoji: "📍", title: "Our Location", lines: ["Dwarka, New Delhi", "India – 110 078"], color: "#FF6B6B" },
  { emoji: "📞", title: "Call / WhatsApp", lines: ["+91 98765 43210", "Mon–Sat, 9AM–7PM"], color: "#4ECDC4" },
  { emoji: "📧", title: "Email Us", lines: ["info@ascento.in", "We reply within 2 hours"], color: "#FFB347" },
  { emoji: "🌐", title: "Website", lines: ["www.ascento.in", "Find us on Social Media"], color: "#A78BFA" },
];

const reasons = [
  { emoji: "🧮", title: "Enrol My Child", desc: "I want to register my child for Abacus, Vedic Maths, Brain Gym, or another programme." },
  { emoji: "🆓", title: "Book a Free Trial", desc: "I'd like to book a free trial class before committing." },
  { emoji: "🏪", title: "Franchise Enquiry", desc: "I'm interested in opening an Ascento centre in my city." },
  { emoji: "❓", title: "General Question", desc: "I have a question about the programmes, timings, fees, or anything else." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", childAge: "", reason: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitted(true);
};
  return (
    <div style={{ fontFamily: "'Nunito', 'Fredoka One', system-ui, sans-serif", background: "#FFFDF7", color: "#1A1A2E", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        @keyframes float-a { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes float-b { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .float-a { animation: float-a 4s ease-in-out infinite; }
        .float-b { animation: float-b 5s ease-in-out infinite; }

        .info-card { transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s; }
        .info-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,.1); }

        .reason-pill { display:flex; align-items:center; gap:12px; padding:14px 18px; border-radius:16px; border:2.5px solid #E8E4F8; cursor:pointer; transition:all .2s; background:white; }
        .reason-pill:hover { border-color:#FF6B6B; }
        .reason-pill.selected { border-color:#FF6B6B; background:#FFF0F0; }

        .form-input { width:100%; padding:14px 18px; border-radius:14px; border:2.5px solid #E8E4F8; background:white; font-family:inherit; font-size:15px; font-weight:700; color:#1A1A2E; outline:none; transition:border-color .2s; }
        .form-input:focus { border-color:#FF6B6B; }

        .enrol-btn { background:#FF6B6B; color:#fff; font-family:inherit; font-weight:900; font-size:15px; padding:14px 32px; border-radius:50px; border:none; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; box-shadow:0 6px 20px rgba(255,107,107,.4); transition:all .3s cubic-bezier(.34,1.56,.64,1); }
        .enrol-btn:hover { transform:scale(1.07); }

        .nav-link { font-size:15px; font-weight:800; color:#1A1A2E; text-decoration:none; transition:color .2s; }
        .nav-link:hover { color:#FF6B6B; }

        ::-webkit-scrollbar { width:8px; }
        ::-webkit-scrollbar-thumb { background:#FFB347; border-radius:4px; }
      `}</style>

      {/* NAVBAR */}
      {/* <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: "14px 0", background: "rgba(255,253,247,0.95)", backdropFilter: "blur(16px)", boxShadow: "0 2px 20px rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg,#FF6B6B,#FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🧮</div>
            <div>
              <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#1A1A2E", lineHeight: 1 }}>Ascento <span style={{ color: "#FF6B6B" }}>Abacus</span></div>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999" }}>Brain Development Academy</div>
            </div>
          </Link>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {[["Programs", "/programs"], ["Why Us", "/#whyus"], ["Franchise", "/franchise"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={l} href={h} className="nav-link">{l}</Link>
            ))}
          </div>
          <Link href="/contact" className="enrol-btn" style={{ fontSize: 14 }}>🎉 Enrol Now</Link>
        </div>
      </nav> */}

      {/* HERO */}
      <section style={{ paddingTop: 130, paddingBottom: 72, background: "linear-gradient(160deg,#FFFDF7 0%,#FFF0E8 50%,#FFFDF7 100%)", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,#FFB347 1.5px,transparent 1.5px)", backgroundSize: "36px 36px", opacity: 0.14 }} />
        <div style={{ position: "absolute", top: "15%", left: "6%", fontSize: 48 }} className="float-a">👋</div>
        <div style={{ position: "absolute", top: "20%", right: "8%", fontSize: 40 }} className="float-b">💬</div>
        <div style={{ position: "absolute", bottom: "15%", left: "10%", fontSize: 36 }} className="float-b">📞</div>
        <div style={{ position: "absolute", bottom: "20%", right: "6%", fontSize: 44 }} className="float-a">❤️</div>

        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FFF0F0", borderRadius: 50, padding: "8px 20px", marginBottom: 20, border: "2px solid #FFD6D6" }}>
            <span>💬</span>
            <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FF6B6B" }}>Get In Touch</span>
          </div>
          <h1 style={{ fontFamily: "'Fredoka One',cursive", fontSize: "clamp(40px,5vw,68px)", color: "#1A1A2E", lineHeight: 1.08, marginBottom: 18 }}>
            We'd Love to <span style={{ color: "#FF6B6B" }}>Hear</span><br />from You! 👋
          </h1>
          <p style={{ fontSize: 18, color: "#666", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
            Whether you're enquiring about enrolment, booking a free trial, or have a question — our friendly team is here to help!
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section style={{ padding: "72px 0 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginBottom: 72 }}>
            {contactInfo.map((c, i) => (
              <div key={i} className="info-card" style={{ background: "white", borderRadius: 22, padding: "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,.07)", border: `3px solid ${c.color}18`, textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: c.color }} />
                <div style={{ fontSize: 40, marginBottom: 12, marginTop: 8 }}>{c.emoji}</div>
                <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 18, color: "#1A1A2E", marginBottom: 10 }}>{c.title}</div>
                {c.lines.map((l, li) => (
                  <div key={li} style={{ fontSize: 14, fontWeight: li === 0 ? 800 : 600, color: li === 0 ? "#333" : "#999", lineHeight: 1.5 }}>{l}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN: FORM + MAP */}
      <section style={{ padding: "0 0 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 40, alignItems: "start" }}>

            {/* FORM */}
            <div style={{ background: "white", borderRadius: 32, padding: "48px", boxShadow: "0 8px 40px rgba(0,0,0,.08)", border: "3px solid #FFF0F0" }}>
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontFamily: "'Fredoka One',cursive", fontSize: 30, color: "#1A1A2E", marginBottom: 8 }}>Send Us a Message 💌</h2>
                <p style={{ fontSize: 15, color: "#888", fontWeight: 700 }}>Fill in the form and we'll get back to you within a few hours.</p>
              </div>

              {submitted ? (
                <div style={{ background: "#FFF0F0", border: "2.5px solid #FF6B6B", borderRadius: 20, padding: 40, textAlign: "center" }}>
                  <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontFamily: "'Fredoka One',cursive", fontSize: 26, color: "#1A1A2E", marginBottom: 10 }}>Message Sent!</h3>
                  <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7 }}>
                    Thank you, <strong style={{ color: "#FF6B6B" }}>{form.name}</strong>! Our team will contact you at <strong>{form.phone}</strong> within a few hours. We're excited to help! 🚀
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Reason for contact */}
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 12 }}>What can we help you with? *</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      {reasons.map(r => (
                        <div
                          key={r.title}
                          className={`reason-pill${form.reason === r.title ? " selected" : ""}`}
                          onClick={() => setForm(f => ({ ...f, reason: r.title }))}
                        >
                          <span style={{ fontSize: 22 }}>{r.emoji}</span>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 800, color: "#1A1A2E" }}>{r.title}</div>
                            <div style={{ fontSize: 11, color: "#999", lineHeight: 1.4, fontWeight: 600 }}>{r.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fields */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 8 }}>Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="form-input" />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 8 }}>Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="form-input" />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 8 }}>Email Address</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className="form-input" />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 8 }}>Child's Age</label>
                      <select name="childAge" value={form.childAge} onChange={handleChange} className="form-input" style={{ cursor: "pointer" }}>
                        <option value="">Select age group</option>
                        <option value="4-6">4–6 years (Pre-Abacus)</option>
                        <option value="6-8">6–8 years</option>
                        <option value="8-12">8–12 years</option>
                        <option value="12-17">12–17 years</option>
                        <option value="adult">Adult / Parent</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 8 }}>Message (Optional)</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us more — which centre location, timing preferences, or any questions..." className="form-input" style={{ height: 110, resize: "vertical" }} />
                  </div>

                  <button type="submit" className="enrol-btn" style={{ width: "100%", justifyContent: "center", fontSize: 16, padding: "16px" }}>
                    🚀 Send Message
                  </button>
                  <p style={{ textAlign: "center", fontSize: 12, color: "#bbb", marginTop: 14, fontWeight: 700 }}>We reply within 2 hours during working hours (9AM–7PM)</p>
                </form>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

              {/* Quick actions */}
              <div style={{ background: "#1A1A2E", borderRadius: 24, padding: 28, border: "1.5px solid rgba(255,255,255,.06)" }}>
                <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 20, color: "white", marginBottom: 16 }}>⚡ Quick Actions</div>
                {[
                  { emoji: "📞", label: "Call Us Now", sub: "+91 98765 43210", color: "#4ECDC4" },
                  { emoji: "💬", label: "WhatsApp Chat", sub: "Instant Response", color: "#4CAF50" },
                  { emoji: "📍", label: "Find a Centre", sub: "50+ locations in India", color: "#FFB347" },
                ].map((a, i) => (
                  <a key={i} href="#" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 16, background: "rgba(255,255,255,.05)", border: "1.5px solid rgba(255,255,255,.06)", textDecoration: "none", marginBottom: i < 2 ? 10 : 0, transition: "background .2s" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 14, background: a.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{a.emoji}</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 14, color: "white" }}>{a.label}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,.4)", fontWeight: 700 }}>{a.sub}</div>
                    </div>
                    <span style={{ marginLeft: "auto", color: a.color, fontSize: 18 }}>→</span>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div style={{ background: "white", borderRadius: 24, padding: 28, boxShadow: "0 4px 20px rgba(0,0,0,.07)", border: "3px solid #FFF0F0" }}>
                <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 20, color: "#1A1A2E", marginBottom: 16 }}>🕐 Working Hours</div>
                {[
                  ["Monday – Friday", "9:00 AM – 7:00 PM"],
                  ["Saturday", "9:00 AM – 5:00 PM"],
                  ["Sunday", "Closed 😴"],
                ].map(([day, time]) => (
                  <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #F0EEF8", fontSize: 14 }}>
                    <span style={{ fontWeight: 800, color: "#1A1A2E" }}>{day}</span>
                    <span style={{ fontWeight: 700, color: time === "Closed 😴" ? "#999" : "#FF6B6B" }}>{time}</span>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div style={{ background: "linear-gradient(135deg,#FFF0F0,#FFF8EE)", borderRadius: 24, padding: 28, border: "3px solid #FFE0E0" }}>
                <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 20, color: "#1A1A2E", marginBottom: 16 }}>📱 Follow Us!</div>
                <p style={{ fontSize: 14, color: "#777", lineHeight: 1.6, marginBottom: 16, fontWeight: 700 }}>Stay updated with results, activities, and programme highlights.</p>
                <div style={{ display: "flex", gap: 12 }}>
                  {[["📘", "Facebook", "#4267B2"], ["📸", "Instagram", "#E1306C"], ["🎥", "YouTube", "#FF0000"]].map(([e, name, c]) => (
                    <a key={name} href="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flex: 1, padding: "14px 10px", background: "white", borderRadius: 16, textDecoration: "none", border: "2px solid #F0EEF8", transition: "all .2s" }}>
                      <span style={{ fontSize: 26 }}>{e}</span>
                      <span style={{ fontSize: 11, fontWeight: 900, color: "#666" }}>{name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Franchise CTA */}
              <div style={{ background: "#1A1A2E", borderRadius: 24, padding: 28, textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>🏪</div>
                <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 18, color: "white", marginBottom: 8 }}>Want to Open a Centre?</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.5)", marginBottom: 16, lineHeight: 1.6, fontWeight: 700 }}>Join our 50+ franchise partners across India!</p>
                <Link href="/franchise" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFB347,#FFD700)", color: "#1A1A2E", fontFamily: "inherit", fontWeight: 900, fontSize: 14, padding: "12px 24px", borderRadius: 50, textDecoration: "none" }}>
                  🌟 Franchise Info →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section style={{ height: 320, background: "#1A1A2E", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(255,179,71,.08) 1.5px,transparent 1.5px)", backgroundSize: "30px 30px" }} />
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>📍</div>
          <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 24, color: "white", marginBottom: 8 }}>Dwarka, New Delhi, India</div>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FF6B6B,#FFB347)", color: "white", fontFamily: "inherit", fontWeight: 900, fontSize: 14, padding: "12px 28px", borderRadius: 50, textDecoration: "none", marginTop: 8 }}>
            🗺️ Open in Google Maps
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111120", padding: "40px 0 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#FF6B6B,#FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🧮</div>
            <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 20, color: "white" }}>Ascento <span style={{ color: "#FF6B6B" }}>Abacus</span></div>
          </div>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.25)", fontWeight: 700 }}>© 2024 Ascento Abacus. All rights reserved. Made with 💛 for young learners.</span>
        </div>
      </footer>
    </div>
  );
}