import './App.css';
import Element from './components/Element';
import selfAICover from './selfAICover.png';
import neuralArtCover from './neuralArtCover.png';
import zebraFishConnectomeCover from './zebraFishConnectomeCover.png';
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";

import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();

  return (
    <div className="App roboto-regular" style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      color: 'rgba(255, 255, 255, 1)',
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        background: 'rgba(35, 35, 35, 1)',
        paddingLeft: width < 1400 ? 50 : 150,
        paddingRight: width < 1400 ? 50 : 150,
        boxSizing: "border-box",
      }}>
        <h1 className="anta-regular" style={{
          fontSize: 25
        }}>Alin</h1>
        <p style={{
          fontSize: 17
        }}>AI Engineer Portfolio Show Case</p>
      </div>
      <div style={{
        marginTop: 120,
        display: "flex",
        width: "100%",
        paddingLeft: width < 1200 ? 50 : width < 1400 ? 100 : 250,
        paddingRight: width < 1200 ? 50 : width < 1400 ? 100 : 250,
        boxSizing: "border-box",
        flexDirection: "row",
        justifyContent: "center"
      }}>
        <img src="photo.png" alt="photo" style={{
          width: 440,
          alignSelf: "flex-start",
          borderRadius: "50%",
          border: "5px solid rgba(255, 255, 255, 0.15)",
          marginTop: -30
        }} />
        <div style={{
          marginLeft: 50,
          marginTop: 50
        }}>
          <div style={{
            fontSize: 37,
            textAlign: "left",
            maxWidth: 450,
            fontWeight: 600
          }}>
            Hi, I am <span className="anta-regular">Alin</span>. Welcome to my AI Engineer Portfolio!
          </div>
          <div style={{
            fontSize: 16,
            letterSpacing: 1,
            lineHeight: 1.5,
            textAlign: "left",
            maxWidth: 520,
            marginTop: 35,
            fontWeight: 200
          }}>
            With 10 years of experience in software engineer roles, I have been at the
            forefront of human centered technological solutions. Now I'm focused on
            artificial intelligence, specializing in RAG systems, neural interfaces, and AI-driven automation with a focus on low-latency, production-grade deployments.
          </div>
          <div style={{
            marginTop: 50
          }}>
            <div style={{
              width: 150,
              height: 40,
              background: "rgba(255, 255, 255, 1)",
              borderRadius: 5,
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }} onClick={() => {
              window.location.href = "mailto:dumitru.alin25@gmail.com"
            }}>
              <MdOutlineEmail style={{ marginRight: 10, fontSize: 20 }} />
              <span>Contact Me</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        width: "100%",
        marginTop: 65,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center"
        }}>
          <BsArrowDown style={{
            fontSize: 45
          }} />
          <span style={{
            fontSize: 21,
            marginLeft: 10,
            fontWeight: 300
          }}>
            Featured Work
          </span>
        </div>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingRight: width < 1200 ? 50 : 150,
        paddingLeft: width < 1200 ? 50 : 150,
        width: "100%",
        marginTop: 50,
        boxSizing: "border-box",
      }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 50,
            paddingLeft: width < 1400 ? 0 : 100,
            paddingRight: width < 1400 ? 0 : 100,
            boxSizing: "border-box"
          }}
        >
          <Element
            image={selfAICover}
            title={<span>Self AI - Real-time Agent Communication Platform</span>}
            description="Self AI delivers real-time, low-latency interaction with a 3D virtual avatar fine-tuned for psychology. Built with FastAPI and WebRTC, it instantly transcribes spoken input, analyzes emotional tone, and taps into contextual memory via a Vector Database. A custom GPT model then generates psychologically-aware responses, streamed live with voice, expressions, and gestures. The system ensures data privacy, supports message retention, and can generate immersive background visuals."
            skills={['FastAPI', 'WebRTC', 'RAG', 'Fine-Tuning']}
            interactionText="More Info"
            watchMoreLink="https://www.youtube.com/watch?v=3CxksyyeeQg&t=57s"
            githubLink="https://github.com/alinvdu/SelfInterface"
            visitLink="https://selfai.live"

          />
          <Element
            image={neuralArtCover}
            title="Neural Art - Brain to Image Art Creation"
            description="Neural Art enables user to generate art images similar to MidJourney directly from brain data using an EEG headset. Its current integration with Emotiv Epoch X permits the user to register brain data send it to the app, post-process it and then apply an in-house fine-tuned model architecture that will generate the art image. The solution is containerized and can be run locally with ease. The github repository features custom pipeline for noise reduction and data processing using Fourier Transformers and PCA."
            skills={['Neural Signal Processing', 'MatLAB', 'Python', 'Diffusion', 'Fine-Tuning']}
            interactionText="More Info"
            githubLink="https://github.com/alinvdu/neural-art"
            watchMoreLink="https://www.youtube.com/watch?v=8v_EB73m6cQ"
          />
          <Element
            image={zebraFishConnectomeCover}
            title="Zebra Fish Connectome Analysis"
            description="Inspired by the paper 'A cellular-Resolution Atlas of the Larval Zebrafish Brain' and my passion about uncovering how intelligent system work, I've tried to reproduce some of the findings in the paper related to how simple organism brain works. In this project I provide exact anatomical meshes for 3D reproduction and computation of the connectome, perform analysis on the connection between different parts of the brain and draw conclusions about high level brain regions & how they function."
            skills={['Neural Signal Processing', 'MatLAB', 'Python', 'Diffusion', 'Fine-Tuning']}
            githubLink="https://github.com/alinvdu/neuromorphic-connectome-approach"
          />
        </div>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: width < 1200 ? 50 : width < 1400 ? 150 : 250,
        paddingRight: width < 1200 ? 50 : width < 1400 ? 150 : 250,
        boxSizing: "border-box",
        paddingBottom: 50
      }}>
        <div className="anta-regular" style={{
          fontSize: 25
        }}>Alin</div>
        <div>All rights reserved</div>
      </div>
    </div>
  );
}

export default App;
