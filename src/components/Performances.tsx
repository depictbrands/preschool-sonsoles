import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

type Performance = {
  title: string;
  description: string;
  videoUrl: string;
};

// TODO: replace these with the actual uploaded video files, e.g.:
// import diaDeJuegos from "@/assets/dia-de-juegos.mp4";
// import programaNavidad from "@/assets/programa-navidad.mp4";
const performances: Performance[] = [
  {
    title: "Día de Juegos",
    description:
      "Un día familiar lleno de risas, movimiento y cariño.",
    videoUrl: "/compressed - 2026 Dia de Juegos.mp4",
  },
  {
    title: "Programa de Navidad",
    description:
      "Nuestros niños celebrando la magia de la Navidad sobre el escenario.",
    videoUrl: "/compressed - Programa de Navidad 2025 60s.mp4",
  },
];

const PerformanceCard = ({ item }: { item: Performance }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="group relative rounded-3xl overflow-hidden shadow-playful bg-ink">
      <div
        role="button"
        onClick={togglePlay}
        className="relative aspect-video w-full cursor-pointer"
      >
        {item.videoUrl ? (
          <video
            ref={videoRef}
            src={item.videoUrl}
            muted={muted}
            playsInline
            loop
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-ink/80 text-card/70 text-sm">
            Video pendiente de subir
          </div>
        )}

        {item.videoUrl && (
          <button
            onClick={toggleMute}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            className="absolute bottom-3 left-3 z-10 bg-ink/60 hover:bg-ink/80 text-card rounded-full p-2"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        )}

        {item.videoUrl && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label={playing ? "Pausar" : "Reproducir"}
            className="absolute bottom-3 right-3 z-10 bg-card/95 hover:bg-card text-ink rounded-full p-3 shadow-playful"
          >
            {playing ? <Pause className="h-5 w-5 fill-ink" /> : <Play className="h-5 w-5 fill-ink" />}
          </button>
        )}
      </div>

      <div className="p-6 sm:p-7 bg-card">
        <h3
          className="text-2xl sm:text-3xl text-ink mb-2"
          style={{ fontFamily: "'ChildsPlayground', cursive" }}
        >
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const Performances = () => {
  return (
    <section id="presentaciones" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">
            Presentaciones
          </span>
          <h2
            className="text-4xl sm:text-5xl text-ink mt-3"
            style={{ fontFamily: "'ChildsPlayground', cursive" }}
          >
            Nuestros pequeños en escena
          </h2>
          <p className="text-muted-foreground mt-4">
            Momentos especiales donde nuestros niños brillan, aprenden y se divierten juntos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {performances.map((item) => (
            <PerformanceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performances;
