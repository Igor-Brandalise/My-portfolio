import React, { useEffect, useState } from "react";
import { Particles } from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = {
    background: { color: { value: "#08080b" } }, // fundo escuro
    fpsLimit: 600,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }, // interação com mouse
        resize: true,
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
        random: false, // velocidade fixa para parecer suave
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
