import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, MessageSquare, Users, Star, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero.png";
import communityImg from "@/assets/community2.jpg";
import { Button } from "@/components/ui/button";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";

const offerings = [
  {
    icon: BookOpen,
    title: "Confidence Building",
    desc: "Evidence-based frameworks to help you rebuild your inner voice and lead from a place of strength.",
  },
  {
    icon: MessageSquare,
    title: "Self-Advocacy",
    desc: "Learn the language and posture to speak up for yourself in every room that matters.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    desc: "Practical skills that translate directly into life, work, and service, starting now.",
  },
];

const stats = [
  { value: "3", label: "Cohorts / Year" },
  { value: "6", label: "Weeks Each" },
  { value: "2×", label: "Weekly Sessions" },
  { value: "Free", label: "Always" },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">

        {/* ─── SPLIT HERO ─────────────────────────────────────────── */}
        <section className="min-h-[92vh] grid md:grid-cols-2">
          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden order-2 md:order-1 h-72 md:h-auto"
          >
            <img
              src={heroImg}
              alt="Confident Black African woman"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* right-side fade so it blends into the dark panel on desktop */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/90 to-transparent hidden md:block" />
          </motion.div>

          {/* Right — Dark panel */}
          <div className="bg-primary flex items-center order-1 md:order-2">
            <div className="px-10 md:px-14 lg:px-20 py-20 md:py-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-lg"
              >
                <motion.span variants={fadeInUp} className="inline-block text-secondary font-semibold tracking-widest uppercase text-xs mb-6 border border-secondary/40 rounded-full px-4 py-1.5">
                  Free Online Workshops
                </motion.span>

                <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground leading-[1.1] mb-6 tracking-tight">
                  Regain Your Momentum.{" "}
                  <span className="text-secondary italic">Lead With Confidence.</span>
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/75 leading-relaxed mb-10">
                  HerRelaunch LLC offers free, online Confidence Workshops that help women rebuild self-advocacy, strengthen leadership presence, and take bold next steps in life, work, and service.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/get-involved">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-md px-8 py-6 text-base h-auto w-full sm:w-fit transition-all hover:scale-105 shadow-lg shadow-secondary/30">
                      Launch Your Journey
                    </Button>
                  </Link>
                  <Link href="/programs">
                    <Button variant="ghost" size="lg" className="rounded-md px-8 py-6 text-base h-auto text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-fit border border-primary-foreground/20 transition-all">
                      View Programs
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── WHAT WE OFFER ──────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-14"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-foreground">
                What We Offer
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {offerings.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="bg-primary rounded-xl p-8 md:p-10 h-full flex flex-col items-center text-center group hover:bg-primary/90 transition-colors duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 transition-all">
                    <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-5 group-hover:bg-secondary/30 transition-colors">
                      <item.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-serif text-primary-foreground mb-3">{item.title}</h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── STATS BAR ──────────────────────────────────────────── */}
        <section className="py-14 bg-secondary/10 border-y border-secondary/20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                >
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-1">{s.value}</p>
                  <p className="text-sm text-foreground/60 uppercase tracking-wider">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMMUNITY STRIP ────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img src={communityImg} alt="Women in community workshop" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="text-secondary font-semibold tracking-widest uppercase text-xs">
                  Who We Serve
                </motion.span>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6 leading-tight">
                  Women ready to speak up, lead, and relaunch.
                </motion.h2>
                <motion.div variants={fadeInUp} className="space-y-3 mb-8">
                  {[
                    "Women of all backgrounds worldwide",
                    "Those navigating major life transitions",
                    "Women stepping into leadership roles",
                    "Anyone ready for their next chapter",
                  ].map((line, i) => (
                    <div key={i} className="flex items-center gap-3 text-foreground/70">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span>{line}</span>
                    </div>
                  ))}
                </motion.div>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-8 py-6 text-base h-auto w-full sm:w-fit transition-all hover:scale-105">
                      Our Story
                    </Button>
                  </Link>
                  <Link href="/get-involved">
                    <Button variant="outline" size="lg" className="rounded-md px-8 py-6 text-base h-auto border-primary/30 text-primary hover:bg-primary hover:text-white w-full sm:w-fit transition-all">
                      Get Involved
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── BOTTOM CTA ─────────────────────────────────────────── */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-6 md:px-12 max-w-2xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex justify-center mb-6">
                <Star className="h-8 w-8 text-secondary" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
                Your next chapter starts here.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/75 text-lg mb-10 leading-relaxed">
                Join the interest list, request a workshop, or inquire about support. Everything is free because every woman deserves the tools to lead.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-md px-8 py-6 text-base h-auto w-full sm:w-fit transition-all hover:scale-105">
                    Join the Interest List
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="rounded-md px-8 py-6 text-base h-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-fit transition-all">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
