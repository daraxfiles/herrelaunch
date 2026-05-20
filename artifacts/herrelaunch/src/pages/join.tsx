import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Join() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration Received",
        description: "We've sent the details to your email. We look forward to seeing you.",
      });
      // Optionally reset form here
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="py-12 md:py-24 relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto bg-card rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-border/50"
          >
            <motion.div variants={fadeInUp} className="md:w-1/2 p-10 md:p-16 bg-card relative">
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4 tracking-tight">Ready for your fresh start?</h1>
              <p className="text-foreground/70 mb-10 text-lg">
                Join our next free online cohort. Spaces are limited to ensure an intimate, supportive environment.
              </p>
              
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground/80 font-medium">First Name</Label>
                  <Input id="name" required placeholder="Jane" className="bg-background border-border/50 focus-visible:ring-secondary py-6 px-4 text-lg rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/80 font-medium">Email Address</Label>
                  <Input id="email" type="email" required placeholder="jane@example.com" className="bg-background border-border/50 focus-visible:ring-secondary py-6 px-4 text-lg rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workshop" className="text-foreground/80 font-medium">Workshop Interest</Label>
                  <select id="workshop" className="flex h-14 w-full rounded-xl border border-border/50 bg-background px-4 py-2 text-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                    <option>The Confidence Reset (Next Cohort)</option>
                    <option>The Relaunch Circle (Waitlist)</option>
                  </select>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-7 text-xl rounded-xl mt-4 transition-all shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Securing your spot..." : "Secure My Free Spot"}
                </Button>
              </form>
            </motion.div>

            <motion.div variants={fadeInUp} className="md:w-1/2 bg-primary text-primary-foreground p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-serif mb-10 text-primary-foreground">What to expect:</h3>
              <ul className="space-y-10">
                <li className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground text-primary flex items-center justify-center font-bold shrink-0 text-xl shadow-lg">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Welcome Email</h4>
                    <p className="text-primary-foreground/80 leading-relaxed">You'll receive a calendar invite and a small prep-guide to read before our first session.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground text-primary flex items-center justify-center font-bold shrink-0 text-xl shadow-lg">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Session Links</h4>
                    <p className="text-primary-foreground/80 leading-relaxed">Secure Zoom links will be sent 24 hours prior to each workshop meeting.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground text-primary flex items-center justify-center font-bold shrink-0 text-xl shadow-lg">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Community Access</h4>
                    <p className="text-primary-foreground/80 leading-relaxed">Invitation to our private alumni network upon completion.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
