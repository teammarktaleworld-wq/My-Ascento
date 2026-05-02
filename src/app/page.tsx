

// // "use client";

// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import Image from "next/image";
// // import Link from "next/link";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import { FadeIn, SlideIn, ScaleIn } from "./components/AnimatedSection";
// // import { supabase } from "../lib/supabaseClient";

// // export default function Home() {
// //   const [checking, setChecking] = useState(true);
// //   const router = useRouter();

// //   useEffect(() => {
// //     const checkUser = async () => {
// //       const { data: { user } } = await supabase.auth.getUser();

// //       if (user) {
// //         const role = user.user_metadata?.role || "user";
// //         if (role === "admin") {
// //           router.push("/admin");
// //           return;
// //         }
// //       }

// //       setChecking(false);
// //     };

// //     checkUser();

// //     const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
// //       const user = session?.user;

// //       if (user) {
// //         const role = user.user_metadata?.role || "user";
// //         if (role === "admin") {
// //           router.push("/admin");
// //         }
// //       } else {
// //         setChecking(false);
// //       }
// //     });

// //     return () => listener.subscription.unsubscribe();
// //   }, [router]);

// //   if (checking) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#020617]">
// //         <div className="flex flex-col items-center gap-6 text-[#0e141b]">
// //           <div className="text-[#197fe6] size-16 animate-pulse">
// //             <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
// //               <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
// //             </svg>
// //           </div>
// //           <div className="h-1 w-32 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
// //             <div className="h-full bg-[#197fe6] animate-[shimmer_1.5s_infinite] w-1/2"></div>
// //           </div>
// //           <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 italic">Authenticating Secure Cloud Session</p>
// //         </div>
// //         <style jsx>{`
// //           @keyframes shimmer {
// //             0% { transform: translateX(-100%); }
// //             100% { transform: translateX(200%); }
// //           }
// //         `}</style>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#f6f7f8] dark:bg-[#111921] font-sans text-[#0e141b] dark:text-slate-100 antialiased">
// //       <Navbar />

// //       <main className="flex-1">
// //         {/* Hero Section */}
// //         <section className="relative py-16 lg:py-24 overflow-hidden">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="grid lg:grid-cols-2 gap-12 items-center">
// //               <SlideIn>
// //                 <div className="flex flex-col gap-8">
// //                   <div className="inline-flex items-center gap-2 bg-[#197fe6]/10 text-[#197fe6] px-4 py-1.5 rounded-full w-fit">
// //                     <span className="material-symbols-outlined text-sm">workspace_premium</span>
// //                     <span className="text-xs font-bold uppercase tracking-wider">India's Leading Brain Development Program</span>
// //                   </div>
// //                   <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] text-[#0e141b] dark:text-white tracking-tight">
// //                     Unlock Your Child's <span className="text-[#197fe6]">Brain Power</span>
// //                   </h1>
// //                   <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
// //                     Empowering young minds through specialized abacus and cognitive training. Join 10,000+ students on a journey toward lifelong mathematical and mental excellence.
// //                   </p>
// //                   <div className="flex flex-wrap gap-4 pt-4">
// //                     <Link href="/contact" className="bg-[#197fe6] hover:bg-[#197fe6]/90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-[#197fe6]/20 flex items-center gap-2 text-center justify-center">
// //                       Enroll Your Child <span className="material-symbols-outlined">arrow_forward</span>
// //                     </Link>
// //                     <Link href="/franchise" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-[#f59e0b] text-[#0e141b] dark:text-white px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center gap-2 group text-center justify-center">
// //                       <span className="text-[#f59e0b] material-symbols-outlined">storefront</span>
// //                       Explore Franchise Opportunity
// //                     </Link>
// //                   </div>
// //                 </div>
// //               </SlideIn>

