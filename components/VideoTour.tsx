import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const roomVideos = [
  { src: "/videos/hostel-1.mp4", poster: "/videos/hostel-1-poster.jpg" },
  { src: "/videos/hostel-2.mp4", poster: "/videos/hostel-2-poster.jpg" },
  { src: "/videos/hostel-3.mp4", poster: "/videos/hostel-3-poster.jpg" },
];

export default function VideoTour() {
  return (
    <section id="video-tour" className="bg-navy py-16 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-xl mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Watch before you visit
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory">
            A quick video tour.
          </h2>
        </Reveal>

        <Reveal className="mx-auto mb-10 w-full max-w-[300px] sm:max-w-[340px]">
          <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border-4 border-gold/50 shadow-2xl shadow-black/40">
            <video
              controls
              preload="none"
              poster="/videos/intro-poster.jpg"
              className="h-full w-full object-cover bg-navy-950"
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="mt-3 text-center text-sm text-ivory/60">
            Intro — meet the building
          </p>
        </Reveal>

        <RevealGroup
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          stagger={0.1}
        >
          {roomVideos.map((v, i) => (
            <RevealItem key={v.src} className="mx-auto w-full max-w-[280px]">
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-ivory/15">
                <video
                  controls
                  preload="none"
                  poster={v.poster}
                  className="h-full w-full object-cover bg-navy-950"
                >
                  <source src={v.src} type="video/mp4" />
                </video>
              </div>
              <p className="mt-3 text-center text-sm text-ivory/60">
                Room walkthrough {i + 1}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
