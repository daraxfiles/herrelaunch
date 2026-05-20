import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Calendar, Heart } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@/assets/hero.png";
import communityImg from "@/assets/community.png";
import { Button } from "@/components/ui/button";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";

const stats = [
  { label: "Cohorts Per Year", value: "3" },
  { label: "Weeks Per Cohort", value: "6" },
  { label: "Sessions Per Week", value: "2×" },
  { label: "Minutes Per Session", value: "90" },
];

const snapshots = [
  {
    icon: Heart,
    title: "Our Mission",
    body: "We help women worldwide rebuild confidence, practice self-advocacy, and pursue leadership roles through free online workshops.",
  },
  {
    icon: Users,
    title: "Who We Serve",
    body: "Women of all backgrounds who want to relaunch their confidence, voice, and leadership potential.",
  },
  {
    icon: Calendar,
    title: "How It Works",
    body: "Three cohorts per year, 6 weeks each, twice a week for 90 minutes — entirely online and always free.",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">

        {/* Hero Section */}
        <section className="relative min-h-[92vh] flex items-center pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10 z-10" />
            <img
              src={heroImg}
              alt="Confident woman stepping forward"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="container relative z-10 px-6 md:px-12 mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.span variants={fadeInUp} className="inline-block text-secondary font-semibold tracking-widest uppercase text-xs mb-6 border border-secondary/30 rounded-full px-4 py-1.5">
                Free Online Workshops for Women
              </motion.span>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.05] mb-6 tracking-tight">
                Regain Your Momentum.{" "}
                <span className="text-primary italic">Lead With Confidence.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl leading-relaxed">
                HerRelaunch LLC offers free, online Confidence Workshops that help women rebuild self-advocacy, strengthen leadership presence, and take bold next steps in life, work, and service.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/join">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-base h-auto w-full sm:w-fit transition-all hover:scale-105 shadow-md shadow-secondary/20">
                    Join a Workshop
                  </Button>
                </Link>
                <Link href="/approach">
                  <Button variant="ghost" size="lg" className="rounded-full px-8 py-6 text-base h-auto hover:bg-primary/5 text-primary w-full sm:w-fit border border-primary/20 transition-all hover:border-primary/50">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/join#contact">
                  <Button variant="ghost" size="lg" className="rounded-full px-8 py-6 text-base h-auto hover:bg-foreground/5 text-foreground/70 w-full sm:w-fit transition-all">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-primary text-primary-foreground py-10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <p className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-1">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/70 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission / Who We Serve / How It Works */}
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
                What We Offer
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mt-4 max-w-2xl mx-auto leading-tight">
                A space built for your relaunch
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {snapshots.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10 h-full hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-serif text-foreground mb-3">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Image + CTA Section */}
        <section className="py-24 md:py-32 bg-accent/20 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={communityImg} alt="Women in a workshop community" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="text-secondary font-semibold tracking-widest uppercase text-xs">
                  Ready to Begin?
                </motion.span>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6 leading-tight">
                  Your next chapter starts here.
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-foreground/70 leading-relaxed mb-8">
                  Join the interest list, request a workshop for your organization, or inquire about how we can support your community. Everything we offer is free — because every woman deserves access to the tools that help her lead.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/join">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base h-auto w-full sm:w-fit transition-all hover:scale-105">
                      Join the Interest List
                    </Button>
                  </Link>
                  <Link href="/workshops">
                    <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base h-auto border-primary/30 text-primary hover:bg-primary hover:text-white w-full sm:w-fit transition-all">
                      View Workshops
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