// //               <ScaleIn delay={0.2}>
// //                 <div className="relative">
// //                   <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#197fe6]/5 rounded-full blur-3xl"></div>
// //                   <div className="rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 border-4 border-white dark:border-slate-800">
// //                     <Image
// //                       src="/Images/DSC_0037-scaled-1.jpg"
// //                       alt="Ascento Abacus Learning Center"
// //                       width={800}
// //                       height={600}
// //                       className="w-full aspect-[4/3] object-cover"
// //                       priority
// //                     />
// //                   </div>
// //                 </div>
// //               </ScaleIn>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Stats Strip */}
// //         <section className="bg-white dark:bg-[#0e141b] py-12 border-y border-slate-100 dark:border-slate-800">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center border-none">
// //               {[
// //                 { label: "Active Students", value: "10K+" },
// //                 { label: "Growth Impact", value: "145K+" },
// //                 { label: "Learning Centers", value: "50+" },
// //                 { label: "Years Excellence", value: "15+" }
// //               ].map((stat, idx) => (
// //                 <FadeIn key={idx} delay={idx * 0.1}>
// //                   <div>
// //                     <p className="text-4xl font-black text-[#197fe6] mb-1">{stat.value}</p>
// //                     <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</p>
// //                   </div>
// //                 </FadeIn>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Programs Overview Section */}
// //         <section className="py-24 bg-white dark:bg-[#0e141b]/30">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="text-center mb-16">
// //               <FadeIn>
// //                 <h2 className="text-[#f59e0b] font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Curriculum</h2>
// //                 <h3 className="text-3xl md:text-5xl font-black text-[#0e141b] dark:text-white tracking-tight">Empowering Every Learning Stage</h3>
// //               </FadeIn>
// //             </div>
// //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //               {[
// //                 {
// //                   title: "Abacus Mastery",
// //                   desc: "Foundation for mental arithmetic and lightning-fast calculations without calculators.",
// //                   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdFhqG9a9-fBgKLgbNPqwnO5voA87LfZmXLxHt4dmOHXmsnYUEXMdg322k0PM-pKokF0DIHWmxw1O8JPpF_3a3W1oFpRGZC-u9f_xx3VVSu5Whbhf3kVsk_QJxoa-n8MyBzqIDsApK3bkk4a3Y8DfASHrkxFWGvvYNW7rhMvN6-1zEqR70uqtHtPDG6BYeCZGDlNTn9rTKRXy39mFzO8xucea9PwtU5_R8gTVe0iaA1FH0M9VvyMbeoVlcvsdrFYO5IOR98aqeCks",
// //                   link: "/programs"
// //                 },
// //                 {
// //                   title: "Brain Gym",
// //                   desc: "Cognitive enhancement exercises designed to improve focus, memory, and coordination.",
// //                   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-KjGhIH5UWuoRzqykSXECuHJmSwiEhAg1Pq887ETL2CeXteE6zGQ2FmtE2TIQwE4pwpg9hWAqDpwaFIBU9FdWSb3QOh4rF1hEW_oweHQLZTbFxf1vSuiJPxoKbU5xfLxI5asllsPal1BMqRbe9nECVYcLxXos4YjvUhKB2d-UgwyY7UAiWyT6rW0J_r4gERaSLMKrDRi2joKGeEYPHLiYYfL6csQ10V89jKjrqKsl8Q4rE5h7zq3eFhgfRanDOaonuHsG9Q3Amu0",
// //                   link: "/programs"
// //                 },
// //                 {
// //                   title: "Vedic Maths",
// //                   desc: "Ancient speed math techniques for solving complex problems with high accuracy and speed.",
// //                   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9c0zn9HjZO8j8qoRm3yqdDDmrkV5RGqYcp01fHh5-lEbey_uFdVmnceNDbSu91Q6J8N86hpnq1fohRhAkEJOYxuambigsDjfRS5P50w8fXsQXYI_7LltFP1pRdwnWyiVYTKOvLkpV1vSRWw2nj0qRI-FTVhCwI879qqV2xzG1DathRr4ZYppLEAKML_qyEAb5kRrsOBDVz8PLFkgnw3PdzN_sHycV6m2K0q_SE3_LOErGva_Fz24W9x1P4s4U2qUy0gXZm2elxi8",
// //                   link: "/programs"
// //                 },
// //                 {
// //                   title: "Pre-Abacus",
// //                   desc: "Gentle introduction to numbers and visualization for toddlers aged 4 to 6 years.",
// //                   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8pGSOA7YE4IVngIktlp5rjhrt7XPSh2zZ6GtLBmkn2xv9057mWdDTVPPLuUqDjIvVmwjXQUMT_kVuP38Vkqh6Rp1AlbFakAaUrijdhtdKzAC1Of90EtBpD2-ealyMghqaNvujnaKoP0tExkJM_arDCuEaCussJased2VrOm8wq5ZJ0f7OmgU5smKtPQ6IDgIWM3tqPBVZr4wzEgDFNmNFgzII0jalKaGhYs8zzoE0Ys5yqm0iwm7xlvbDjSNBuTTLb8W5yfxKTdw",
// //                   link: "/programs"
// //                 }
// //               ].map((prog, idx) => (
// //                 <FadeIn key={idx} delay={idx * 0.1}>
// //                   <div className="group bg-slate-50 dark:bg-slate-800/50 p-2 rounded-2xl border border-transparent hover:border-[#197fe6]/20 transition-all hover:shadow-xl">
// //                     <div className="aspect-square rounded-xl overflow-hidden mb-6">
// //                       <Image
// //                         src={prog.img}
// //                         alt={prog.title}
// //                         width={400}
// //                         height={400}
// //                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                       />
// //                     </div>
// //                     <div className="px-4 pb-6">
// //                       <h4 className="text-xl font-bold mb-2 group-hover:text-[#197fe6] transition-colors dark:text-white">{prog.title}</h4>
// //                       <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">
// //                         {prog.desc}
// //                       </p>
// //                       <Link href={prog.link} className="text-[#197fe6] font-bold text-sm flex items-center gap-2 group/link">
// //                         Explore Program
// //                         <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 </FadeIn>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Value Prop Section */}
// //         <section className="py-24 bg-white dark:bg-[#0e141b]">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="flex flex-col lg:flex-row items-center gap-16">
// //               <div className="lg:w-1/2 order-2 lg:order-1">
// //                 <div className="grid grid-cols-2 gap-4">
// //                   <div className="space-y-4">
// //                     <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
// //                       <Image
// //                         src="/Images/DSC_0037-scaled-1.jpg"
// //                         alt="Student practicing abacus"
// //                         width={400}
// //                         height={500}
// //                         className="w-full h-full object-cover"
// //                       />
// //                     </div>
// //                     <div className="h-40 bg-[#f59e0b]/10 rounded-2xl p-6 flex flex-col justify-end">
// //                       <p className="text-[#f59e0b] font-black text-3xl">98%</p>
// //                       <p className="text-[#0e141b] dark:text-white text-xs font-bold uppercase tracking-wider">Retention Rate</p>
// //                     </div>
// //                   </div>
// //                   <div className="space-y-4 pt-8">
// //                     <div className="h-40 bg-[#197fe6]/10 rounded-2xl p-6 flex flex-col justify-end">
// //                       <p className="text-[#197fe6] font-black text-3xl">Expert</p>
// //                       <p className="text-[#0e141b] dark:text-white text-xs font-bold uppercase tracking-wider">Certified Trainers</p>
// //                     </div>
// //                     <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
// //                       <Image
// //                         src="/Images/WhatsApp-Image-2025-06-08-at-10.03.39_0f634c25-r70q3atn2hrk6sl09jh6d3zwf68pahr7jeygaih09s.jpg"
// //                         alt="Teacher explaining math concept"
// //                         width={400}
// //                         height={500}
// //                         className="w-full h-full object-cover"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="lg:w-1/2 order-1 lg:order-2 space-y-10">
// //                 <SlideIn direction="right">
// //                   <h2 className="text-4xl lg:text-5xl font-black text-[#0e141b] dark:text-white leading-tight tracking-tight">
// //                     Why Parents Choose <br /><span className="text-[#197fe6]">Ascento Abacus?</span>
// //                   </h2>
// //                 </SlideIn>
// //                 <div className="space-y-8">
// //                   {[
// //                     {
// //                       icon: "psychology",
// //                       title: "Whole Brain Development",
// //                       desc: "Our syllabus stimulates both left (logical) and right (creative) brain hemispheres simultaneously.",
// //                       color: "text-[#197fe6] bg-[#197fe6]/10"
// //                     },
// //                     {
// //                       icon: "emoji_events",
// //                       title: "Globally Recognized",
// //                       desc: "Certification that is respected worldwide, giving your child a competitive edge in global exams.",
// //                       color: "text-[#f59e0b] bg-[#f59e0b]/10"
// //                     },
// //                     {
// //                       icon: "diversity_3",
// //                       title: "Small Batch Sizes",
// //                       desc: "Personalized attention for every child ensures steady progress and concept clarity.",
// //                       color: "text-emerald-600 bg-emerald-50"
// //                     }
// //                   ].map((feat, idx) => (
// //                     <FadeIn key={idx} delay={idx * 0.1}>
// //                       <div className="flex gap-5 group">
// //                         <div className={`shrink-0 size-14 ${feat.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
// //                           <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
// //                         </div>
// //                         <div>
// //                           <h4 className="text-xl font-bold mb-1 dark:text-white">{feat.title}</h4>
// //                           <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
// //                         </div>
// //                       </div>
// //                     </FadeIn>
// //                   ))}
// //                 </div>
// //                 <Link href="/contact" className="inline-flex bg-[#0e141b] dark:bg-slate-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all hover:bg-[#197fe6] hover:shadow-xl hover:shadow-[#197fe6]/20 items-center gap-2 group">
// //                   Enroll Your Child Today
// //                   <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Gallery Section */}
// //         <section className="py-24 bg-[#f8fafc] dark:bg-[#020617]/50">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="text-center mb-16">
// //               <h2 className="text-3xl md:text-5xl font-black text-[#0e141b] dark:text-white mb-4">Our Learning <span className="text-[#197fe6]">Environment</span></h2>
// //               <p className="text-slate-500 max-w-2xl mx-auto italic font-medium">Glimpses of our vibrant classrooms and the focused journey of our students.</p>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {[
// //                 { src: "/Images/WhatsApp-Image-2025-06-08-at-10.03.37_cfe7f04f.jpg", alt: "Students learning abacus", span: "md:col-span-1" },
// //                 { src: "/Images/WhatsApp-Image-2025-06-08-at-10.03.37_e3ac77d8.jpg", alt: "Abacus training session", span: "md:col-span-1" },
// //                 { src: "/Images/WhatsApp-Image-2025-06-08-at-10.03.38_091c0f31.jpg", alt: "Advanced abacus student", span: "md:col-span-1" },
// //                 { src: "/Images/WhatsApp-Image-2025-06-08-at-10.03.39_0f634c25-r70q3atn2hrk6sl09jh6d3zwf68pahr7jeygaih09s.jpg", alt: "Classroom activities", span: "md:col-span-2" },
// //                 { src: "/Images/IMG_20190930_102619.jpg", alt: "Award winning students", span: "md:col-span-1" }
// //               ].map((img, idx) => (
// //                 <FadeIn key={idx} delay={idx * 0.1}>
// //                   <div className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ${img.span}`}>
// //                     <Image
// //                       src={img.src}
// //                       alt={img.alt}
// //                       width={800}
// //                       height={600}
// //                       className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
// //                       <p className="text-white font-bold text-lg">{img.alt}</p>
// //                     </div>
// //                   </div>
// //                 </FadeIn>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Meet Our Team Section */}
// //         <section className="py-24 bg-white dark:bg-[#0e141b]">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="text-center mb-16">
// //               <FadeIn>
// //                 <h2 className="text-[#f59e0b] font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Educators</h2>
// //                 <h3 className="text-3xl md:text-5xl font-black text-[#0e141b] dark:text-white tracking-tight">Meet the Team Behind <span className="text-[#197fe6]">Every Success</span></h3>
// //                 <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">Passionate educators and caregivers dedicated to nurturing young minds with experience, expertise, and love.</p>
// //               </FadeIn>
// //             </div>

