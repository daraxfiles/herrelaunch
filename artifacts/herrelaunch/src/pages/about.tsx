import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";

const pillars = [
  {
    title: "Education",
    body: "We ground every workshop in evidence-based frameworks for confidence-building and leadership development — designed to educate, not just inspire.",
  },
  {
    title: "Self-Advocacy",
    body: "We equip women with the language, posture, and clarity to speak up for themselves — in rooms that have too often overlooked them.",
  },
  {
    title: "Leadership Development",
    body: "We develop practical leadership skills that translate directly into life, work, and service, so women can step into every role with intention.",
  },
  {
    title: "Free Access",
    body: "Cost is never a barrier to growth here. Every program we offer is completely free, because every woman deserves this opportunity.",
  },
];

export default function About() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">

        {/* Page Hero */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-foreground rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.span variants={fadeInUp} className="inline-block text-secondary font-semibold tracking-widest uppercase text-xs mb-6">
                About Us
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-6 tracking-tight text-primary-foreground">
                Women helping women rise.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                HerRelaunch LLC is a women-centered online initiative founded to help women rebuild confidence and step into leadership with clarity and courage.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-secondary font-semibold tracking-widest uppercase text-xs">
                Who We Are
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-8 leading-tight max-w-2xl">
                Grounded in education, driven by purpose.
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-5 text-foreground/70 leading-relaxed text-lg max-w-3xl">
                <p>
                  HerRelaunch LLC is a women-centered online initiative founded to help women rebuild confidence and step into leadership with clarity and courage. The program is grounded in education, self-advocacy, and practical leadership development.
                </p>
                <p>
                  We are designed for women worldwide who are ready to speak up, lead, and relaunch their next chapter — built around free access so cost is never a barrier to growth.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-20 md:py-28 bg-accent/20">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="rounded-3xl border border-border/60 bg-card p-10 md:p-14"
            >
              <motion.div variants={fadeInUp} className="w-12 h-1 bg-secondary rounded-full mb-8" />
              <motion.span variants={fadeInUp} className="text-secondary font-semibold tracking-widest uppercase text-xs mb-4 block">
                Founded By
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-foreground mb-4 leading-tight">
                Mary-Reginald Anibueze
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-foreground/60 text-base mb-6 font-medium">
                Tenured Associate Professor, Berea College &nbsp;·&nbsp; Military Spouse
              </motion.p>
              <motion.p variants={fadeInUp} className="text-foreground/70 leading-relaxed text-lg max-w-2xl">
                HerRelaunch LLC was founded by Mary-Reginald Anibueze, whose dual life as a tenured academic and military spouse gave her a firsthand understanding of the unique confidence challenges women face when navigating transitions. She built HerRelaunch to create the space she once needed herself — and to make sure no woman has to navigate that journey alone.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Program Pillars */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-secondary font-semibold tracking-widest uppercase text-xs">
                What We Stand On
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mt-4 max-w-xl mx-auto leading-tight">
                Our pillars
              </motion.h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-border/50 bg-card p-8 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-8 h-1 bg-secondary rounded-full mb-5" />
                  <h3 className="text-xl font-serif text-foreground mb-3">{p.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-6 md:px-12 max-w-2xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Ready to take your next step?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
                Join women worldwide who are rebuilding confidence and stepping into leadership through HerRelaunch.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-base h-auto w-full sm:w-fit transition-all hover:scale-105">
                    Get Involved
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base h-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-fit transition-all">
                    View Programs
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
