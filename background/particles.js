particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#f70000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: {
      value: 0.57,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 160,
      color: "#fc0000",
      opacity: 0.45,
      width: 1.6,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  retina_detect: true,
});

// Adicionar suporte para eventos de toque
const particlesCanvas = document.querySelector("#particles-js canvas");

if (particlesCanvas) {
  particlesCanvas.addEventListener("touchmove", function (e) {
    const touch = e.touches[0];
    const rect = particlesCanvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    window.pJSDom[0].pJS.interactivity.mouse.pos_x = x;
    window.pJSDom[0].pJS.interactivity.mouse.pos_y = y;
    window.pJSDom[0].pJS.interactivity.status = "mousemove";
  });

  particlesCanvas.addEventListener("touchend", function () {
    window.pJSDom[0].pJS.interactivity.mouse.pos_x = null;
    window.pJSDom[0].pJS.interactivity.mouse.pos_y = null;
    window.pJSDom[0].pJS.interactivity.status = "mouseleave";
  });
}