// //             {/* Principal — Featured Card */}
// //             <FadeIn>
// //               <div className="mb-12 bg-gradient-to-br from-[#197fe6]/5 to-[#f59e0b]/5 dark:from-[#197fe6]/10 dark:to-[#f59e0b]/10 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 lg:p-12">
// //                 <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
// //                   <div className="shrink-0 size-28 lg:size-32 bg-gradient-to-br from-[#197fe6] to-[#197fe6]/70 rounded-3xl flex items-center justify-center shadow-xl shadow-[#197fe6]/20">
// //                     <span className="text-white font-black text-4xl lg:text-5xl">BT</span>
// //                   </div>
// //                   <div className="flex-1 text-center lg:text-left">
// //                     <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 text-[#f59e0b] px-3 py-1 rounded-full mb-3">
// //                       <span className="material-symbols-outlined text-sm">stars</span>
// //                       <span className="text-xs font-bold uppercase tracking-wider">Principal</span>
// //                     </div>
// //                     <h4 className="text-2xl lg:text-3xl font-black text-[#0e141b] dark:text-white mb-1">Mrs. Bala Tomar</h4>
// //                     <p className="text-[#197fe6] font-semibold text-sm mb-4">M.A., B.Ed., NET Qualified &bull; 27 Years Experience</p>
// //                     <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
// //                       A distinguished educationist and the visionary leader of Ascento Play School, Dwarka. Mrs. Tomar brings 27 years of rich experience in teaching, academic leadership, and student development. She believes in a child-centric, activity-based learning approach where education goes beyond books.
// //                     </p>
// //                     <div className="flex flex-wrap gap-2">
// //                       {["Right Brain Development", "Midbrain Activation", "Abacus & Vedic Maths", "Hindi & Sanskrit Expert", "Teacher Mentoring", "Franchise Training"].map((tag) => (
// //                         <span key={tag} className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">{tag}</span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </FadeIn>

// //             {/* Director — Featured Card */}
// //             <FadeIn>
// //               <div className="mb-12 bg-gradient-to-br from-[#0e141b]/5 to-[#197fe6]/5 dark:from-slate-800/50 dark:to-[#197fe6]/10 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 lg:p-12">
// //                 <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
// //                   <div className="shrink-0 size-28 lg:size-32 bg-gradient-to-br from-[#0e141b] to-slate-700 rounded-3xl flex items-center justify-center shadow-xl shadow-slate-900/20">
// //                     <span className="text-white font-black text-4xl lg:text-5xl">ST</span>
// //                   </div>
// //                   <div className="flex-1 text-center lg:text-left">
// //                     <div className="inline-flex items-center gap-2 bg-[#197fe6]/10 text-[#197fe6] px-3 py-1 rounded-full mb-3">
// //                       <span className="material-symbols-outlined text-sm">manage_accounts</span>
// //                       <span className="text-xs font-bold uppercase tracking-wider">Director</span>
// //                     </div>
// //                     <h4 className="text-2xl lg:text-3xl font-black text-[#0e141b] dark:text-white mb-1">Mr. Surendra Tomar</h4>
// //                     <p className="text-[#197fe6] font-semibold text-sm mb-4">B.A., Computer Diploma &bull; 30+ Years Experience</p>
// //                     <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
// //                       A dedicated educationist and visionary leader with over 30 years of rich experience in Sales, Marketing, Insurance, and Education. As Director of Ascento Play School, Dwarka, Mr. Tomar is committed to providing high-quality education and a structured, progressive learning environment. He is actively involved in Abacus and Vedic Maths training and franchise services across India, helping educators and entrepreneurs establish successful learning centres.
// //                     </p>
// //                     <div className="flex flex-wrap gap-2">
// //                       {["Abacus & Vedic Maths", "Franchise Development", "Academic Management", "Staff Mentoring", "Sales & Marketing", "Child-Centric Leadership"].map((tag) => (
// //                         <span key={tag} className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">{tag}</span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </FadeIn>

// //             {/* Other Team Members */}
// //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //               {[
// //                 {
// //                   initials: "KS",
// //                   name: "Mrs. Kashish Sheopuri",
// //                   role: "Office Admin & Play School Teacher",
// //                   qual: "B.Com, Computer Diploma",
// //                   exp: "2 Years",
// //                   desc: "Efficiently manages administrative responsibilities while actively engaging with young learners through interactive, activity-based teaching methods.",
// //                   color: "from-emerald-500 to-emerald-400",
// //                   shadow: "shadow-emerald-500/20",
// //                   tags: ["Administration", "Interactive Teaching"]
// //                 },
// //                 {
// //                   initials: "AR",
// //                   name: "Mrs. Aarti Rathore",
// //                   role: "Senior Teacher (Play School – Class 2)",
// //                   qual: "M.A., Computer Diploma",
// //                   exp: "8 Years",
// //                   desc: "A seasoned educator shaping foundational learners from Play School to Class 2 with activity-based, practical teaching that builds understanding and confidence.",
// //                   color: "from-[#197fe6] to-blue-400",
// //                   shadow: "shadow-[#197fe6]/20",
// //                   tags: ["Early Education", "Classroom Management"]
// //                 },
// //                 {
// //                   initials: "SS",
// //                   name: "Ms. Soni Sehgal",
// //                   role: "Teacher (Pre-Nursery & Nursery)",
// //                   qual: "B.A., Basic Computer Diploma",
// //                   exp: "4 Years",
// //                   desc: "A sincere and hardworking educator dedicated to creating a nurturing atmosphere where the youngest learners feel encouraged to explore and grow.",
// //                   color: "from-[#f59e0b] to-amber-400",
// //                   shadow: "shadow-[#f59e0b]/20",
// //                   tags: ["Pre-Nursery", "Nursery"]
// //                 },
// //                 {
// //                   initials: "SV",
// //                   name: "Mrs. Santosh Verma",
// //                   role: "Kids Care Assistant (Nanny)",
// //                   qual: "Pre-Nursery & Nursery Support",
// //                   exp: "35 Years",
// //                   desc: "With an extraordinary 35 years of child care experience, she ensures every child's safety, comfort, and emotional well-being with warmth and dedication.",
// //                   color: "from-rose-500 to-pink-400",
// //                   shadow: "shadow-rose-500/20",
// //                   tags: ["Child Care", "Safety & Comfort"]
// //                 }
// //               ].map((member, idx) => (
// //                 <FadeIn key={idx} delay={idx * 0.1}>
// //                   <div className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-[#197fe6]/20 transition-all hover:shadow-xl p-6 flex flex-col h-full">
// //                     <div className="flex items-center gap-4 mb-4">
// //                       <div className={`shrink-0 size-14 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center ${member.shadow} shadow-lg transition-transform group-hover:scale-110`}>
// //                         <span className="text-white font-black text-lg">{member.initials}</span>
// //                       </div>
// //                       <div className="min-w-0">
// //                         <h4 className="text-base font-bold text-[#0e141b] dark:text-white truncate">{member.name}</h4>
// //                         <p className="text-[#197fe6] text-xs font-semibold truncate">{member.role}</p>
// //                       </div>
// //                     </div>
// //                     <div className="flex items-center gap-3 mb-3 text-xs text-slate-500 dark:text-slate-400">
// //                       <span className="flex items-center gap-1">
// //                         <span className="material-symbols-outlined text-sm">school</span>
// //                         {member.qual}
// //                       </span>
// //                     </div>
// //                     <div className="flex items-center gap-1 mb-4">
// //                       <span className="bg-[#197fe6]/10 text-[#197fe6] text-xs font-bold px-2.5 py-1 rounded-full">{member.exp}</span>
// //                     </div>
// //                     <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-4">{member.desc}</p>
// //                     <div className="flex flex-wrap gap-1.5 mt-auto">
// //                       {member.tags.map((tag) => (
// //                         <span key={tag} className="bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-[10px] font-semibold px-2 py-1 rounded-full border border-slate-200 dark:border-slate-600">{tag}</span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </FadeIn>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* CTA Banner Section */}
// //         <section className="py-20">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <ScaleIn>
// //               <div className="bg-[#197fe6] rounded-[2.5rem] p-8 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-[#197fe6]/30">
// //                 <div className="absolute inset-0 opacity-10 pointer-events-none">
// //                   <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
// //                     <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
// //                   </svg>
// //                 </div>
// //                 <div className="relative z-10 lg:w-3/5 text-center lg:text-left">
// //                   <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">Start Your Entrepreneurial Journey Today</h2>
// //                   <p className="text-white/80 text-lg max-w-xl">
// //                     Join our network of 50+ successful centers. We provide end-to-end support, training, and marketing materials to help you succeed.
// //                   </p>
// //                 </div>
// //                 <div className="relative z-10 flex flex-col gap-4 w-full lg:w-auto items-center">
// //                   <Link href="/franchise" className="bg-white text-[#197fe6] px-10 py-5 rounded-2xl text-xl font-bold transition-all hover:scale-105 hover:shadow-2xl shadow-xl whitespace-nowrap">
// //                     Become a Franchisee
// //                   </Link>
// //                   <p className="text-white/60 text-sm font-medium tracking-wide">Low Investment • High ROI • Dedicated Support</p>
// //                 </div>
// //               </div>
// //             </ScaleIn>
// //           </div>
// //         </section>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// /* ─────────────────────────────────────────────
//    SCROLL REVEAL HOOK
// ───────────────────────────────────────────── */
// function useReveal() {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
//       { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return { ref, visible };
// }

