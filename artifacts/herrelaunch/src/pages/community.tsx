import React from "react";
import { motion } from "framer-motion";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";
import testimonialImg from "@/assets/testimonial.png";

export default function Community() {
  return (
    <PageTransition>
      <div className="py-12 md:py-24 overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif text-foreground mb-6">
              Voices of the <span className="text-secondary italic">Circle</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-foreground/70">
              When one of us rises, we all rise. Hear from the women who have rediscovered their footing.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative z-10 max-w-md mx-auto shadow-2xl">
                <img src={testimonialImg} alt="Portrait of a confident woman" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent/40 rounded-full blur-[80px] -z-10" />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-xl"
            >
              <motion.svg variants={fadeInUp} className="w-16 h-16 text-secondary mb-8 opacity-40" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10.003 9.227c-3.692 0-6.669 2.977-6.669 6.669 0 3.693 2.977 6.669 6.669 6.669 1.127 0 2.183-0.28 3.109-0.771-0.627 2.059-2.528 3.567-4.776 3.567-0.459 0-0.833 0.373-0.833 0.833s0.373 0.833 0.833 0.833c3.219 0 5.92-2.136 6.516-5.077 0.057-0.287 0.083-0.584 0.083-0.887 0-3.692-2.976-6.669-6.668-6.669zM10.003 10.893c2.771 0 5.001 2.23 5.001 5.001 0 0.177-0.013 0.352-0.035 0.523-0.901-0.34-1.89-0.523-2.924-0.523-2.179 0-4.148 0.895-5.556 2.339 0.44-0.457 0.94-0.865 1.487-1.213-0.076-0.355-0.117-0.725-0.117-1.104-0-2.772 2.23-5.003 5.003-5.003zM22.003 9.227c-3.691 0-6.668 2.977-6.668 6.669 0 3.693 2.977 6.669 6.668 6.669 1.127 0 2.184-0.28 3.109-0.771-0.627 2.059-2.527 3.567-4.776 3.567-0.459 0-0.833 0.373-0.833 0.833s0.373 0.833 0.833 0.833c3.219 0 5.92-2.136 6.516-5.077 0.057-0.287 0.083-0.584 0.083-0.887 0-3.692-2.977-6.669-6.668-6.669zM22.003 10.893c2.771 0 5.001 2.23 5.001 5.001 0 0.177-0.013 0.352-0.035 0.523-0.901-0.34-1.89-0.523-2.924-0.523-2.179 0-4.148 0.895-5.556 2.339 0.44-0.457 0.94-0.865 1.487-1.213-0.076-0.355-0.117-0.725-0.117-1.104 0-2.772 2.23-5.003 5.003-5.003z"></path>
              </motion.svg>
              <motion.p variants={fadeInUp} className="text-2xl md:text-4xl font-serif text-foreground leading-relaxed mb-8">
                "I had been out of the workforce for seven years raising my children. I felt invisible. The HerRelaunch workshop didn't just give me resume tips. It gave me my voice back. I walked into my first interview feeling like I belonged there."
              </motion.p>
              <motion.div variants={fadeInUp}>
                <p className="font-bold text-foreground text-xl">Sarah M.</p>
                <p className="text-foreground/60 text-lg">Workshop Graduate, 2024</p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-32 grid md:grid-cols-3 gap-8"
          >
            {[
              { text: "Finding this group was like finding an oasis. I finally felt understood and seen for the skills I cultivated during my pause.", author: "Elena R." },
              { text: "The structured approach helped me translate my scattered thoughts into a compelling narrative for my career shift.", author: "Michelle T." },
              { text: "More than just career advice, HerRelaunch offered a profound internal reset. I approach challenges completely differently now.", author: "Anita K." }
            ].map((quote, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-card p-8 rounded-3xl border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-foreground/80 italic mb-6 leading-relaxed">"{quote.text}"</p>
                <p className="font-bold text-foreground">{quote.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
