import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";
import communityImg from "@/assets/community.png";
import testimonialImg from "@/assets/testimonial.png";

const values = [
  {
    title: "Accessibility",
    body: "Confidence-building resources should not be behind a paywall. Every workshop we offer is completely free — no strings attached.",
  },
  {
    title: "Inclusivity",
    body: "We serve women of all backgrounds, cultures, and life stages. Our community is richer because of the many voices within it.",
  },
  {
    title: "Empowerment",
    body: "We don't hand women confidence — we help them rediscover the strength they already carry. Our role is to illuminate, not rescue.",
  },
  {
    title: "Community",
    body: "Growth happens in relationship. We create intentional spaces where women learn from facilitators and from one another.",
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
                HerRelaunch LLC was founded on a simple belief: every woman deserves a safe, supportive space to rediscover her voice, rebuild her confidence, and step boldly into her next chapter.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img src={communityImg} alt="Women in community workshop" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/15 rounded-full blur-3xl -z-10" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="text-secondary font-semibold tracking-widest uppercase text-xs">
                  Our Story
                </motion.span>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6 leading-tight">
                  Born from lived experience.
                </motion.h2>
                <motion.div variants={fadeInUp} className="space-y-4 text-foreground/70 leading-relaxed text-lg">
                  <p>
                    HerRelaunch LLC grew out of a recognition that too many women — talented, capable, determined women — were stalling not because of a lack of skill, but because of a lack of confidence.
                  </p>
                  <p>
                    Whether navigating a return to work after time away, stepping into a leadership role, or simply rediscovering who they are after a major life transition, women told us the same thing: they needed a place that believed in them before they believed in themselves.
                  </p>
                  <p>
                    So we built it. Free, online, and open to women worldwide.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 md:py-32 bg-accent/20">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-secondary font-semibold tracking-widest uppercase text-xs">
                What Guides Us
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mt-4 max-w-xl mx-auto leading-tight">
                Our values
              </motion.h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-border/50 bg-card p-8 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-8 h-1 bg-secondary rounded-full mb-5" />
                  <h3 className="text-xl font-serif text-foreground mb-3">{v.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote / Testimonial */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="order-2 md:order-1"
              >
                <motion.svg variants={fadeInUp} className="w-10 h-10 text-secondary mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C6.686 8 4 10.686 4 14s2.686 6 6 6c.768 0 1.501-.146 2.174-.41C11.418 21.866 9.847 23 8 23c-.552 0-1 .448-1 1s.448 1 1 1c3.134 0 5.77-2.12 6.518-5.077C14.571 19.63 14.6 19.317 14.6 19 14.6 13.478 12.523 8 10 8zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.768 0 1.501-.146 2.174-.41C23.418 21.866 21.847 23 20 23c-.552 0-1 .448-1 1s.448 1 1 1c3.134 0 5.77-2.12 6.518-5.077C26.571 19.63 26.6 19.317 26.6 19 26.6 13.478 24.523 8 22 8z" />
                </motion.svg>
                <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed mb-8">
                  "HerRelaunch didn't just teach me skills. It reminded me that my voice matters — and that there are women ready to stand beside me as I use it."
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <p className="font-bold text-foreground text-lg">Monique T.</p>
                  <p className="text-foreground/60 text-sm">Workshop Graduate</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative order-1 md:order-2"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden max-w-sm mx-auto">
                  <img src={testimonialImg} alt="Workshop graduate" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/50 rounded-full blur-2xl -z-10" />
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
                Ready to take your next step?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
                Join thousands of women who have already found their footing through HerRelaunch workshops.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/join">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-base h-auto w-full sm:w-fit transition-all hover:scale-105">
                    Join a Workshop
                  </Button>
                </Link>
                <Link href="/workshops">
                  <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base h-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-fit transition-all">
                    View Workshops
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
