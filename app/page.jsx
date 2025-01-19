"use client";

import { useEffect, useRef } from "react";
import Head from "next/head";

export default function Home() {
  const canvasRef = useRef(null); // Reference for the canvas element

  useEffect(() => {
    // This function will initialize the Three.js scene after the script is loaded
    const loadThreeJS = () => {
      if (typeof window !== "undefined" && window.THREE) {
        const THREE = window.THREE;

        // Create the scene, camera, and renderer for the Three.js background
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Create the stars (a simple point cloud with particles)
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 10000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 2000;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.7 });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Set the camera position
        camera.position.z = 1;

        // Add mouse interaction
        const mouse = { x: 0, y: 0 };
        window.addEventListener('mousemove', (event) => {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // Animate the scene
        const animate = function () {
          requestAnimationFrame(animate);

          // Rotate the scene based on mouse position
          stars.rotation.x += 0.0005;
          stars.rotation.y += 0.0005;

          camera.position.x += (mouse.x - camera.position.x) * 0.05;
          camera.position.y += (-mouse.y - camera.position.y) * 0.05;
          camera.lookAt(scene.position);

          renderer.render(scene, camera);
        };

        animate();

        // Handle window resizing
        window.addEventListener('resize', () => {
          renderer.setSize(window.innerWidth, window.innerHeight);
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        });

        // Cleanup on component unmount
        return () => {
          renderer.dispose();
          scene.dispose();
        };
      }
    };

    // Check if Three.js is already loaded, otherwise load it dynamically
    if (typeof window !== "undefined" && !window.THREE) {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.onload = loadThreeJS;
      document.body.appendChild(script);
    } else {
      loadThreeJS();
    }

    // Cleanup function to remove the script tag when the component unmounts
    return () => {
      const script = document.querySelector("script[src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js']");
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>ThuglifeScientist</title>
      </Head>

      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 10,
            color: 'white',
          }}
        >
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>ThuglifeScientist</h1>
          <h2 style={{ fontSize: '2rem', fontStyle: 'italic', margin: '10px 0' }}>
            Started from nothing, grew upto be something
          </h2>
          <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
            Way towards innovation and maybe invention
          </p>

          <div style={{ backgroundColor: 'black', padding: '10px', marginTop: '20px' }}>
            <h2 style={{ color: 'white' }}>Damak Ko Developer</h2>
            <a href="https://www.notion.so/Main-Page-180e5325c45380389498e4d209ea12a4?pvs=4" style={{ color: 'white' }}>Notes</a>
          </div>
        </div>
      </div>
    </>
  );
}
