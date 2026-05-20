import React from "react";
import { motion } from "framer-motion";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Approach() {
  const steps = [
    {
      title: "Acknowledge the Pause",
      desc: "Every transition starts with recognition. We create a safe space to validate your experiences without judgment."
    },
    {
      title: "Identify Core Strengths",
      desc: "Through guided reflection, we help you uncover the profound skills you've developed during your time away."
    },
    {
      title: "Reframe the Narrative",
      desc: "We work together to rewrite your story—turning perceived gaps into demonstrations of adaptability and resilience."
    },
    {
      title: "Step Forward",
      desc: "With renewed clarity, you'll develop actionable steps for your return to the workforce or your next life phase."
    }
  ];

  return (
    <PageTransition>
      <div className="py-12 md:py-24 max-w-6xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif text-primary mb-6">
            Our Philosophy
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-foreground/80 leading-relaxed">
            Rebuilding confidence isn't about becoming someone new. It's about remembering who you already are.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Vertical line connecting steps on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-16 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`md:w-1/2 text-center md:text-left ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">{step.title}</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">{step.desc}</p>
                </div>
                
                {/* Center dot for desktop */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 shadow-[0_0_0_8px_rgba(42,95,110,0.1)]" />
                
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-32 text-center"
        >
          <div className="bg-primary/5 rounded-3xl p-12 max-w-4xl mx-auto border border-primary/10">
            <h2 className="text-3xl font-serif text-primary mb-6">Ready to begin?</h2>
            <Link href="/workshops">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 py-6 text-lg">
                Explore Our Workshops
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
