import React, {useCallback} from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";


function ParticleBackground(props) {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{

                fpsLimit: 60,
                particles: {
                    fullScreen: {
                        enable: false,
                        zIndex: -1
                    },
                    color: {
                        value: "#94bdce",
                    },
                    move: {
                        directions: "bottom",
                        enable: true,
                        random: false,
                        speed: { min: -1, max: 1},
                        straight: false,
                        gravity: {
                            acceleration: 60,
                            enable: true,
                            inverse: false,
                            maxSpeed: 2
                          },
                    },
                    number: {
                        value: 40,
                    },
                    opacity: {
                        value: {min: .1, max: .6},
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
      )
}

export default ParticleBackground;