import { motion } from "framer-motion";
import { Users, Mic, Heart, Building2, ChevronRight } from "lucide-react";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const CONTACT_FORM_URL = "https://forms.gle/8uP4F3G2VHRSt4PL6";

const options = [
  {
    icon: Users,
    title: "Join a Cohort",
    description: "Apply for the next free workshop cycle and begin rebuilding your confidence alongside a supportive community of women.",
    cta: "Apply Now",
    color: "secondary",
    href: CONTACT_FORM_URL,
  },
  {
    icon: Mic,
    title: "Volunteer as a Speaker",
    description: "Share your expertise on confidence, leadership, or self-advocacy. We welcome women who have walked this path and want to light the way for others.",
    cta: "Express Interest",
    color: "primary",
    href: "mailto:herrelaunchllc@gmail.com",
  },
  {
    icon: Heart,
    title: "Support the Work",
    description: "Ask about seed funding or in-kind support. Your partnership helps us keep every program free and reach more women worldwide.",
    cta: "Inquire About Support",
    color: "primary",
    href: "mailto:herrelaunchllc@gmail.com",
  },
  {
    icon: Building2,
    title: "Partner as an Organization",
    description: "Request a workshop for your members or audience. We partner with organizations who believe in empowering women through education.",
    cta: "Request a Workshop",
    color: "secondary",
    href: CONTACT_FORM_URL,
  },
];

export default function GetInvolved() {
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
                Whether you are a woman ready to grow, a leader ready to give back, or an organization ready to invest in women, you belong in this community.
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
                  <a
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                      opt.color === "secondary" ? "text-secondary hover:text-secondary/80" : "text-primary hover:text-primary/80"
                    }`}
                  >
                    {opt.cta} <ChevronRight className="h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-accent/20">
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

              <motion.div variants={fadeInUp}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-10 py-6 text-base transition-all"
                >
                  <a href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Open Contact Form
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
