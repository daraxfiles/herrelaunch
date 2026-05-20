import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Mic, Heart, Building2, ChevronRight } from "lucide-react";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const options = [
  {
    icon: Users,
    title: "Join a Cohort",
    description: "Apply for the next free workshop cycle and begin rebuilding your confidence alongside a supportive community of women.",
    cta: "Apply Now",
    color: "secondary",
  },
  {
    icon: Mic,
    title: "Volunteer as a Speaker",
    description: "Share your expertise on confidence, leadership, or self-advocacy. We welcome women who have walked this path and want to light the way for others.",
    cta: "Express Interest",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Support the Work",
    description: "Ask about seed funding or in-kind support. Your partnership helps us keep every program free and reach more women worldwide.",
    cta: "Inquire About Support",
    color: "primary",
  },
  {
    icon: Building2,
    title: "Partner as an Organization",
    description: "Request a workshop for your members or audience. We partner with organizations who believe in empowering women through education.",
    cta: "Request a Workshop",
    color: "secondary",
  },
];

export default function GetInvolved() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Received",
        description: "Thank you for reaching out. We will be in touch with you soon.",
      });
      (e.target as HTMLFormElement).reset();
      setSelected("");
    }, 1500);
  };

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
                Get Involved
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-6 tracking-tight text-primary-foreground">
                There is a place for you here.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                Whether you are a woman ready to grow, a leader ready to give back, or an organization ready to invest in women — you belong in this community.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Options Grid */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-secondary font-semibold tracking-widest uppercase text-xs">
                Ways to Participate
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mt-4 max-w-xl mx-auto leading-tight">
                Choose how you want to show up
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {options.map((opt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl border border-border/50 bg-card p-8 md:p-10 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    opt.color === "secondary" ? "bg-secondary/10 group-hover:bg-secondary/20" : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <opt.icon className={`h-6 w-6 ${opt.color === "secondary" ? "text-secondary" : "text-primary"}`} />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-3">{opt.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{opt.description}</p>
                  <button
                    onClick={() => {
                      setSelected(opt.title);
                      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                      opt.color === "secondary" ? "text-secondary hover:text-secondary/80" : "text-primary hover:text-primary/80"
                    }`}
                  >
                    {opt.cta} <ChevronRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-24 md:py-32 bg-accent/20">
          <div className="container mx-auto px-6 md:px-12 max-w-2xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-secondary font-semibold tracking-widest uppercase text-xs">
                Reach Out
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-4 leading-tight">
                Send us a message
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-foreground/70 text-lg mb-10 leading-relaxed">
                Tell us a little about yourself and how you want to get involved. We will be in touch.
              </motion.p>

              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6 bg-card rounded-3xl border border-border/50 p-8 md:p-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required placeholder="Your name" className="bg-background border-border/50 focus-visible:ring-secondary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required placeholder="you@example.com" className="bg-background border-border/50 focus-visible:ring-secondary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">How would you like to get involved?</Label>
                  <select
                    id="interest"
                    value={selected}
                    onChange={e => setSelected(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  >
                    <option value="">Select an option</option>
                    {options.map(o => <option key={o.title} value={o.title}>{o.title}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us more</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Share a little about your background and what draws you to HerRelaunch..."
                    className="flex w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-base transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.form>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
