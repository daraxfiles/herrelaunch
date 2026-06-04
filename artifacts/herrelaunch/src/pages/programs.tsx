import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Clock, Users, Wifi, DollarSign, Video } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";
import workshopImg from "@/assets/workshop2.jpg";
import communityImg from "@/assets/community.png";

const programDetails = [
  { icon: Calendar, label: "Format", value: "3 cohorts per year" },
  { icon: Clock, label: "Length", value: "6 weeks per cohort" },
  { icon: Users, label: "Frequency", value: "2 sessions per week" },
  { icon: Clock, label: "Session Length", value: "90 minutes" },
  { icon: DollarSign, label: "Cost", value: "Free" },
  { icon: Video, label: "Delivery", value: "Live online via Zoom" },
];

const topics = [
  "Self-advocacy",
  "Confidence rebuilding",
  "Communication skills",
  "Leadership identity",
  "Boundary setting",
  "Next-step planning",
];

export default function Programs() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">

        {/* Hero */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.span variants={fadeInUp} className="inline-block text-secondary font-semibold tracking-widest uppercase text-xs mb-6">
                Programs
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-6 tracking-tight text-primary-foreground">
                Transformative learning, zero cost.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                We believe every woman deserves access to high-quality mentorship. Our core program is always free, entirely online, and accessible from anywhere in the world.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Signature Program */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-16"
            >
              <motion.span variants={fadeInUp} className="text-secondary font-semibold tracking-widest uppercase text-xs">
                Signature Program
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mt-4 leading-tight max-w-2xl">
                Confidence Workshop Series
              </motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Program Details Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.p variants={fadeInUp} className="text-lg text-foreground/70 leading-relaxed mb-10">
                  The Confidence Workshop Series is HerRelaunch's core offering: a structured, live online program that guides women through a transformative journey of self-discovery, skill-building, and bold action.
                </motion.p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {programDetails.map((d, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="rounded-xl border border-border/50 bg-card p-5 flex items-start gap-4 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <d.icon className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 uppercase tracking-wider mb-0.5">{d.label}</p>
                        <p className="font-semibold text-foreground">{d.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeInUp}>
                  <Link href="/get-involved">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base h-auto transition-all hover:scale-105">
                      Apply for the Next Cohort
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Workshop Topics */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="rounded-3xl border border-border/50 bg-card overflow-hidden">
                  <div className="h-72 overflow-hidden relative">
                    <img src={workshopImg} alt="Women in workshop" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-xl font-serif text-foreground mb-2">Workshop Topics</h3>
                    <p className="text-sm text-foreground/60 mb-6">Topics may include, but are not limited to:</p>
                    <ul className="space-y-3">
                      {topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-3 text-foreground/80">
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community Image Strip */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl overflow-hidden aspect-[16/9]"
              >
                <img src={communityImg} alt="Women in community" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-foreground mb-4 leading-tight">
                  Learning in community.
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-foreground/70 leading-relaxed text-lg mb-6">
                  Each cohort is intentionally sized to create an intimate, safe environment where every woman has space to speak, reflect, and grow alongside peers who understand the journey.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link href="/approach">
                    <Button variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
                      See How It Works
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
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
                Ready to join the next cohort?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg mb-10">
                Spaces are limited to ensure an intimate, supportive environment for every participant.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/get-involved">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-base h-auto transition-all hover:scale-105">
                    Apply Now. It's Free
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
