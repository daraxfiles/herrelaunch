import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-12 pb-12 overflow-hidden flex-grow">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20 z-10 md:w-3/4 lg:w-2/3" />
            <img 
              src={heroImg} 
              alt="Woman looking thoughtfully out a sunlit window" 
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
              <motion.span variants={fadeInUp} className="inline-block text-secondary font-medium tracking-wider uppercase text-sm mb-6">
                Welcome to your next chapter
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.05] mb-6 tracking-tight">
                Step back into life with <span className="text-primary italic">renewed confidence.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/80 mb-10 max-w-lg leading-relaxed">
                Free, online confidence workshops for women worldwide. A warm, empowering space to catch your breath, find your footing, and step forward.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/join">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-lg h-auto w-full sm:w-fit transition-all hover:scale-105">
                    Claim your free spot
                  </Button>
                </Link>
                <Link href="/approach">
                  <Button variant="ghost" className="rounded-full px-8 py-6 text-lg h-auto hover:bg-primary/5 text-primary w-full sm:w-fit transition-all">
                    Learn more <ArrowRight className="ml-2 h-5 w-5" />
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
