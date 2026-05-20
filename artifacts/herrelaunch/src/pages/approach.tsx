import React from "react";
import { motion } from "framer-motion";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const steps = [
  {
    number: "01",
    title: "Complete a Short Interest Form",
    desc: "Participants begin by completing a brief interest form that helps us understand their goals, availability, and readiness to engage.",
  },
  {
    number: "02",
    title: "Join a Live Online Cohort",
    desc: "Accepted participants are placed into a live online cohort — a small, intentional group that meets together for six weeks via Zoom.",
  },
  {
    number: "03",
    title: "Engage in Guided Workshops",
    desc: "Each workshop includes structured reflection, guided discussion, and concrete action steps — designed to build on the session before.",
  },
  {
    number: "04",
    title: "Leave With a Relaunch Plan",
    desc: "Participants leave with practical tools and a personalized relaunch plan — ready to speak up, lead, and step boldly into their next chapter.",
  },
];

export default function Approach() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">

        {/* Hero */}
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
                Our Approach
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-6 tracking-tight text-primary-foreground">
                Simple steps. Real transformation.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                Rebuilding confidence isn't about becoming someone new. It's about remembering who you already are — and giving you the tools to act on it.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Steps Timeline */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <div className="space-y-8 md:space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="flex gap-6 md:gap-10 items-start rounded-2xl border border-border/50 bg-card p-8 md:p-10 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <span className="font-serif text-xl font-bold text-primary">{step.number}</span>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-3 leading-tight">{step.title}</h3>
                      <p className="text-lg text-foreground/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Connector line between cards */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-start pl-[44px] md:pl-[52px]">
                      <div className="w-px h-8 bg-border" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-accent/20">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Ready to begin?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg mb-10">
                The next cohort is forming now. Complete the interest form and secure your place.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-base h-auto w-full sm:w-fit transition-all hover:scale-105">
                    Complete the Interest Form
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base h-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-fit transition-all">
                    View the Program
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
