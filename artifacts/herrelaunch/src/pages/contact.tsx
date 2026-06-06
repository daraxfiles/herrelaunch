import { motion } from "framer-motion";
import { Mail, Globe, MapPin } from "lucide-react";
import { PageTransition, fadeInUp, staggerContainer } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "herrelaunchllc@gmail.com",
    href: "mailto:herrelaunchllc@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "herrelaunch.org",
    href: "https://herrelaunch.org",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Global online program",
    href: null,
  },
];

const CONTACT_FORM_URL = "https://forms.gle/8uP4F3G2VHRSt4PL6";

export default function Contact() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">

        {/* Hero */}
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
                Contact Us
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-6 tracking-tight text-primary-foreground">
                We would love to hear from you.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                Whether you have a question about our programs, want to partner with us, or just want to say hello, reach out. We read every message.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info + CTA */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto items-start">

              {/* Contact Details */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-foreground mb-10 leading-tight">
                  Get in touch
                </motion.h2>

                <div className="space-y-6">
                  {contactDetails.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-5 rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground font-medium hover:text-primary transition-colors text-lg"
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium text-lg">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeInUp} className="mt-10 rounded-2xl bg-accent/30 border border-accent p-6">
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    HerRelaunch LLC is a fully online, global program. We serve women in every time zone and our workshops are designed to be accessible no matter where you are in the world.
                  </p>
                </motion.div>
              </motion.div>

              {/* Send Message CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-border/50 bg-card p-8 md:p-10 flex flex-col justify-center items-center text-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-3">Send a Message</h3>
                  <p className="text-foreground/60 leading-relaxed">
                    Fill out our quick contact form and we will get back to you as soon as possible.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-base transition-all"
                >
                  <a href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Open Contact Form
                  </a>
                </Button>
              </motion.div>

            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
