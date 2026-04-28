import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Phone, Star, Heart, Sparkles, Apple, Shield, BookOpen, Music, Palette, Users } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import logo from "@/assets/logo.gif";
import VideoTestimonials from "@/components/VideoTestimonials";
import heroKids from "@/assets/hero-kids.jpg";

import kidsDrawing from "@/assets/kids-drawing.gif";
import duckAnimation from "@/assets/duck-animation.gif";
import playground from "@/assets/playground.jpg";
import contactKids from "@/assets/contact-kids.jpg";
import facility1 from "@/assets/facility-1.jpg";
import facility2 from "@/assets/facility-2.jpg";
import sonsolesBuilding from "@/assets/sonsoles-building.jpg";
import { useEffect, useState } from "react";

const Index = () => {
  const facilityImages = [facility1, facility2];
  const [facilityIndex, setFacilityIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setFacilityIndex((i) => (i + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [facilityImages.length]);
  return (
    <div className="min-h-screen bg-background">
      {/* Announcement bar */}
      <div className="bg-accent text-accent-foreground text-center text-sm font-bold py-2.5 px-4">
        <a
          href="https://wa.me/17879935623"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Comunícate por WhatsApp al 787-993-5623"
          className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          MATRÍCULA ABIERTA — Comunícate por{"\n"}
          <WhatsAppIcon className="h-5 w-5" />
          <span className="underline">787-993-5623</span>
        </a>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Preescolar Sonsoles escudo" className="h-12 w-12" />
            <span className="font-display text-xl font-bold text-ink hidden sm:block" style={{ fontFamily: 'Fraunces, serif' }}>Preescolar Sonsoles</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-ink">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre Nosotros</a>
            <a href="https://calendly.com/preescolarsonsoles" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Metodología</a>
            <a href="#facilidades" className="hover:text-primary transition-colors">Facilidades</a>
            <a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="text-ink hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="text-ink hover:text-secondary"><Facebook className="h-5 w-5" /></a>
            <Button asChild variant="hero" size="lg" className="hidden sm:inline-flex">
              <a href="#contacto">Matricúlate</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden isolate">
        <video
          src="/website-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/30 -z-10" />
        <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#413D45] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Sparkles className="h-4 w-4 text-primary" /> Edades 2 a 4 años · Puerto Rico
            </div>
            <h1 className="text-5xl sm:text-6xl leading-[1.05] text-white mb-6 lg:text-6xl">
              Sembrando <span className="text-primary-foreground">valores</span>,<br />
              cultivando <span className="text-primary-foreground">grandeza</span>.
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl"><a href="#contacto">Agenda un tour</a></Button>
              <Button asChild variant="outlineWarm" size="xl"><a href="https://calendly.com/preescolarsonsoles" target="_blank" rel="noopener noreferrer">Agenda una consulta</a></Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent rounded-full animate-float-slow opacity-80" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-leaf/30 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }} />
            <img
              src={heroKids}
              alt="Niños felices en Preescolar Sonsoles"
              width={1024}
              height={1024}
              className="relative rounded-full shadow-playful w-full max-w-[520px] mx-auto aspect-square object-cover border-8 border-card"
            />
            <div className="absolute bottom-4 left-0 sm:left-4 bg-card rounded-2xl shadow-soft px-5 py-4 flex items-center gap-3 animate-wiggle">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
              </div>
              <div className="text-sm">
                <div className="font-bold text-ink">5.0 en Google</div>
                <div className="text-muted-foreground text-xs">Familias felices</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-20 -mb-1 overflow-hidden">
          <svg
            className="absolute inset-y-0 left-0 h-full w-[200%] animate-wave-slide text-primary"
            viewBox="0 0 2400 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M0,40 C150,0 300,80 600,40 C900,0 1050,80 1200,40 C1350,0 1500,80 1800,40 C2100,0 2250,80 2400,40 L2400,80 L0,80 Z"
            />
          </svg>
        </div>
      </section>

      {/* INTRO */}
      <section id="sobre" className="bg-muted py-20">
        <div className="container text-center max-w-3xl mb-14">
          <h2 className="text-4xl sm:text-5xl text-ink mb-5">Sembrando excelencia en el corazón de la familia puertorriqueña.</h2>
          <p className="text-lg text-muted-foreground font-bold">Un programa diseñado para edades 2 a 4 años, donde cada niño descubre su mejor versión rodeado de amor y aprendizaje significativo.</p>
        </div>

        <div className="container grid md:grid-cols-3 gap-6 mb-16">
          {[
            { color: 'bg-accent text-accent-foreground', text: 'Educación personalizada para los líderes del mañana.', icon: BookOpen },
            { color: 'bg-secondary text-secondary-foreground', text: 'Un entorno seguro, saludable y lleno de alegría y cariño.', icon: Heart },
            { color: 'bg-primary text-primary-foreground', text: 'Ofrecemos una dieta balanceada cada día.', icon: Apple },
          ].map((item, i) => (
            <div key={i} className={`${item.color} rounded-3xl p-8 shadow-soft hover:-translate-y-1 transition-transform`}>
              <item.icon className="h-10 w-10 mb-4 opacity-90" />
              <p className="text-2xl font-bold leading-tight font-sans">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="container relative">
          <div className="w-full rounded-3xl shadow-soft overflow-hidden" style={{ aspectRatio: "2320 / 1561" }}>
            <img
              src={kidsDrawing}
              alt="Dibujo infantil de una familia con la bandera de Puerto Rico"
              loading="lazy"
              width={2320}
              height={1561}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-7">
            <Button asChild variant="sun" size="xl"><a href="https://calendly.com/preescolarsonsoles" target="_blank" rel="noopener noreferrer">Conoce nuestro programa</a></Button>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section id="metodologia" className="relative w-full overflow-hidden" style={{ aspectRatio: "2241 / 1600" }}>
        <img
          src={duckAnimation}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 container py-24">
          <div className="max-w-2xl mx-auto mb-14 text-center">
            <span className="font-bold uppercase tracking-wider text-sm bg-secondary text-primary-foreground mx-[10px] my-[10px] px-[10px] py-[10px] rounded-sm">Metodología</span>
            <h2 className="text-4xl sm:text-5xl text-ink mt-3">Aprender jugando, crecer con propósito.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Music, title: 'Música & Movimiento', desc: 'Violín, ritmo y expresión corporal desde temprana edad.', color: 'text-primary', bg: 'bg-primary/10' },
              { icon: Palette, title: 'Arte & Creatividad', desc: 'Talleres que despiertan la imaginación y la sensibilidad.', color: 'text-secondary', bg: 'bg-secondary/10' },
              { icon: BookOpen, title: 'Lectoescritura', desc: 'Bases sólidas para leer, escribir y comunicarse con confianza.', color: 'text-leaf', bg: 'bg-leaf/10' },
              { icon: Users, title: 'Valores & Familia', desc: 'Cultivamos respeto, empatía y orgullo por nuestras raíces.', color: 'text-azure', bg: 'bg-azure/10' },
            ].map((f, i) => (
              <Card key={i} className="p-7 rounded-3xl border-2 border-border hover:border-primary/40 hover:-translate-y-1 transition-all">
                <div className={`${f.bg} ${f.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5`}>
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FACILIDADES */}
      <section id="facilidades" className="bg-secondary text-secondary-foreground py-24 relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-bold uppercase tracking-wider text-sm opacity-80">Facilidades</span>
            <h2 className="text-4xl sm:text-5xl mt-3 mb-6">Un espacio diseñado para soñar en grande.</h2>
            <p className="text-lg opacity-90 mb-8">Salones luminosos, áreas de juego seguras y rincones pensados para que cada niño explore, aprenda y se sienta como en casa.</p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {['Salones climatizados', 'Patio de juegos', 'Cocina propia', 'Cámaras de seguridad', 'Personal certificado', 'Áreas desinfectadas diarimente por equipo de limpieza'].map((f) => (
                <li key={f} className="flex items-center gap-3 text-base">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button asChild variant="sun" size="xl"><a href="#contacto">Visítanos</a></Button>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-square rounded-[2rem] shadow-playful overflow-hidden">
              {facilityImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Niños jugando en el patio de Sonsoles"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === facilityIndex ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
            <div className="absolute -top-5 -right-5 bg-accent text-accent-foreground rounded-2xl p-4 shadow-soft animate-float-slow">
              <div className="text-3xl font-black" style={{ fontFamily: 'Fraunces, serif' }}>+15</div>
              <div className="text-xs font-bold">Años educando</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIOS */}
      <VideoTestimonials />

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-24 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-bold uppercase tracking-wider text-sm bg-secondary text-primary-foreground mx-[10px] my-[10px] px-[10px] py-[10px] rounded-sm">Testimonios</span>
            <h2 className="text-4xl sm:text-5xl text-ink mt-3">Deja que nuestros padres te cuenten.</h2>
            <p className="text-muted-foreground mt-4">Por qué las familias eligen Sonsoles.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Myriam Mercader', text: 'No hay palabras para agradecer al preescolar Sonsoles y a todo su personal. Mis hijos crecieron en un ambiente lleno de amor y aprendizaje.' },
              { name: 'Mishel García', text: 'Nos encanta Sonsoles. Mi hija ha sido muy feliz allí, especialmente con la maestra Bea, que es maravillosa con los niños. ¡La recomendamos mucho!' },
              { name: 'Mariana Pereira', text: 'Para mí, Sonsoles es el mejor preescolar de Puerto Rico. Es una escuela verdaderamente excepcional donde cada detalle demuestra amor y profesionalismo.' },
            ].map((t, i) => (
              <Card key={i} className="p-7 rounded-3xl bg-card shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-ink">{t.name}</div>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />)}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">"{t.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-accent py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl text-ink mb-5">¿Listo para matricular a tu hijo(a)?</h2>
            <p className="text-ink/80 text-lg mb-8">Envíanos un breve mensaje sobre lo que buscas y te orientaremos con los próximos pasos dentro de un día laborable.</p>
            <Card className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-playful border-0">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('¡Gracias! Te contactaremos pronto.'); }}>
                <div>
                  <Label htmlFor="phone" className="text-primary-foreground font-semibold">Número de teléfono *</Label>
                  <Input id="phone" type="tel" required className="mt-2 bg-card text-foreground border-0 h-12 rounded-xl" placeholder="787-000-0000" />
                </div>
                <div>
                  <Label htmlFor="name" className="text-primary-foreground font-semibold">Nombre y Apellido</Label>
                  <Input id="name" className="mt-2 bg-card text-foreground border-0 h-12 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-primary-foreground font-semibold">Email *</Label>
                  <Input id="email" type="email" required className="mt-2 bg-card text-foreground border-0 h-12 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="msg" className="text-primary-foreground font-semibold">¿Cuándo es el mejor momento para llamarte?</Label>
                  <Textarea id="msg" rows={3} className="mt-2 bg-card text-foreground border-0 rounded-xl resize-none" />
                </div>
                <Button type="submit" variant="hero" size="xl" className="w-full">Contáctame</Button>
              </form>
            </Card>
          </div>
          <div className="hidden lg:block relative">
            <img src={contactKids} alt="Niños de Sonsoles en el patio" loading="lazy" width={1280} height={1280} className="rounded-[2rem] shadow-playful w-full object-cover aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="ubicacion" className="bg-muted py-20">
        <div className="container text-center max-w-3xl mb-10">
          <span className="font-bold uppercase tracking-wider text-sm bg-secondary text-primary-foreground mx-[10px] my-[10px] px-[10px] py-[10px] rounded-sm">Ubicación</span>
          <h2 className="text-4xl sm:text-5xl text-ink mt-5 mb-4">Visítanos en Puerto Rico</h2>
          <p className="text-lg text-muted-foreground font-bold">Encuéntranos fácilmente en el mapa.</p>
        </div>
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-playful border-8 border-card aspect-[16/9]">
            <img
              src={sonsolesBuilding}
              alt="Edificio Preescolar Sonsoles"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-playful border-8 border-card aspect-[16/9]">
            <iframe
              title="Ubicación Preescolar Sonsoles"
              src="https://www.google.com/maps?q=C.+Madre+Teresa+Jornet,+San+Juan,+00926,+Puerto+Rico&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-ink-foreground py-12">
        <div className="container grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="" className="h-12 w-12" />
              <span className="font-bold text-lg" style={{ fontFamily: 'Fraunces, serif' }}>Preescolar Sonsoles</span>
            </div>
            <p className="text-sm opacity-70">Sembrando valores, cultivando grandeza desde Puerto Rico.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-base">Contacto</h4>
            <p className="text-sm opacity-80 flex items-center gap-2"><Phone className="h-4 w-4" /> 787-993-5623</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-base">Síguenos</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="bg-card/10 hover:bg-primary p-2.5 rounded-full transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="bg-card/10 hover:bg-secondary p-2.5 rounded-full transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="container mt-10 pt-6 border-t border-white/10 text-xs opacity-60 text-center">
          © {new Date().getFullYear()} Preescolar Sonsoles. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;
