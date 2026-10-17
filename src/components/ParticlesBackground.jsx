import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const initEngine = async (engine) => {
  await loadSlim(engine);
};

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
          value: ["#34D399", "#E7C873"],
        },
        links: {
          color: "#10B981",
          distance: 120,
          enable: true,
          opacity: 0.35,
          width: 1.5,
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
          value: 0.7,
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

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
      <ParticlesProvider init={initEngine}>
        <Particles
          id="tsparticles"
          options={options}
          className="w-full h-full"
        />
      </ParticlesProvider>
    </div>
  );
};

export default ParticlesBackground;