// function Reveal({ children, className = "", delay = 0, dir = "up" }) {
//   const { ref, visible } = useReveal();
//   const transforms = { up: "translateY(50px)", left: "translateX(-50px)", right: "translateX(50px)", scale: "scale(0.88)" };
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "none" : transforms[dir],
//         transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    COUNTER
// ───────────────────────────────────────────── */
// function Counter({ target, suffix = "+" }) {
//   const { ref, visible } = useReveal();
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     if (!visible) return;
//     const duration = 1800;
//     const start = performance.now();
//     const tick = (now) => {
//       const p = Math.min((now - start) / duration, 1);
//       const eased = 1 - Math.pow(1 - p, 3);
//       setVal(Math.round(eased * target));
//       if (p < 1) requestAnimationFrame(tick);
//     };
//     requestAnimationFrame(tick);
//   }, [visible, target]);
//   const fmt = target >= 1000 ? `${Math.round(val / 1000)}K` : String(val);
//   return <span ref={ref}>{fmt}{suffix}</span>;
// }

// /* ─────────────────────────────────────────────
//    FLOATING BLOB SVG
// ───────────────────────────────────────────── */
// const Blob = ({ color, style }) => (
//   <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", ...style }} aria-hidden>
//     <path fill={color} d="M47.4,-57.3C60.2,-46.3,68.8,-29.9,71.3,-12.4C73.8,5.1,70.2,23.7,60.4,37.2C50.6,50.7,34.6,59.2,17.3,64.1C0,69,-18.5,70.3,-33.4,64C-48.3,57.7,-59.5,43.7,-66.3,27.3C-73,10.9,-75.2,-7.9,-69.3,-24C-63.4,-40.1,-49.4,-53.6,-34.4,-63.9C-19.4,-74.2,-3.3,-81.4,11.4,-78.9C26.1,-76.4,34.6,-68.3,47.4,-57.3Z" transform="translate(100 100)" />
//   </svg>
// );

// /* ─────────────────────────────────────────────
//    STAR SHAPE
// ───────────────────────────────────────────── */
// const Star = ({ size = 24, color = "#FFD700", style }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} aria-hidden>
//     <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
//   </svg>
// );

// /* ─────────────────────────────────────────────
//    MAIN PAGE
// ───────────────────────────────────────────── */
// export default function Home() {
//   const [navScrolled, setNavScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setNavScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* ── programs ── */
//   const programs = [
//     { emoji: "🧮", title: "Abacus Mastery", ages: "5–14 yrs", color: "#FF6B6B", bg: "#FFF0F0", desc: "Lightning-fast mental math using the ancient abacus method. Build speed, accuracy & number sense!", tag: "Most Popular" },
//     { emoji: "🧠", title: "Brain Gym", ages: "All ages", color: "#4ECDC4", bg: "#F0FFFE", desc: "Fun exercises that wake up both sides of your brain — focus, memory & coordination level up!", tag: "Fan Favourite" },
//     { emoji: "📐", title: "Vedic Maths", ages: "8+ yrs", color: "#FFB347", bg: "#FFF8EE", desc: "Ancient Indian speed-math tricks that make hard sums feel like magic. Impress your whole class!", tag: "Mind-Blowing" },
//     { emoji: "🌟", title: "Pre-Abacus", ages: "4–6 yrs", color: "#A78BFA", bg: "#F5F0FF", desc: "The perfect first step! Numbers become friends through games, songs, and colourful play.", tag: "For Tiny Minds" },
//   ];

//   /* ── why cards ── */
//   const whyCards = [
//     { emoji: "🏆", title: "World-Class Certification", desc: "Certificates recognised across India and globally — show the world what you can do!", color: "#FFB347" },
//     { emoji: "🎯", title: "Whole Brain Training", desc: "We activate BOTH sides of your brain so you're creative AND super-smart at maths!", color: "#FF6B6B" },
//     { emoji: "👩‍🏫", title: "Expert Coaches", desc: "Our teachers have 2–35 years of experience and love making learning feel like a superpower.", color: "#4ECDC4" },
//     { emoji: "🤝", title: "Small, Caring Batches", desc: "Every child gets personal attention — no one gets left behind in our family-sized classes.", color: "#A78BFA" },
//     { emoji: "🌍", title: "50+ Centres Nationwide", desc: "Find an Ascento centre near you — or bring one to your city with our franchise programme!", color: "#F06292" },
//     { emoji: "📈", title: "Proven Results", desc: "98% student retention rate and thousands of competition winners speak louder than words.", color: "#26C6DA" },
//   ];

//   /* ── team ── */
//   const team = [
//     { initials: "BT", name: "Mrs. Bala Tomar", role: "Principal", qual: "M.A., B.Ed., NET Qualified", exp: "27 Years", color: "#4ECDC4", desc: "The heart of Ascento — 27 years of turning curious kids into champions." },
//     { initials: "ST", name: "Mr. Surendra Tomar", role: "Director", qual: "B.A., Computer Diploma", exp: "30+ Years", color: "#FF6B6B", desc: "Visionary leader who built a 50+ centre empire on the power of young minds." },
//     { initials: "KS", name: "Mrs. Kashish Sheopuri", role: "Admin & Teacher", qual: "B.Com, Computer Diploma", exp: "2 Years", color: "#A78BFA", desc: "Keeps everything running smoothly while making learning super fun for little ones." },
//     { initials: "AR", name: "Mrs. Aarti Rathore", role: "Senior Teacher", qual: "M.A., Computer Diploma", exp: "8 Years", color: "#FFB347", desc: "Expert at making Play School to Class 2 feel like the best adventure ever." },
//   ];

//   /* ── gallery images ── */
//   const galleryImgs = [
//     { src: "/Images/WhatsApp-Image-2025-06-08-at-10.03.37_cfe7f04f.jpg", alt: "Learning Abacus", fallback: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80" },
//     { src: "/Images/WhatsApp-Image-2025-06-08-at-10.03.37_e3ac77d8.jpg", alt: "Brain Gym Session", fallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80" },
//     { src: "/Images/WhatsApp-Image-2025-06-08-at-10.03.38_091c0f31.jpg", alt: "Advanced Student", fallback: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80" },
//     { src: "/Images/WhatsApp-Image-2025-06-08-at-10.03.39_0f634c25-r70q3atn2hrk6sl09jh6d3zwf68pahr7jeygaih09s.jpg", alt: "Class Activities", fallback: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80" },
//     { src: "/Images/IMG_20190930_102619.jpg", alt: "Award Winners", fallback: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80" },
//     { src: "/Images/DSC_0037-scaled-1.jpg", alt: "Our Students", fallback: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80" },
//   ];

//   return (
//     <div style={{ fontFamily: "'Nunito', 'Fredoka One', system-ui, sans-serif", background: "#FFFDF7", color: "#1A1A2E", overflowX: "hidden" }}>

//       {/* ── GOOGLE FONTS ── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         html { scroll-behavior: smooth; }
//         body { overflow-x: hidden; }

//         @keyframes float-a { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-18px) rotate(3deg)} }
//         @keyframes float-b { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(-4deg)} }
//         @keyframes float-c { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-22px)} }
//         @keyframes wiggle  { 0%,100%{transform:rotate(-4deg)} 50%{transform:rotate(4deg)} }
//         @keyframes bounce  { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-12px)} 70%{transform:translateY(-6px)} }
//         @keyframes spin    { from{transform:rotate(0)} to{transform:rotate(360deg)} }
//         @keyframes pulse-ring { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.6);opacity:0} }
//         @keyframes slide-right { from{transform:translateX(-100%)} to{transform:translateX(0)} }
//         @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
//         @keyframes pop { 0%{transform:scale(0.8);opacity:0} 100%{transform:scale(1);opacity:1} }
//         @keyframes rainbow-border {
//           0%{border-color:#FF6B6B} 25%{border-color:#FFB347} 50%{border-color:#4ECDC4} 75%{border-color:#A78BFA} 100%{border-color:#FF6B6B}
//         }

