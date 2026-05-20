import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Menu, X } from "lucide-react";
import logoImg from "@assets/image_1779297807468.png";
import heroImg from "@/assets/hero.png";
import communityImg from "@/assets/community.png";
import workshopImg from "@/assets/workshop.png";
import testimonialImg from "@/assets/testimonial.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration Received",
        description: "We've sent the details to your email. We look forward to seeing you.",
      });
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-background selection:bg-secondary/20 overflow-x-hidden">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-border py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
            <img src={logoImg} alt="HerRelaunch LLC" className="h-10 md:h-12 w-auto object-contain" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("approach")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Our Approach</button>
            <button onClick={() => scrollToSection("workshops")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Workshops</button>
            <button onClick={() => scrollToSection("community")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Community</button>
            <Button onClick={() => scrollToSection("register")} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Join a Workshop
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection("approach")} className="text-left text-lg font-serif text-foreground py-2 border-b border-border/50">Our Approach</button>
            <button onClick={() => scrollToSection("workshops")} className="text-left text-lg font-serif text-foreground py-2 border-b border-border/50">Workshops</button>
            <button onClick={() => scrollToSection("community")} className="text-left text-lg font-serif text-foreground py-2 border-b border-border/50">Community</button>
            <Button onClick={() => scrollToSection("register")} className="bg-primary text-primary-foreground w-full mt-4">
              Join a Workshop
            </Button>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10 md:w-2/3" />
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
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6">
                Step back into life with <span className="text-primary italic">renewed confidence.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/80 mb-10 max-w-lg leading-relaxed">
                Free, online confidence workshops for women worldwide. A warm, empowering space to catch your breath, find your footing, and step forward.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection("register")} size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-lg h-auto w-fit">
                  Claim your free spot
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection("approach")} className="rounded-full px-8 py-6 text-lg h-auto hover:bg-primary/5 text-primary w-fit">
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Pause (Empathy Section) */}
        <section id="approach" className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif mb-8">
                We know the feeling of starting over.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-2xl font-light text-primary-foreground/90 leading-relaxed mb-12">
                Whether you are returning after a career break, navigating a major life transition, or simply feeling like you've lost your voice—you are not alone. Rebuilding confidence isn't about becoming someone new. It's about remembering who you already are.
              </motion.p>
              <motion.div variants={fadeInUp} className="w-24 h-[1px] bg-secondary mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Workshops Section */}
        <section id="workshops" className="py-24 md:py-32 bg-background relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-4 block">Our Offerings</span>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground">Transformative workshops, zero cost.</h2>
              </div>
              <p className="text-foreground/70 max-w-md md:text-right">
                We believe every woman deserves access to high-quality mentorship. That's why our core workshops are always free, entirely online, and accessible from anywhere.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Card className="h-full border-border/50 bg-card overflow-hidden group hover:shadow-lg transition-all duration-500 rounded-2xl">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img src={workshopImg} alt="Journaling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-full">Foundation</span>
                      <span className="text-muted-foreground text-sm">4 Weeks • Online</span>
                    </div>
                    <h3 className="text-2xl font-serif text-foreground mb-4">The Confidence Reset</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      Our signature program. Rediscover your core strengths, silence the inner critic, and build a personalized toolkit for navigating uncertainty with grace.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {["Identifying your unique value", "Overcoming imposter syndrome", "Setting boundaries that stick"].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-foreground/80">
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mr-3" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white rounded-full">
                      View Schedule
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full border-border/50 bg-card overflow-hidden group hover:shadow-lg transition-all duration-500 rounded-2xl">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img src={communityImg} alt="Women conversing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Advanced</span>
                      <span className="text-muted-foreground text-sm">Ongoing • Online</span>
                    </div>
                    <h3 className="text-2xl font-serif text-foreground mb-4">The Relaunch Circle</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      For graduates of the Reset. A continuous mentorship and peer support group where we tackle real-time challenges in career and life transitions.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {["Monthly deep-dive masterclasses", "Small group peer coaching", "Direct feedback on resumes/plans"].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-foreground/80">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white rounded-full">
                      View Schedule
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="community" className="py-24 md:py-32 bg-accent/30 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative z-10 max-w-md mx-auto">
                  <img src={testimonialImg} alt="Portrait of a confident woman" className="w-full h-full object-cover" />
                </div>
                {/* Decorative blob behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/50 rounded-full blur-3xl -z-10" />
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-xl"
              >
                <motion.svg variants={fadeInUp} className="w-12 h-12 text-secondary mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.003 9.227c-3.692 0-6.669 2.977-6.669 6.669 0 3.693 2.977 6.669 6.669 6.669 1.127 0 2.183-0.28 3.109-0.771-0.627 2.059-2.528 3.567-4.776 3.567-0.459 0-0.833 0.373-0.833 0.833s0.373 0.833 0.833 0.833c3.219 0 5.92-2.136 6.516-5.077 0.057-0.287 0.083-0.584 0.083-0.887 0-3.692-2.976-6.669-6.668-6.669zM10.003 10.893c2.771 0 5.001 2.23 5.001 5.001 0 0.177-0.013 0.352-0.035 0.523-0.901-0.34-1.89-0.523-2.924-0.523-2.179 0-4.148 0.895-5.556 2.339 0.44-0.457 0.94-0.865 1.487-1.213-0.076-0.355-0.117-0.725-0.117-1.104-0-2.772 2.23-5.003 5.003-5.003zM22.003 9.227c-3.691 0-6.668 2.977-6.668 6.669 0 3.693 2.977 6.669 6.668 6.669 1.127 0 2.184-0.28 3.109-0.771-0.627 2.059-2.527 3.567-4.776 3.567-0.459 0-0.833 0.373-0.833 0.833s0.373 0.833 0.833 0.833c3.219 0 5.92-2.136 6.516-5.077 0.057-0.287 0.083-0.584 0.083-0.887 0-3.692-2.977-6.669-6.668-6.669zM22.003 10.893c2.771 0 5.001 2.23 5.001 5.001 0 0.177-0.013 0.352-0.035 0.523-0.901-0.34-1.89-0.523-2.924-0.523-2.179 0-4.148 0.895-5.556 2.339 0.44-0.457 0.94-0.865 1.487-1.213-0.076-0.355-0.117-0.725-0.117-1.104 0-2.772 2.23-5.003 5.003-5.003z"></path>
                </motion.svg>
                <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed mb-8">
                  "I had been out of the workforce for seven years raising my children. I felt invisible. The HerRelaunch workshop didn't just give me resume tips—it gave me my voice back. I walked into my first interview feeling like I belonged there."
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <p className="font-bold text-foreground text-lg">Sarah M.</p>
                  <p className="text-foreground/60">Workshop Graduate, 2024</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Registration CTA Section */}
        <section id="register" className="py-24 md:py-32 bg-primary relative overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 p-10 md:p-12 bg-card">
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Ready for your fresh start?</h2>
                <p className="text-foreground/70 mb-8">
                  Join our next free online cohort. Spaces are limited to ensure an intimate, supportive environment.
                </p>
                
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/80">First Name</Label>
                    <Input id="name" required placeholder="Jane" className="bg-background border-border/50 focus-visible:ring-secondary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                    <Input id="email" type="email" required placeholder="jane@example.com" className="bg-background border-border/50 focus-visible:ring-secondary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workshop" className="text-foreground/80">Workshop Interest</Label>
                    <select id="workshop" className="flex h-10 w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>The Confidence Reset (Next Cohort)</option>
                      <option>The Relaunch Circle (Waitlist)</option>
                    </select>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg rounded-xl mt-4 transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Securing your spot..." : "Secure My Free Spot"}
                  </Button>
                </form>
              </div>
              <div className="md:w-1/2 bg-muted p-10 md:p-12 flex flex-col justify-center">
                <h3 className="text-xl font-serif text-foreground mb-6">What to expect after you register:</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-foreground">Welcome Email</h4>
                      <p className="text-sm text-foreground/70 mt-1">You'll receive a calendar invite and a small prep-guide to read before our first session.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-foreground">Session Links</h4>
                      <p className="text-sm text-foreground/70 mt-1">Secure Zoom links will be sent 24 hours prior to each workshop meeting.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-foreground">Community Access</h4>
                      <p className="text-sm text-foreground/70 mt-1">Invitation to our private alumni network upon completion.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img src={logoImg} alt="HerRelaunch LLC" className="h-8 w-auto grayscale opacity-70" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-foreground/60">
                &copy; {new Date().getFullYear()} HerRelaunch LLC. All rights reserved.
              </p>
              <p className="text-xs text-foreground/50 mt-1">
                Free, online confidence workshops for women worldwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
