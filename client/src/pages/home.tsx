import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroBackground from "@assets/generated_images/luxury_black_gold_abstract_background.png";
import logoImage from "@assets/Dacosta-Picsart-BackgroundRemover_1768233264029.png";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Vision", href: "#vision" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-gold/10 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 lg:px-20">
        <div className="flex items-center justify-between h-28">
          <a href="#" data-testid="logo-link" className="transition-transform duration-400 hover:scale-105">
            <img src={logoImage} alt="Dacosta" className="h-20 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.3em] uppercase text-cream/70 hover:text-gold transition-all duration-400 font-light"
                data-testid={`nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-cream transition-all duration-400 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-cream transition-all duration-400 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-cream transition-all duration-400 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-8 border-t border-gold/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-5 text-xs tracking-[0.3em] uppercase text-cream/70 hover:text-gold transition-all duration-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroBackground})` }}
        animate={{ scale: [1.1, 1.15, 1.1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/60 to-[#0B0B0B]" />
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.06) 0%, transparent 50%)",
            "radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.06) 0%, transparent 50%)",
            "radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.06) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <motion.img 
            src={logoImage} 
            alt="Dacosta" 
            className="h-48 md:h-60 lg:h-72 w-auto mx-auto"
            animate={{ 
              filter: ["drop-shadow(0 0 30px rgba(212, 175, 55, 0))", "drop-shadow(0 0 60px rgba(212, 175, 55, 0.25))", "drop-shadow(0 0 30px rgba(212, 175, 55, 0))"]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-40 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-16"
        />

        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-cream/80 text-base md:text-xl tracking-[0.4em] uppercase font-light flex flex-wrap justify-center gap-x-4"
          >
            {"We make your vision reality".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 1.6 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-cream/30 text-xs tracking-[0.4em] uppercase font-light">Scroll</span>
        <motion.div 
          className="w-px h-16 bg-gradient-to-b from-gold/40 to-transparent"
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="py-52 bg-[#0B0B0B] relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-5xl mx-auto px-10 lg:px-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <motion.span 
            className="inline-block text-gold text-xs tracking-[0.5em] uppercase mb-12 font-light border border-gold/30 px-8 py-4 ghost-button cursor-default"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            Established 2026
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-cream/40 text-xs tracking-[0.5em] uppercase font-light">Our Vision</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-5xl md:text-6xl lg:text-8xl text-cream font-normal leading-[1.1] mb-14 overflow-hidden"
          data-testid="vision-title"
        >
          {"Where vision".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br />
          {"becomes reality".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block italic text-gold"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-px bg-gold mx-auto mb-14"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-cream/60 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
        >
          {"We transform ambitious ideas into extraordinary realities.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: "easeOut" }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
          <br className="hidden md:block" />
          {"Excellence in strategy, design, and execution.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 + i * 0.1, ease: "easeOut" }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}

const testimonials = [
  {
    id: 1,
    quote: "Dacosta transformed our vision into something beyond our imagination. Their attention to detail and commitment to excellence is unmatched.",
    author: "Alexandra Chen",
    title: "CEO, Meridian Capital",
  },
  {
    id: 2,
    quote: "Working with Dacosta was an extraordinary experience. They understood our brand and delivered results that exceeded all expectations.",
    author: "James Whitmore",
    title: "Founder, Whitmore & Associates",
  },
  {
    id: 3,
    quote: "The level of sophistication and professionalism Dacosta brings to every project is truly remarkable. A partnership we value deeply.",
    author: "Victoria Laurent",
    title: "Creative Director, Maison Laurent",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-52 bg-[#0B0B0B] relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)" }}
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-6xl mx-auto px-10 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-gold text-xs tracking-[0.5em] uppercase font-light">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream mt-8 leading-[1.15] font-normal overflow-hidden">
            {"Client Voices".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <motion.div 
            className="w-20 h-px bg-gold mx-auto mt-14"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="glass p-10 h-full flex flex-col transition-all duration-400 hover:border-gold/30">
                <div className="text-gold text-5xl font-serif mb-6 opacity-40">"</div>
                <p className="text-cream/70 text-base leading-relaxed font-light tracking-wide flex-grow mb-10">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gold/10 pt-8">
                  <p className="text-cream font-medium tracking-wide">{testimonial.author}</p>
                  <p className="text-cream/40 text-sm tracking-wider mt-1 font-light">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-52 bg-gradient-to-b from-[#0B0B0B] via-[#0F0F0F] to-[#0B0B0B] relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)" }}
        animate={{ y: [0, 40, 0], x: [0, 25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)" }}
        animate={{ y: [0, -40, 0], x: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-5xl mx-auto px-10 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <span className="text-gold text-xs tracking-[0.5em] uppercase font-light">Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream mt-8 leading-[1.15] font-normal overflow-hidden">
            {"Our Projects".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <motion.div 
            className="w-20 h-px bg-gold mx-auto my-14"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="text-cream/50 max-w-2xl mx-auto text-lg leading-relaxed font-light tracking-wide">
            A curated selection of our most distinguished work, each project a reflection 
            of our commitment to excellence and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <footer id="contact" className="py-52 bg-gradient-to-b from-[#0B0B0B] to-black relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)" }}
        animate={{ x: [-60, 60, -60], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)" }}
        animate={{ x: [60, -60, 60], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-6xl mx-auto px-10 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold text-xs tracking-[0.5em] uppercase font-light">Get in Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mt-8 mb-12 leading-[1.15] font-normal overflow-hidden">
              {"Contact Us".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
            <div className="w-16 h-px bg-gold mb-12" />
            <p className="text-cream/50 leading-relaxed text-lg font-light tracking-wide max-w-md">
              Ready to transform your vision into reality? We'd love to hear from you. 
              Reach out to discuss your next project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-10" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-cream/40 text-xs tracking-[0.25em] uppercase mb-5 font-light">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0B0B0B]/50 border-gold/20 text-cream placeholder:text-cream/20 focus:border-gold h-16 rounded-none transition-all duration-400 glass"
                    placeholder="Your name"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="block text-cream/40 text-xs tracking-[0.25em] uppercase mb-5 font-light">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#0B0B0B]/50 border-gold/20 text-cream placeholder:text-cream/20 focus:border-gold h-16 rounded-none transition-all duration-400 glass"
                    placeholder="your@email.com"
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-cream/40 text-xs tracking-[0.25em] uppercase mb-5 font-light">Phone</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#0B0B0B]/50 border-gold/20 text-cream placeholder:text-cream/20 focus:border-gold h-16 rounded-none transition-all duration-400 glass"
                  placeholder="+1 (234) 567-890"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <label className="block text-cream/40 text-xs tracking-[0.25em] uppercase mb-5 font-light">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#0B0B0B]/50 border-gold/20 text-cream placeholder:text-cream/20 focus:border-gold min-h-[180px] resize-none rounded-none transition-all duration-400 glass"
                  placeholder="Tell us about your project..."
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-[#0B0B0B] py-8 text-xs tracking-[0.25em] uppercase font-medium group rounded-none transition-all duration-400"
                data-testid="button-send-message"
              >
                Send Message
                <Send className="ml-4 h-4 w-4 group-hover:translate-x-2 transition-transform duration-400" />
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="mt-40 pt-16 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <img src={logoImage} alt="Dacosta" className="h-14 w-auto opacity-80" />
          <p className="text-cream/30 text-sm tracking-widest font-light">
            © {new Date().getFullYear()} Dacosta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function DevelopmentBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0B0B]/98 backdrop-blur-2xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-lg mx-10 text-center"
      >
        <div className="glass p-20 shadow-2xl">
          <img src={logoImage} alt="Dacosta" className="h-32 w-auto mx-auto mb-14" />
          <div className="w-16 h-px bg-gold mx-auto mb-14" />
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-8 font-normal tracking-wide">
            Under Development
          </h2>
          <p className="text-cream/50 mb-14 leading-relaxed font-light tracking-wide">
            This website is currently under development. We're crafting an exceptional experience for you.
          </p>
          <Button
            onClick={() => setIsVisible(false)}
            className="bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-[#0B0B0B] px-14 py-7 text-xs tracking-[0.25em] uppercase font-medium rounded-none transition-all duration-400"
            data-testid="button-continue"
          >
            Enter Site
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <DevelopmentBanner />
      <Navigation />
      <Hero />
      <Vision />
      <Testimonials />
      <Projects />
      <Contact />
    </div>
  );
}
