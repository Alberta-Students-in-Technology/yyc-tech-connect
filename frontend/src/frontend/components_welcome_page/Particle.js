import React from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import { amber, grey } from '@mui/material/colors';
 
function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    //console.log(container);
  };
  return (
    <div className="Particle">
   
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
            background: {
              color: grey[900],
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                resize: true
              },
            },
            particles: {
              color: {
                value: amber[200]
              },
              number: {
                density: {
                  enable: true,
                  area: 700
                },
                limit: 0,
                value: 500,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 2,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              shape: {
                type: 'square',
       
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 2
                },
                value: 1
              }
            }
          }}
      />  
  </div>
  );
}
 
export default Particle;