import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
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

const ACTIVE_W = "720px";
const ACTIVE_H = "1280px";
const SIDE_W = "6.81444rem";
const SIDE_H = "41.57488rem";
const RADIUS = "0.34419rem";

const VideoTestimonials = () => {
  const [active, setActive] = useState(0);
  const [unmutedIdx, setUnmutedIdx] = useState<number | null>(null);
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
    setUnmutedIdx(null);
  }, [active]);

  const toggleSound = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRefs.current[idx];
    if (!v) return;
    if (unmutedIdx === idx) {
      v.muted = true;
      setUnmutedIdx(null);
    } else {
      // Mute all others
      videoRefs.current.forEach((other, i) => {
        if (other && i !== idx) other.muted = true;
      });
      v.muted = false;
      v.play().catch(() => {});
      setUnmutedIdx(idx);
      setActive(idx);
    }
  };

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
                    maxWidth: isActive ? "min(90vw, 720px)" : SIDE_W,
                    maxHeight: "80vh",
                    aspectRatio: isActive ? "720 / 1280" : undefined,
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
                  <button
                    onClick={(e) => toggleSound(idx, e)}
                    aria-label={unmutedIdx === idx ? "Silenciar" : "Activar sonido"}
                    className="absolute bottom-3 right-3 z-10 bg-ink/60 hover:bg-ink/80 text-card rounded-full p-2 backdrop-blur-sm transition-colors"
                  >
                    {unmutedIdx === idx ? (
                      <Volume2 className="h-4 w-4" />
                    ) : (
                      <VolumeX className="h-4 w-4" />
                    )}
                  </button>
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