//         .float-a { animation: float-a 4s ease-in-out infinite; }
//         .float-b { animation: float-b 5s ease-in-out infinite; }
//         .float-c { animation: float-c 3.5s ease-in-out infinite; }
//         .wiggle   { animation: wiggle 2s ease-in-out infinite; }
//         .bounce-anim { animation: bounce 1.8s ease-in-out infinite; }
//         .spin-slow { animation: spin 12s linear infinite; }
//         .pop-in { animation: pop 0.5s cubic-bezier(.34,1.56,.64,1) both; }

//         .prog-card { transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s; }
//         .prog-card:hover { transform: translateY(-10px) rotate(-1deg) scale(1.02); box-shadow: 0 24px 50px rgba(0,0,0,.13); }
//         .why-card  { transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s; }
//         .why-card:hover  { transform: translateY(-8px) scale(1.03); }
//         .team-card { transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s; }
//         .team-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,.12); }
//         .gallery-img { transition: transform .5s cubic-bezier(.22,1,.36,1); }
//         .gallery-wrap:hover .gallery-img { transform: scale(1.08); }

//         .nav-link { position:relative; font-size:15px; font-weight:800; color:#1A1A2E; text-decoration:none; transition:color .2s; }
//         .nav-link::after { content:''; position:absolute; bottom:-4px; left:0; width:0; height:3px; border-radius:3px; background:#FF6B6B; transition:width .3s cubic-bezier(.34,1.56,.64,1); }
//         .nav-link:hover { color:#FF6B6B; }
//         .nav-link:hover::after { width:100%; }

//         .enrol-btn { background:#FF6B6B; color:#fff; font-family:inherit; font-weight:900; font-size:15px; padding:12px 28px; border-radius:50px; border:none; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; box-shadow:0 6px 20px rgba(255,107,107,.4); transition:all .3s cubic-bezier(.34,1.56,.64,1); }
//         .enrol-btn:hover { transform:scale(1.08) translateY(-2px); box-shadow:0 12px 30px rgba(255,107,107,.5); }
//         .outline-btn { background:transparent; color:#1A1A2E; font-family:inherit; font-weight:800; font-size:15px; padding:12px 28px; border-radius:50px; border:3px solid #1A1A2E; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; transition:all .3s cubic-bezier(.34,1.56,.64,1); }
//         .outline-btn:hover { background:#1A1A2E; color:#fff; transform:scale(1.05); }

//         ::-webkit-scrollbar { width:8px; }
//         ::-webkit-scrollbar-track { background:#fff; }
//         ::-webkit-scrollbar-thumb { background:#FFB347; border-radius:4px; }
//       `}</style>

//       {/* ════════════════════════════════
//           NAVBAR
//       ════════════════════════════════ */}
//       <nav style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
//         padding: "14px 0",
//         background: navScrolled ? "rgba(255,253,247,0.95)" : "transparent",
//         backdropFilter: navScrolled ? "blur(16px)" : "none",
//         boxShadow: navScrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
//         transition: "all 0.4s",
//       }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//           {/* Logo */}
//           <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
//             <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg,#FF6B6B,#FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, boxShadow: "0 4px 14px rgba(255,107,107,.4)" }}>
//               🧮
//             </div>
//             <div>
//               <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#1A1A2E", lineHeight: 1 }}>
//                 Ascento <span style={{ color: "#FF6B6B" }}>Abacus</span>
//               </div>
//               <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999", marginTop: 1 }}>
//                 Brain Development Academy
//               </div>
//             </div>
//           </Link>

//           {/* Desktop links */}
//           <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
//             {["Programs", "Why Us", "Gallery", "Team", "Contact"].map(l => (
//               <Link key={l} href={`#${l.toLowerCase().replace(" ", "")}`} className="nav-link">{l}</Link>
//             ))}
//           </div>

//           <Link href="/contact" className="enrol-btn" style={{ fontSize: 14 }}>
//             🎉 Enrol Now
//           </Link>
//         </div>
//       </nav>

//       {/* ════════════════════════════════
//           HERO
//       ════════════════════════════════ */}
//       <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 60, position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #FFFDF7 0%, #FFF0E8 50%, #FFFDF7 100%)" }}>

//         {/* Background blobs */}
//         <Blob color="#FFE0E0" style={{ width: 500, height: 500, top: "-10%", right: "-8%", opacity: 0.7 }} />
//         <Blob color="#E0F7FA" style={{ width: 400, height: 400, bottom: "0%", left: "-8%", opacity: 0.6 }} />
//         <Blob color="#EDE7FF" style={{ width: 300, height: 300, top: "40%", right: "5%", opacity: 0.4 }} />

//         {/* Floating decorative emojis */}
//         <div style={{ position: "absolute", top: "18%", left: "6%", fontSize: 40 }} className="float-a">⭐</div>
//         <div style={{ position: "absolute", top: "12%", right: "18%", fontSize: 36 }} className="float-b">🎯</div>
//         <div style={{ position: "absolute", bottom: "22%", left: "4%", fontSize: 32 }} className="float-c">🚀</div>
//         <div style={{ position: "absolute", bottom: "28%", right: "8%", fontSize: 44 }} className="float-a" style2={{ animationDelay: "1s" }}>🌈</div>
//         <div style={{ position: "absolute", top: "55%", left: "12%", fontSize: 28 }} className="wiggle">✏️</div>

//         {/* Dotted pattern */}
//         <div style={{
//           position: "absolute", inset: 0, zIndex: 0,
//           backgroundImage: "radial-gradient(circle, #FFB347 1.5px, transparent 1.5px)",
//           backgroundSize: "36px 36px", opacity: 0.18,
//         }} />

//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, width: "100%" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

//             {/* Left */}
//             <div>
//               <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FFF0F0", borderRadius: 50, padding: "8px 18px", marginBottom: 24, border: "2px solid #FFD6D6" }}>
//                 <span style={{ fontSize: 18 }}>🌟</span>
//                 <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FF6B6B" }}>India's #1 Brain Development Program</span>
//               </div>

//               <h1 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(44px,5.5vw,76px)", lineHeight: 1.08, color: "#1A1A2E", marginBottom: 24, letterSpacing: "-0.01em" }}>
//                 Make Your Child
//                 <span style={{ display: "block", color: "#FF6B6B", position: "relative" }}>
//                   a Math
//                   <span style={{ color: "#FFB347" }}> Superstar!</span>
//                   <svg style={{ position: "absolute", bottom: -6, left: 0, right: 0 }} viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M2 9C50 3 100 10 150 5C200 0 250 8 298 4" stroke="#4ECDC4" strokeWidth="4" strokeLinecap="round"/>
//                   </svg>
//                 </span>
//               </h1>

//               <p style={{ fontSize: 18, lineHeight: 1.7, color: "#555", maxWidth: 440, marginBottom: 36 }}>
//                 Fun, play-based learning that turns numbers into <strong>superpowers</strong>. 10,000+ children aged 4–17 are already on their brain development journey! 🎓
//               </p>

//               <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//                 <Link href="/contact" className="enrol-btn" style={{ fontSize: 16, padding: "16px 36px" }}>
//                   🎉 Enrol Your Child
//                 </Link>
//                 <Link href="#programs" className="outline-btn">
//                   🔍 See Programs
//                 </Link>
//               </div>

//               {/* Mini trust badges */}
//               <div style={{ display: "flex", gap: 24, marginTop: 36, flexWrap: "wrap" }}>
//                 {[["👶", "Ages 4–17"], ["🏅", "15+ Years"], ["🌏", "50+ Centres"]].map(([e, t]) => (
//                   <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                     <span style={{ fontSize: 22 }}>{e}</span>
//                     <span style={{ fontWeight: 800, fontSize: 13, color: "#1A1A2E" }}>{t}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right: Image + floating cards */}
//             <div style={{ position: "relative" }}>
//               <div style={{ borderRadius: 32, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,.18)", transform: "rotate(2deg)", border: "6px solid white" }}>
//                 <Image
//                   src="/Images/DSC_0037-scaled-1.jpg"
//                   alt="Happy students learning abacus"
//                   width={600} height={480}
//                   className="gallery-img"
//                   style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
//                   priority
//                   onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"; }}
//                 />
//               </div>

