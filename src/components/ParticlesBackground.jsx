import { useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#00F2FE",
        },
        links: {
          color: "#00F2FE",
          distance: 120,
          enable: true,
          opacity: 0.6,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticlesBackground;
