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
    background: { color: { value: "#08080b" } },
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
      number: { value: 160, density: { enable: true, area: 800 } },
      color: { value: "#FF0000" },
      shape: { type: "circle" },
      opacity: { value: 0.7 },
      size: { value: { min: 1, max: 4 } },
      links: {
        enable: true,
        distance: 250,
        color: "#FF2400",
        opacity: 0.6,
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