//               {/* Floating card 1 */}
//               <div className="float-b" style={{ position: "absolute", bottom: -24, left: -36, background: "white", borderRadius: 20, padding: "16px 22px", boxShadow: "0 16px 40px rgba(0,0,0,.14)", border: "3px solid #FFE0E0" }}>
//                 <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 36, color: "#FF6B6B" }}>10K+</div>
//                 <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginTop: 2 }}>Happy Students</div>
//               </div>

//               {/* Floating card 2 */}
//               <div className="float-a" style={{ position: "absolute", top: -20, right: -20, background: "white", borderRadius: 20, padding: "14px 18px", boxShadow: "0 16px 40px rgba(0,0,0,.14)", border: "3px solid #FFF0B3", display: "flex", alignItems: "center", gap: 12 }}>
//                 <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg,#FFB347,#FFD700)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🏆</div>
//                 <div>
//                   <div style={{ fontWeight: 900, fontSize: 14, color: "#1A1A2E" }}>Award Winning</div>
//                   <div style={{ fontSize: 11, color: "#999", fontWeight: 700 }}>Since 2010</div>
//                 </div>
//               </div>

//               {/* Floating card 3 */}
//               <div className="float-c" style={{ position: "absolute", top: "45%", right: -32, background: "#FF6B6B", borderRadius: 16, padding: "12px 18px", boxShadow: "0 12px 30px rgba(255,107,107,.4)" }}>
//                 <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 28, color: "white" }}>98%</div>
//                 <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,.8)" }}>Retention</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           MARQUEE TICKER
//       ════════════════════════════════ */}
//       <div style={{ background: "#FF6B6B", overflow: "hidden", padding: "14px 0" }}>
//         <div style={{ display: "flex", animation: "marquee 18s linear infinite", whiteSpace: "nowrap" }}>
//           {[...Array(2)].map((_, ri) => (
//             <div key={ri} style={{ display: "flex", flexShrink: 0 }}>
//               {["🧮 Abacus Mastery", "🧠 Brain Gym", "📐 Vedic Maths", "⭐ Midbrain Activation", "🎯 Right Brain Training", "🌟 Pre-Abacus", "🏆 50+ Centres Nationwide", "🚀 15 Years of Excellence"].map(item => (
//                 <span key={item} style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", color: "white", padding: "0 32px", display: "inline-block" }}>
//                   {item} <span style={{ opacity: 0.5, margin: "0 8px" }}>✦</span>
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ════════════════════════════════
//           STATS
//       ════════════════════════════════ */}
//       <section style={{ background: "#1A1A2E", padding: "60px 0", position: "relative", overflow: "hidden" }}>
//         <Blob color="#2D2D4E" style={{ width: 600, height: 400, top: "-30%", left: "20%", opacity: 0.6 }} />
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
//             {[
//               { emoji: "👦", target: 10000, suffix: "+", label: "Happy Students" },
//               { emoji: "🏫", target: 50, suffix: "+", label: "Learning Centres" },
//               { emoji: "📅", target: 15, suffix: "+", label: "Years of Magic" },
//               { emoji: "🌍", target: 145000, suffix: "+", label: "Lives Touched" },
//             ].map((s, i) => (
//               <Reveal key={i} delay={i * 80}>
//                 <div style={{ textAlign: "center", padding: "24px 16px", borderRight: i < 3 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
//                   <div style={{ fontSize: 36, marginBottom: 8 }}>{s.emoji}</div>
//                   <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 48, color: "#FFB347", lineHeight: 1 }}>
//                     <Counter target={s.target} suffix={s.suffix} />
//                   </div>
//                   <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginTop: 6 }}>{s.label}</div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           PROGRAMS
//       ════════════════════════════════ */}
//       <section id="programs" style={{ padding: "100px 0", background: "#FFFDF7", position: "relative", overflow: "hidden" }}>
//         <Blob color="#FFF0E8" style={{ width: 500, height: 500, top: "-10%", right: "-10%", opacity: 0.8 }} />

//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
//           <Reveal>
//             <div style={{ textAlign: "center", marginBottom: 64 }}>
//               <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#FFF0F0", borderRadius: 50, padding: "8px 20px", marginBottom: 16 }}>
//                 <span style={{ fontSize: 18 }}>📚</span>
//                 <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FF6B6B" }}>Our Curriculum</span>
//               </div>
//               <h2 style={{ fontFamily: "'Fredoka One',cursive", fontSize: "clamp(32px,4vw,56px)", color: "#1A1A2E", lineHeight: 1.1, marginBottom: 16 }}>
//                 Learning That Feels Like <span style={{ color: "#FF6B6B" }}>Play!</span> 🎮
//               </h2>
//               <p style={{ fontSize: 17, color: "#777", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
//                 Four amazing programmes designed for every age and stage — from tiny tots to teenage champions.
//               </p>
//             </div>
//           </Reveal>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
//             {programs.map((p, i) => (
//               <Reveal key={i} delay={i * 80}>
//                 <div className="prog-card" style={{ background: p.bg, borderRadius: 28, overflow: "hidden", border: `3px solid ${p.color}22`, position: "relative" }}>
//                   {/* Tag badge */}
//                   <div style={{ position: "absolute", top: 14, right: 14, background: p.color, color: "white", fontSize: 10, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 50 }}>
//                     {p.tag}
//                   </div>

//                   {/* Emoji hero area */}
//                   <div style={{ background: p.color + "18", padding: "40px 24px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
//                     <div style={{ fontSize: 64, lineHeight: 1, marginBottom: 12 }} className="float-b">{p.emoji}</div>
//                     <div style={{ display: "inline-block", background: p.color + "22", borderRadius: 50, padding: "4px 14px" }}>
//                       <span style={{ fontSize: 12, fontWeight: 800, color: p.color }}>Ages {p.ages}</span>
//                     </div>
//                   </div>

//                   <div style={{ padding: "20px 24px 28px" }}>
//                     <h3 style={{ fontFamily: "'Fredoka One',cursive", fontSize: 22, color: "#1A1A2E", marginBottom: 10 }}>{p.title}</h3>
//                     <p style={{ fontSize: 14, lineHeight: 1.6, color: "#666", marginBottom: 20 }}>{p.desc}</p>
//                     <Link href="/programs" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 900, fontSize: 14, color: p.color, textDecoration: "none", border: `2.5px solid ${p.color}`, borderRadius: 50, padding: "8px 18px", transition: "all .2s" }}>
//                       Learn More →
//                     </Link>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           WHY ASCENTO
//       ════════════════════════════════ */}
//       <section id="whyus" style={{ padding: "100px 0", background: "linear-gradient(160deg,#F0FFFE 0%,#FFFDF7 60%,#FFF5F5 100%)", position: "relative", overflow: "hidden" }}>
//         <div style={{ position: "absolute", top: "10%", left: "3%", fontSize: 60, opacity: 0.12 }} className="spin-slow">⚙️</div>
//         <div style={{ position: "absolute", bottom: "10%", right: "3%", fontSize: 60, opacity: 0.12 }} className="spin-slow">🔆</div>

//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
//           <Reveal>
//             <div style={{ textAlign: "center", marginBottom: 64 }}>
//               <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#E0FFFE", borderRadius: 50, padding: "8px 20px", marginBottom: 16 }}>
//                 <span style={{ fontSize: 18 }}>✨</span>
//                 <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4ECDC4" }}>Why Choose Us</span>
//               </div>
//               <h2 style={{ fontFamily: "'Fredoka One',cursive", fontSize: "clamp(32px,4vw,56px)", color: "#1A1A2E", lineHeight: 1.1, marginBottom: 16 }}>
//                 Why Parents <span style={{ color: "#4ECDC4" }}>Love</span> Ascento! 💛
//               </h2>
//               <p style={{ fontSize: 17, color: "#777", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
//                 We're not just a class — we're a launchpad for your child's brightest future.
//               </p>
//             </div>
//           </Reveal>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//             {whyCards.map((c, i) => (
//               <Reveal key={i} delay={i * 70}>
//                 <div className="why-card" style={{ background: "white", borderRadius: 24, padding: 32, border: "3px solid transparent", backgroundClip: "padding-box", boxShadow: "0 4px 20px rgba(0,0,0,.06)", position: "relative", overflow: "hidden" }}>
//                   {/* Colored top bar */}
//                   <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: c.color, borderRadius: "24px 24px 0 0" }} />

