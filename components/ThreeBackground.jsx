"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // ===== Scene setup =====
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // transparent
    mountRef.current.appendChild(renderer.domElement);

    // ===== Particles =====
    const particleCount = 1800;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const color1 = new THREE.Color("#1b4dff"); // blue
    const color2 = new THREE.Color("#00d2ff"); // cyan
    const color3 = new THREE.Color("#a18cd1"); // soft purple

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Spread in a large sphere
      positions[i3] = (Math.random() - 0.5) * 80;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 60;

      // Random color mix
      const mix = Math.random();
      let color ;
      if (mix < 0.45) color = color1;
      else if (mix < 0.8) color = color2;
      else color = color3;

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 2.5 + 0.5;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ===== Floating glowing orbs =====
    const orbs = [];
    const orbData = [];
 
    for (let i = 0; i < 6; i++) {
      const geometry = new THREE.SphereGeometry(0.6 + Math.random() * 0.8, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? "#1b4dff" : "#00d2ff",
        transparent: true,
        opacity: 0.12,
      });
      const orb = new THREE.Mesh(geometry, material);

      orb.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 30 - 10
      );

      scene.add(orb);
      orbs.push(orb);
      orbData.push({
        speed: 0.2 + Math.random() * 0.4,
        radius: 8 + Math.random() * 12,
        offset: Math.random() * Math.PI * 2,
      });
    }

    // ===== Soft ambient light =====
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // ===== Animation loop =====
    let time = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      time = clock.getElapsedTime();

      // Rotate particle cloud slowly
      particles.rotation.y = time * 0.03;
      particles.rotation.x = Math.sin(time * 0.1) * 0.05;

      // Move particles gently
      const pos = particleGeometry.attributes.position.array ;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3 + 1] += Math.sin(time * 0.5 + i) * 0.002;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Animate orbs in soft orbits
      orbs.forEach((orb, i) => {
        const data = orbData[i];
        orb.position.x = Math.cos(time * data.speed + data.offset) * data.radius;
        orb.position.z = Math.sin(time * data.speed + data.offset) * data.radius * 0.6 - 10;
        orb.position.y = Math.sin(time * data.speed * 0.7 + data.offset) * 6;
      });

      // Very subtle camera movement
      camera.position.x = Math.sin(time * 0.1) * 2;
      camera.position.y = Math.cos(time * 0.08) * 1.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // ===== Resize handler =====
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ===== Cleanup =====
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      orbs.forEach((orb) => {
        orb.geometry.dispose();
        (orb.material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none", // important so cards stay clickable
      }}
    />
  );
}