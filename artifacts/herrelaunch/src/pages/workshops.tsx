import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import workshopImg from "@/assets/workshop.png";
import communityImg from "@/assets/community.png";

export default function Workshops() {
  return (
    <PageTransition>
      <div className="py-12 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.span variants={fadeInUp} className="text-secondary font-medium tracking-wider uppercase text-sm mb-4 block">
            Our Offerings
          </motion.span>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif text-foreground max-w-2xl">
              Transformative workshops, zero cost.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-foreground/70 max-w-md md:text-right text-lg">
              We believe every woman deserves access to high-quality mentorship. That's why our core workshops are always free, entirely online, and accessible from anywhere.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full border-border/50 bg-card overflow-hidden group hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={workshopImg} alt="Workshop setting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-full">Foundation</span>
                  <span className="text-muted-foreground text-sm font-medium">4 Weeks • Online</span>
                </div>
                <h3 className="text-3xl font-serif text-foreground mb-4">The Confidence Reset</h3>
                <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                  Our signature program. Rediscover your core strengths, silence the inner critic, and build a personalized toolkit for navigating uncertainty with grace.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Identifying your unique value", "Overcoming imposter syndrome", "Setting boundaries that stick"].map((item, i) => (
                    <li key={i} className="flex items-start text-base text-foreground/80">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mr-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/join">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg transition-all">
                    Register for Next Cohort
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full border-border/50 bg-card overflow-hidden group hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={communityImg} alt="Women conversing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Advanced</span>
                  <span className="text-muted-foreground text-sm font-medium">Ongoing • Online</span>
                </div>
                <h3 className="text-3xl font-serif text-foreground mb-4">The Relaunch Circle</h3>
                <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                  For graduates of the Reset. A continuous mentorship and peer support group where we tackle real-time challenges in career and life transitions.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Monthly deep-dive masterclasses", "Small group peer coaching", "Direct feedback on resumes/plans"].map((item, i) => (
                    <li key={i} className="flex items-start text-base text-foreground/80">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/join">
                  <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white rounded-full py-6 text-lg transition-all">
                    Join the Waitlist
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