//                   <div style={{ fontSize: 48, marginBottom: 16, marginTop: 8 }}>{c.emoji}</div>
//                   <h3 style={{ fontFamily: "'Fredoka One',cursive", fontSize: 21, color: "#1A1A2E", marginBottom: 10 }}>{c.title}</h3>
//                   <p style={{ fontSize: 14, lineHeight: 1.7, color: "#666" }}>{c.desc}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>

//           {/* CTA inside why section */}
//           <Reveal delay={200}>
//             <div style={{ textAlign: "center", marginTop: 60 }}>
//               <Link href="/contact" className="enrol-btn" style={{ fontSize: 18, padding: "18px 48px" }}>
//                 🚀 Start Your Child's Journey Today
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           GALLERY
//       ════════════════════════════════ */}
//       <section id="gallery" style={{ padding: "100px 0", background: "#1A1A2E", position: "relative", overflow: "hidden" }}>
//         <Blob color="#2A2A45" style={{ width: 600, height: 600, top: "-20%", right: "-15%", opacity: 0.8 }} />
//         <Blob color="#2A3550" style={{ width: 500, height: 400, bottom: "-20%", left: "-10%", opacity: 0.6 }} />

//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
//           <Reveal>
//             <div style={{ textAlign: "center", marginBottom: 56 }}>
//               <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,179,71,.15)", borderRadius: 50, padding: "8px 20px", marginBottom: 16 }}>
//                 <span style={{ fontSize: 18 }}>📸</span>
//                 <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FFB347" }}>Campus Vibes</span>
//               </div>
//               <h2 style={{ fontFamily: "'Fredoka One',cursive", fontSize: "clamp(32px,4vw,56px)", color: "white", lineHeight: 1.1, marginBottom: 12 }}>
//                 Life at <span style={{ color: "#FFB347" }}>Ascento!</span> 🎉
//               </h2>
//               <p style={{ fontSize: 16, color: "rgba(255,255,255,.5)", maxWidth: 420, margin: "0 auto" }}>
//                 A peek into our fun, energetic classrooms where every day is a new adventure.
//               </p>
//             </div>
//           </Reveal>

//           <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "220px 220px", gap: 16 }}>
//             {galleryImgs.map((img, i) => (
//               <Reveal key={i} delay={i * 60}>
//                 <div className="gallery-wrap" style={{
//                   borderRadius: 20, overflow: "hidden", position: "relative",
//                   ...(i === 0 ? { gridRow: "span 2" } : {}),
//                   border: "3px solid rgba(255,255,255,.06)",
//                   boxShadow: "0 8px 30px rgba(0,0,0,.3)",
//                 }}>
//                   <Image
//                     src={img.src}
//                     alt={img.alt}
//                     width={600} height={440}
//                     className="gallery-img"
//                     style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
//                     onError={(e) => { e.target.src = img.fallback; }}
//                   />
//                   <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(10,10,30,.7) 0%,transparent 50%)", opacity: 0, transition: "opacity .4s", display: "flex", alignItems: "flex-end", padding: 16 }} className="gallery-overlay-inner">
//                     <span style={{ fontWeight: 800, fontSize: 14, color: "white" }}>{img.alt}</span>
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           TEAM
//       ════════════════════════════════ */}
//       <section id="team" style={{ padding: "100px 0", background: "#FFFDF7", position: "relative", overflow: "hidden" }}>
//         <Blob color="#FFF0E8" style={{ width: 400, height: 400, bottom: "-15%", right: "-10%", opacity: 0.7 }} />

//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
//           <Reveal>
//             <div style={{ textAlign: "center", marginBottom: 64 }}>
//               <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#EDE7FF", borderRadius: 50, padding: "8px 20px", marginBottom: 16 }}>
//                 <span style={{ fontSize: 18 }}>👩‍🏫</span>
//                 <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A78BFA" }}>Our Dream Team</span>
//               </div>
//               <h2 style={{ fontFamily: "'Fredoka One',cursive", fontSize: "clamp(32px,4vw,56px)", color: "#1A1A2E", lineHeight: 1.1, marginBottom: 16 }}>
//                 The Heroes Behind <span style={{ color: "#A78BFA" }}>Every Win!</span> 🦸
//               </h2>
//               <p style={{ fontSize: 17, color: "#777", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
//                 Passionate, caring, and incredibly experienced — our team lives to help children shine.
//               </p>
//             </div>
//           </Reveal>

//           {/* Principal & Director featured */}
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
//             {[
//               { initials: "BT", name: "Mrs. Bala Tomar", role: "Principal 👑", qual: "M.A., B.Ed., NET Qualified • 27 Years", bio: "The heart and soul of Ascento — 27 years of turning curious children into confident champions through love, wisdom and activity-based learning.", color: "#4ECDC4", tags: ["Right Brain Dev", "Midbrain", "Abacus & Vedic", "Hindi Expert"] },
//               { initials: "ST", name: "Mr. Surendra Tomar", role: "Director 🚀", qual: "B.A., Computer Diploma • 30+ Years", bio: "The visionary who built a 50+ centre empire across India — deeply passionate about making quality education accessible to every child.", color: "#FF6B6B", tags: ["Franchise Dev", "Abacus & Vedic", "Academic Mgmt", "Leadership"] },
//             ].map((m, i) => (
//               <Reveal key={i} delay={i * 100}>
//                 <div className="team-card" style={{ background: "white", borderRadius: 28, padding: "36px", boxShadow: "0 4px 24px rgba(0,0,0,.07)", border: `3px solid ${m.color}22`, position: "relative", overflow: "hidden" }}>
//                   {/* Colored accent bar */}
//                   <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: m.color }} />

//                   <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginTop: 8 }}>
//                     <div style={{ width: 80, height: 80, borderRadius: 22, background: `linear-gradient(135deg,${m.color},${m.color}99)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fredoka One',cursive", fontSize: 28, color: "white", flexShrink: 0, boxShadow: `0 8px 24px ${m.color}40` }}>
//                       {m.initials}
//                     </div>
//                     <div>
//                       <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 22, color: "#1A1A2E", marginBottom: 3 }}>{m.name}</div>
//                       <div style={{ fontSize: 13, fontWeight: 800, color: m.color, marginBottom: 4 }}>{m.role}</div>
//                       <div style={{ fontSize: 12, color: "#999", fontWeight: 700 }}>{m.qual}</div>
//                     </div>
//                   </div>
//                   <p style={{ fontSize: 14, lineHeight: 1.7, color: "#666", margin: "20px 0 16px" }}>{m.bio}</p>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
//                     {m.tags.map(t => (
//                       <span key={t} style={{ fontSize: 11, fontWeight: 800, padding: "5px 12px", borderRadius: 50, background: m.color + "15", color: m.color, border: `1.5px solid ${m.color}33` }}>{t}</span>
//                     ))}
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>

//           {/* Other team */}
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
//             {team.map((m, i) => (
//               <Reveal key={i} delay={i * 70}>
//                 <div className="team-card" style={{ background: "white", borderRadius: 22, padding: 24, boxShadow: "0 4px 16px rgba(0,0,0,.06)", border: `2.5px solid ${m.color}22` }}>
//                   <div style={{ width: 56, height: 56, borderRadius: 16, background: `linear-gradient(135deg,${m.color},${m.color}88)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fredoka One',cursive", fontSize: 20, color: "white", marginBottom: 14, boxShadow: `0 6px 16px ${m.color}40` }}>
//                     {m.initials}
//                   </div>
//                   <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 16, color: "#1A1A2E", marginBottom: 3 }}>{m.name}</div>
//                   <div style={{ fontSize: 12, fontWeight: 800, color: m.color, marginBottom: 10 }}>{m.role}</div>
//                   <div style={{ display: "inline-block", fontSize: 11, fontWeight: 800, padding: "4px 12px", borderRadius: 50, background: m.color + "15", color: m.color, marginBottom: 12 }}>{m.exp}</div>
//                   <p style={{ fontSize: 13, lineHeight: 1.6, color: "#777" }}>{m.desc}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           FUN FACTS STRIP
//       ════════════════════════════════ */}
//       <section style={{ padding: "80px 0", background: "linear-gradient(135deg,#FF6B6B,#FFB347)", position: "relative", overflow: "hidden" }}>
//         <div style={{ position: "absolute", top: "50%", left: "5%", fontSize: 120, opacity: 0.08, transform: "translateY(-50%)", fontFamily: "'Fredoka One',cursive" }}>FUN!</div>
//         <div style={{ position: "absolute", top: "50%", right: "5%", fontSize: 120, opacity: 0.08, transform: "translateY(-50%)", fontFamily: "'Fredoka One',cursive" }}>🧠</div>

