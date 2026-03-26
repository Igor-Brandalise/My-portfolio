import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = {
    background: { color: { value: "#1A1A1A" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: { enable: true }, // ✅ corrigido aqui!
      },
      modes: {
        repulse: { distance: 150, duration: 0.4 },
      },
    },
    particles: {
      number: { value: 130, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 0 },
      links: {
        enable: true,
        distance: 250,
        color: "#ffffff",
        opacity: 0.5,
        width: 0.7,
      },
      move: {
        enable: true,
        speed: 2,
        random: false,
        straight: false,
        direction: "none",
        outModes: { default: "bounce" },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}
