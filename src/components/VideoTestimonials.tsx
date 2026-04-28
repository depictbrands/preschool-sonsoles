import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

type VideoTestimonial = {
  name: string;
  role: string;
  videoUrl: string;
  poster: string;
};

const testimonials: VideoTestimonial[] = [
  {
    name: "María",
    role: "Mamá de Lucas",
    videoUrl: "https://cdn.coverr.co/videos/coverr-mother-and-daughter-laughing-2362/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1543342384-1f1350e27861?w=800&q=80",
  },
  {
    name: "Carlos",
    role: "Papá de Sofía",
    videoUrl: "https://cdn.coverr.co/videos/coverr-father-and-son-playing-2649/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
  },
  {
    name: "Andrea",
    role: "Mamá de Mateo",
    videoUrl: "https://cdn.coverr.co/videos/coverr-mom-and-baby-playing-1572/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1581952976147-5a2d15560349?w=800&q=80",
  },
  {
    name: "Roberto",
    role: "Papá de Isabella",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-father-with-his-son-7251/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
  },
  {
    name: "Laura",
    role: "Mamá de Daniel",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-mother-and-her-daughter-7252/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&q=80",
  },
  {
    name: "Patricia",
    role: "Mamá de Valeria",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-young-girl-running-7250/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  },
  {
    name: "Javier",
    role: "Papá de Andrés",
    videoUrl: "https://cdn.coverr.co/videos/coverr-father-and-daughter-7253/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&q=80",
  },
];

const VideoTestimonials = () => {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [active]);

  const total = testimonials.length;
  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  // Build the visible window: 3 left + center + 3 right
  const sideCount = 3;
  const sides = Array.from({ length: sideCount * 2 + 1 }, (_, i) => {
    const offset = i - sideCount;
    const idx = (active + offset + total) % total;
    return { idx, offset, ...testimonials[idx] };
  });

  return (
    <section id="testimonios-video" className="py-24 bg-muted relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Testimonios en video</span>
          <h2 className="text-4xl sm:text-5xl text-ink mt-3">Escucha a nuestras familias.</h2>
          <p className="text-muted-foreground mt-4">
            Padres y madres comparten su experiencia con Sonsoles.
          </p>
        </div>

        <div className="relative">
          {/* Carousel row */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2">
            {sides.map(({ idx, offset, name, role, poster, videoUrl }) => {
              const isCenter = offset === 0;
              const distance = Math.abs(offset);
              const sideWidth = "w-10 sm:w-14 md:w-16";
              const fade = distance === 1 ? "opacity-95" : distance === 2 ? "opacity-75" : "opacity-50";

              if (isCenter) {
                return (
                  <div
                    key={idx}
                    className="relative rounded-2xl overflow-hidden shadow-playful aspect-[4/5] w-[280px] sm:w-[360px] md:w-[460px] lg:w-[520px] flex-shrink-0 transition-all duration-500"
                  >
                    <video
                      ref={videoRef}
                      key={videoUrl}
                      src={videoUrl}
                      poster={poster}
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-card">
                      <div className="font-display font-bold text-xl sm:text-2xl tracking-wide uppercase">
                        {name}
                      </div>
                      <div className="text-xs sm:text-sm opacity-90 uppercase tracking-widest mt-1">
                        {role}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={`${idx}-${offset}`}
                  onClick={() => setActive(idx)}
                  aria-label={`Ver testimonio de ${name}`}
                  className={`relative rounded-2xl overflow-hidden ${sideWidth} aspect-[4/5] flex-shrink-0 transition-all duration-500 hover:opacity-100 ${fade} hover:scale-105 group`}
                >
                  <img
                    src={poster}
                    alt={name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-card font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {name}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 bg-card/90 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-3 w-3 text-ink fill-ink" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="bg-card hover:bg-primary hover:text-primary-foreground text-ink rounded-full p-3 shadow-soft transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-primary" : "w-2 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="bg-card hover:bg-primary hover:text-primary-foreground text-ink rounded-full p-3 shadow-soft transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