//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
//           <Reveal>
//             <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
//               {["🌟", "⭐", "🌟", "⭐", "🌟"].map((s, i) => <span key={i} style={{ fontSize: 28 }}>{s}</span>)}
//             </div>
//             <h2 style={{ fontFamily: "'Fredoka One',cursive", fontSize: "clamp(28px,4vw,52px)", color: "white", lineHeight: 1.1, marginBottom: 16 }}>
//               Did You Know? 🤯
//             </h2>
//             <p style={{ fontSize: 20, color: "rgba(255,255,255,.9)", maxWidth: 620, margin: "0 auto 40px", lineHeight: 1.6, fontWeight: 700 }}>
//               Children who learn abacus show <strong style={{ color: "white" }}>2x faster</strong> mental calculation speed and score <strong style={{ color: "white" }}>30% higher</strong> in school maths exams within 6 months! 🚀
//             </p>
//             <Link href="/contact" style={{ background: "white", color: "#FF6B6B", fontFamily: "inherit", fontWeight: 900, fontSize: 18, padding: "18px 48px", borderRadius: 50, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: "0 12px 40px rgba(0,0,0,.2)", transition: "transform .3s" }}
//               onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
//               onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
//               🎓 Book a FREE Trial Class!
//             </Link>
//           </Reveal>
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           FRANCHISE CTA
//       ════════════════════════════════ */}
//       <section id="contact" style={{ padding: "100px 0", background: "#FFFDF7" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
//           <Reveal dir="scale">
//             <div style={{ background: "#1A1A2E", borderRadius: 36, padding: "72px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, position: "relative", overflow: "hidden" }}>

//               <Blob color="#2A2A60" style={{ width: 500, height: 400, top: "-30%", right: "-10%", opacity: 0.8 }} />
//               <Blob color="#3A1A30" style={{ width: 400, height: 300, bottom: "-30%", left: "10%", opacity: 0.5 }} />

//               {/* Decorative stars */}
//               <Star size={40} color="#FFB347" style={{ position: "absolute", top: 30, right: 200, opacity: 0.6 }} />
//               <Star size={24} color="#FF6B6B" style={{ position: "absolute", bottom: 40, right: 320, opacity: 0.5 }} />
//               <Star size={32} color="#4ECDC4" style={{ position: "absolute", top: 60, left: 400, opacity: 0.4 }} />

//               <div style={{ position: "relative", zIndex: 1, flex: 1 }}>
//                 <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,179,71,.15)", borderRadius: 50, padding: "8px 20px", marginBottom: 20 }}>
//                   <span style={{ fontSize: 18 }}>🏪</span>
//                   <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FFB347" }}>Open a Centre</span>
//                 </div>
//                 <h2 style={{ fontFamily: "'Fredoka One',cursive", fontSize: "clamp(28px,3.5vw,48px)", color: "white", lineHeight: 1.1, marginBottom: 16 }}>
//                   Start Your Own <span style={{ color: "#FFB347" }}>Ascento</span> Centre! 🌟
//                 </h2>
//                 <p style={{ fontSize: 16, color: "rgba(255,255,255,.6)", maxWidth: 400, lineHeight: 1.7 }}>
//                   Join 50+ successful franchise partners across India. Low investment, full training support, and a proven brand that parents trust.
//                 </p>
//               </div>

//               <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 14, alignItems: "center", flexShrink: 0 }}>
//                 <Link href="/franchise" style={{ background: "linear-gradient(135deg,#FFB347,#FFD700)", color: "#1A1A2E", fontFamily: "inherit", fontWeight: 900, fontSize: 17, padding: "18px 40px", borderRadius: 50, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: "0 10px 35px rgba(255,179,71,.45)", transition: "all .3s cubic-bezier(.34,1.56,.64,1)", whiteSpace: "nowrap" }}
//                   onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.07) translateY(-2px)"; }}
//                   onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}>
//                   🏪 Become a Partner
//                 </Link>
//                 <Link href="/contact" style={{ color: "rgba(255,255,255,.6)", fontWeight: 800, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transition: "color .2s" }}
//                   onMouseEnter={e => e.currentTarget.style.color = "#FFB347"}
//                   onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.6)"}>
//                   📞 Schedule a Call →
//                 </Link>
//                 <p style={{ fontSize: 12, color: "rgba(255,255,255,.3)", fontWeight: 700, letterSpacing: "0.06em", textAlign: "center" }}>
//                   Low Investment • High ROI • Full Support
//                 </p>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ════════════════════════════════
//           FOOTER
//       ════════════════════════════════ */}
//       <footer style={{ background: "#1A1A2E", padding: "64px 0 32px", borderTop: "1px solid rgba(255,255,255,.06)" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,.06)" }}>

//             {/* Brand */}
//             <div>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
//                 <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg,#FF6B6B,#FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🧮</div>
//                 <div>
//                   <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 20, color: "white" }}>Ascento <span style={{ color: "#FF6B6B" }}>Abacus</span></div>
//                   <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginTop: 1 }}>Brain Development Academy</div>
//                 </div>
//               </div>
//               <p style={{ fontSize: 14, color: "rgba(255,255,255,.4)", lineHeight: 1.7, marginBottom: 20 }}>India's favourite abacus & brain development programme for children aged 4–17. Empowering young minds since 2010.</p>
//               <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//                 {[["📍", "Dwarka, New Delhi, India"], ["📧", "info@ascento.in"], ["📞", "+91 98765 43210"]].map(([e, t]) => (
//                   <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,.4)", fontWeight: 700 }}>
//                     <span style={{ fontSize: 15 }}>{e}</span>{t}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Links */}
//             {[
//               { title: "📚 Programs", links: ["Abacus Mastery", "Brain Gym", "Vedic Maths", "Pre-Abacus", "Midbrain Activation"] },
//               { title: "🏫 Company", links: ["About Us", "Our Team", "Gallery", "Results & Awards", "Contact"] },
//               { title: "🤝 Franchise", links: ["Why Partner?", "Investment Info", "Training & Support", "Success Stories", "Apply Now"] },
//             ].map(col => (
//               <div key={col.title}>
//                 <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,.35)", marginBottom: 20 }}>{col.title}</div>
//                 <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
//                   {col.links.map(l => (
//                     <li key={l}>
//                       <Link href="#" style={{ fontSize: 14, color: "rgba(255,255,255,.55)", textDecoration: "none", fontWeight: 700, transition: "color .2s" }}
//                         onMouseEnter={e => e.currentTarget.style.color = "#FFB347"}
//                         onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.55)"}>
//                         {l}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           {/* Bottom bar */}
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 28, flexWrap: "wrap", gap: 12 }}>
//             <span style={{ fontSize: 13, color: "rgba(255,255,255,.25)", fontWeight: 700 }}>© 2024 Ascento Abacus. All rights reserved. Made with 💛 for young learners.</span>
//             <div style={{ display: "flex", gap: 16 }}>
//               {["🌐 ascento.in", "📘 Facebook", "📸 Instagram"].map(s => (
//                 <Link key={s} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,.25)", textDecoration: "none", fontWeight: 800, transition: "color .2s" }}
//                   onMouseEnter={e => e.currentTarget.style.color = "#FFB347"}
//                   onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.25)"}>
//                   {s}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }











export default function Home() {
  return (
    <div>
      <h1>🚀 My Ascento is live!</h1>
    </div>
  );
}