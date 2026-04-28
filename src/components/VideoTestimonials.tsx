import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import video1 from "@/assets/testimonial-1.mov";
import video2 from "@/assets/testimonial-2.mov";
import video3 from "@/assets/testimonial-3.mov";
import video4 from "@/assets/testimonial-4.mov";

type VideoTestimonial = { videoUrl: string };

const testimonials: VideoTestimonial[] = [
  { videoUrl: video1 },
  { videoUrl: video2 },
  { videoUrl: video3 },
  { videoUrl: video4 },
];

const ACTIVE_W = "47.9075rem";
const ACTIVE_H = "46.875rem";
const SIDE_W = "6.81444rem";
const SIDE_H = "41.57488rem";
const RADIUS = "0.34419rem";

const VideoTestimonials = () => {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Play active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  const total = testimonials.length;
  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

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
          <div className="flex items-center justify-center gap-3 sm:gap-4 px-2">
            {testimonials.map(({ videoUrl }, idx) => {
              const isActive = idx === active;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => setActive(idx)}
                  role="button"
                  aria-label={`Testimonio ${idx + 1}`}
                  className="relative overflow-hidden flex-shrink-0 cursor-pointer transition-all duration-500 ease-out shadow-playful"
                  style={{
                    width: isActive ? ACTIVE_W : SIDE_W,
                    height: isActive ? ACTIVE_H : SIDE_H,
                    maxWidth: isActive ? "min(90vw, 47.9075rem)" : SIDE_W,
                    maxHeight: "70vh",
                    borderRadius: RADIUS,
                  }}
                >
                  <video
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={videoUrl}
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    autoPlay={isActive}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {!isActive && (
                    <div className="absolute inset-0 bg-ink/30 hover:bg-ink/0 transition-colors" />
                  )}
                </div>
              );
            })}
          </div>

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
