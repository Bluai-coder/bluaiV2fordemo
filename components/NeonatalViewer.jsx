// // components/CADViewer.jsx
// 'use client';

// import { Suspense, useRef, useState, useEffect, Component } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import {
//   OrbitControls,
//   Center,
//   useGLTF,
//   Html,
//   useProgress,
// } from '@react-three/drei';
// import * as THREE from 'three';
// import { Box, IconButton } from '@mui/material';
// import FullscreenIcon from '@mui/icons-material/Fullscreen';
// import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

// // Loading component
// function Loader() {
//   const { progress } = useProgress();
//   return (
//     <Html center>
//       <div className="flex flex-col items-center">
//         <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//         <p className="text-white mt-4 text-lg">{Math.round(progress)}% loaded</p>
//       </div>
//     </Html>
//   );
// }

// // Fallback Model - Z-axis Negative rotation (Auto-rotate, Stop on hover)
// function FallbackModel({ isHovered }) {
//   const ref = useRef();

//   useFrame((state, delta) => {
//     if (ref.current) {
//       // ✅ Hover = Stop, Mouse out = Auto-rotate
//       if (!isHovered) {
//         // Auto-rotate when NOT hovered
//         ref.current.rotation.z -= delta * 0.5;
//       }
//       // When hovered, rotation stops automatically
//     }
//   });

//   return (
//     <group ref={ref} position={[0, 0, 0]}> {/* ✅ Center */}
//       <mesh>
//         <torusKnotGeometry args={[1.2, 0.4, 100, 16]} />
//         <meshStandardMaterial
//           color="#4ecdc4"
//           roughness={0.2}
//           metalness={0.8}
//           emissive="#1a3a3a"
//           emissiveIntensity={0.3}
//         />
//       </mesh>
//       {[0, 60, 120, 180, 240, 300].map((angle, i) => {
//         const rad = (angle * Math.PI) / 180;
//         return (
//           <mesh
//             key={i}
//             position={[
//               Math.cos(rad) * 2.2,
//               Math.sin(rad * 0.5) * 0.8,
//               Math.sin(rad) * 2.2
//             ]}
//           >
//             <sphereGeometry args={[0.12, 16, 16]} />
//             <meshStandardMaterial
//               color={new THREE.Color().setHSL(i / 6, 1, 0.5)}
//               emissive={new THREE.Color().setHSL(i / 6, 1, 0.3)}
//               emissiveIntensity={0.5}
//               roughness={0.1}
//               metalness={0.9}
//             />
//           </mesh>
//         );
//       })}
//     </group>
//   );
// }




// // Inner model — Z-axis Negative rotation (Auto-rotate, Stop on hover)
// function ModelInner({ modelPath, autoRotate }) {
//   const { scene } = useGLTF(modelPath);
//   const groupRef = useRef();


//   scene.updateMatrixWorld(true);

// const box = new THREE.Box3().setFromObject(scene);
// const center = box.getCenter(new THREE.Vector3());
// const size = box.getSize(new THREE.Vector3());

// console.log("Center:", center);
// console.log("Size:", size);

//   useEffect(() => {
//     // Ensure world matrices are updated
//     scene.updateMatrixWorld(true);

//     // Get model bounding box
//     const box = new THREE.Box3().setFromObject(scene);

//     // Get center of model
//     const center = box.getCenter(new THREE.Vector3());

//     // Move model so its center is at origin
//     scene.position.set(
//       -center.x,
//       -center.y,
//       -center.z
//     );


//   }, [scene]);


//   useFrame((_, delta) => {
//     if (groupRef.current && autoRotate) {
//       // Spin in place on Z-axis
//       groupRef.current.rotation.z -= delta * 0.3;
//     }
//   });

//   return (
//     <Center>
//       <group ref={groupRef}>
//         <primitive
//           object={scene}
//           scale={1.5}
//         />
//       </group>
//     </Center>
//   );
// }
// // Error Boundary
// class ModelErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error) {
//     console.warn('Model boundary caught:', error.message);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.modelPath !== this.props.modelPath && this.state.hasError) {
//       this.setState({ hasError: false });
//     }
//   }

//   render() {
//     if (this.state.hasError) return <FallbackModel isHovered={this.props.isHovered} />;
//     return this.props.children;
//   }
// }

// function Model({ modelPath, autoRotate = true, isHovered = false }) {
//   return (
//     <ModelErrorBoundary modelPath={modelPath} isHovered={isHovered}>
//       <ModelInner modelPath={modelPath} autoRotate={autoRotate} />
//     </ModelErrorBoundary>
//   );
// }

// export default function CADViewer({ modelPath }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [modelError, setModelError] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const [canvasKey, setCanvasKey] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const contextLostRef = useRef(false);
//   const containerRef = useRef(null);
//   const controlsRef = useRef(null);

//   // DEFAULT CAMERA POSITION - Top view
//   const DEFAULT_CAMERA_POSITION = [0, 6, 0.1];
//   const DEFAULT_TARGET = [0, 0, 0];

//   useEffect(() => {
//     setIsMounted(true);

//     const checkModel = async () => {
//       try {
//         const response = await fetch(modelPath);
//         if (!response.ok) {
//           console.warn('⚠️ Model file not found, using fallback');
//           setModelError(true);
//         } else {
//           console.log('✅ Model found:', modelPath);
//           setModelError(false);
//         }
//       } catch {
//         console.warn('⚠️ Error checking model, using fallback');
//         setModelError(true);
//       }
//     };
//     checkModel();
//   }, [modelPath]);

//   useEffect(() => {
//     return () => {
//       useGLTF.clear(modelPath);
//     };
//   }, [modelPath]);

//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       const isFull = document.fullscreenElement !== null;
//       setIsFullscreen(isFull);
//     };

//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     return () => {
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//     };
//   }, []);

//   const handleContextLost = () => {
//     if (contextLostRef.current) return;
//     contextLostRef.current = true;
//     console.warn('WebGL context lost — remounting canvas in 800ms...');
//     useGLTF.clear(modelPath);
//     setTimeout(() => {
//       contextLostRef.current = false;
//       setCanvasKey((k) => k + 1);
//     }, 800);
//   };

//   const toggleFullscreen = () => {
//     const container = containerRef.current;
//     if (!container) return;

//     if (!document.fullscreenElement) {
//       container.requestFullscreen?.().catch(err => {
//         console.warn('Fullscreen error:', err);
//       });
//     } else {
//       document.exitFullscreen?.().catch(err => {
//         console.warn('Exit fullscreen error:', err);
//       });
//     }
//   };





//   const resetCamera = () => {
//     if (controlsRef.current) {
//       controlsRef.current.target.set(DEFAULT_TARGET[0], DEFAULT_TARGET[1], DEFAULT_TARGET[2]);
//       controlsRef.current.update();

//       controlsRef.current.object.position.set(
//         DEFAULT_CAMERA_POSITION[0],
//         DEFAULT_CAMERA_POSITION[1],
//         DEFAULT_CAMERA_POSITION[2]
//       );
//       controlsRef.current.update();
//     }
//   };

//   // Handle hover events
//   const handleMouseEnter = () => {
//     setIsHovered(true); // ✅ Hover = Stop rotation
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false); // ✅ Mouse out = Auto-rotate
//   };

//   if (!isMounted) {
//     return (
//       <Box sx={{ position: "relative", width: { xs: 280, sm: 360, md: 520 }, height: { xs: 280, sm: 360, md: 580 }, borderRadius: 4 }}>
//         <div className="text-white/60">Initializing...</div>
//       </Box>
//     );
//   }

//   // Auto-rotate when NOT hovered
//   const shouldRotate = !isHovered;

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         position: "relative",
//         width: isFullscreen ? "100vw" : { xs: 280, sm: 360, md: 580 },
//         height: isFullscreen ? "100vh" : { xs: 280, sm: 360, md: 560 },
//         borderRadius: isFullscreen ? 0 : 4,
//         bgcolor: '#111827',
//         overflow: 'hidden',
//         cursor: 'pointer',
//       }}
//       className={isFullscreen ? "w-screen h-screen bg-[#0c1020] flex items-center justify-center" : ""}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Canvas
//         key={canvasKey}
//         camera={{ position: DEFAULT_CAMERA_POSITION, fov: 45 }}
//         className="w-full h-full"
//         dpr={[1, 2]}
//         gl={{
//           antialias: true,
//           alpha: false,
//           powerPreference: 'high-performance',
//           stencil: false,
//           depth: true,
//           failIfMajorPerformanceCaveat: false,
//         }}
//         onCreated={({ gl, camera }) => {
//           gl.domElement.addEventListener('webglcontextlost', (e) => {
//             e.preventDefault();
//             handleContextLost();
//           });
//         }}
//       >
//         <color attach="background" args={['#020202']} />

//         <ambientLight intensity={0.6} />
//         <directionalLight position={[5, 10, 7]} intensity={1.5} castShadow={false} />
//         <directionalLight position={[-5, 0, 5]} intensity={0.5} color="#4488ff" />
//         <directionalLight position={[0, -5, -5]} intensity={0.3} color="#f0f0f0" />
//         <pointLight position={[0, 3, 0]} intensity={0.4} color="#4ecdc4" />
//         <hemisphereLight skyColor="#4488ff" groundColor="#e2e2e2" intensity={0.3} />

//         <Suspense fallback={<Loader />}>
//           <Model
//             modelPath={modelPath}
//             autoRotate={shouldRotate}
//             isHovered={isHovered}
//           />
//         </Suspense>

//         <OrbitControls
//           ref={controlsRef}
//           makeDefault
//           enableRotate
//           enableZoom
//           enablePan

//           rotateSpeed={0.8}
//           zoomSpeed={1.2}
//           panSpeed={0.8}

//           enableDamping
//           dampingFactor={0.05}

//           minDistance={1}
//           maxDistance={50}

//           minPolarAngle={0}
//           maxPolarAngle={Math.PI}

//           minAzimuthAngle={-Infinity}
//           maxAzimuthAngle={Infinity}

//           target={[0, 0, 0]}
//         />
//       </Canvas>

//       {/* ✅ Fullscreen Icon Button - Top Right Corner */}
//       <IconButton
//         onClick={toggleFullscreen}
//         sx={{
//           position: 'absolute',
//           top: 12,
//           right: 12,
//           zIndex: 10,
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           backdropFilter: 'blur(8px)',
//           color: 'white',
//           borderRadius: '8px',
//           padding: '8px',
//           '&:hover': {
//             backgroundColor: 'rgba(255,255,255,0.2)',
//           },
//           border: '1px solid rgba(255,255,255,0.1)',
//         }}
//       >
//         {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
//       </IconButton>

//       {/* ✅ Reset Button - Top Right (next to Fullscreen) */}
//       <IconButton
//         onClick={resetCamera}
//         sx={{
//           position: 'absolute',
//           top: 12,
//           right: 58,
//           zIndex: 10,
//           height: 42,
//           width: 42,
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           backdropFilter: 'blur(8px)',
//           color: 'white',
//           borderRadius: '8px',
//           padding: '8px',
//           '&:hover': {
//             backgroundColor: 'rgba(255,255,255,0.2)',
//           },
//           border: '1px solid rgba(255,255,255,0.1)',
//         }}
//       >
//         ⟲
//       </IconButton>
//     </Box>
//   );
// }










// // components/CADViewer.jsx
// 'use client';

// import { Suspense, useRef, useState, useEffect, useMemo, Component } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import {
//   OrbitControls,
//   Center,
//   useGLTF,
//   Html,
//   useProgress,
// } from '@react-three/drei';
// import * as THREE from 'three';
// import { Box, IconButton } from '@mui/material';
// import FullscreenIcon from '@mui/icons-material/Fullscreen';
// import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

// // ─── Loader ───────────────────────────────────────────────────────────────────
// function Loader() {
//   const { progress } = useProgress();
//   return (
//     <Html center>
//       <div className="flex flex-col items-center">
//         <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//         <p className="text-white mt-4 text-lg">{Math.round(progress)}% loaded</p>
//       </div>
//     </Html>
//   );
// }

// // ─── Fallback Model ───────────────────────────────────────────────────────────
// function FallbackModel({ isHovered }) {
//   const ref = useRef();

//   useFrame((_, delta) => {
//     if (ref.current && !isHovered) {
//       ref.current.rotation.z -= delta * 0.5;
//     }
//   });

//   return (
//     <group ref={ref} position={[0, 0, 0]}>
//       <mesh>
//         <torusKnotGeometry args={[1.2, 0.4, 100, 16]} />
//         <meshStandardMaterial
//           color="#4ecdc4"
//           roughness={0.2}
//           metalness={0.8}
//           emissive="#1a3a3a"
//           emissiveIntensity={0.3}
//         />
//       </mesh>

//       {[0, 60, 120, 180, 240, 300].map((angle, i) => {
//         const rad = (angle * Math.PI) / 180;
//         return (
//           <mesh
//             key={i}
//             position={[
//               Math.cos(rad) * 2.2,
//               Math.sin(rad * 0.5) * 0.8,
//               Math.sin(rad) * 2.2,
//             ]}
//           >
//             <sphereGeometry args={[0.12, 16, 16]} />
//             <meshStandardMaterial
//               color={new THREE.Color().setHSL(i / 6, 1, 0.5)}
//               emissive={new THREE.Color().setHSL(i / 6, 1, 0.3)}
//               emissiveIntensity={0.5}
//               roughness={0.1}
//               metalness={0.9}
//             />
//           </mesh>
//         );
//       })}
//     </group>
//   );
// }

// // ─── Model Inner ──────────────────────────────────────────────────────────────
// // KEY FIX: clone the scene so the shared useGLTF cache is never mutated.
// // Previously, scene.position.set(...) was called inside a useEffect, which
// // mutated the cached scene object. On every refresh, useGLTF returned that
// // already-shifted object, compounding the offset each time.
// function ModelInner({ modelPath, autoRotate }) {
//   const { scene } = useGLTF(modelPath);

//   // ✅ Clone so the cached scene object is never mutated
//   const clonedScene = useMemo(() => scene.clone(true), [scene]);

//   // ✅ Dispose cloned GPU resources on unmount to prevent memory leaks
//   useEffect(() => {
//     return () => {
//       clonedScene.traverse((obj) => {
//         if (obj.isMesh) {
//           obj.geometry?.dispose();
//           if (Array.isArray(obj.material)) {
//             obj.material.forEach((m) => m.dispose());
//           } else {
//             obj.material?.dispose();
//           }
//         }
//       });
//     };
//   }, [clonedScene]);

//   const groupRef = useRef();

//   useFrame((_, delta) => {
//     if (groupRef.current && autoRotate) { 
//       groupRef.current.rotation.z -= delta * 0.3;
//       // groupRef.current.rotation.x -= delta * 0.3;
//       // groupRef.current.rotation.y -= delta * 0.3;
//     }
//   });

//   // ✅ <Center> handles centering — no manual scene.position mutation needed
//   return (
//     <group position={[0.7, 0, 0]}>
//       <Center>
//         <group ref={groupRef}>
//           <primitive object={clonedScene} scale={1.5} />
//         </group>
//       </Center>
//     </group>
//   );
// }

// // ─── Error Boundary ───────────────────────────────────────────────────────────
// class ModelErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error) {
//     console.warn('Model boundary caught:', error.message);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.modelPath !== this.props.modelPath && this.state.hasError) {
//       this.setState({ hasError: false });
//     }
//   }

//   render() {
//     if (this.state.hasError) {
//       return <FallbackModel isHovered={this.props.isHovered} />;
//     }
//     return this.props.children;
//   }
// }

// // ─── Model ────────────────────────────────────────────────────────────────────
// function Model({ modelPath, autoRotate = true, isHovered = false }) {
//   return (
//     <ModelErrorBoundary modelPath={modelPath} isHovered={isHovered}>
//       <ModelInner modelPath={modelPath} autoRotate={autoRotate} />
//     </ModelErrorBoundary>
//   );
// }

// // ─── CADViewer (default export) ───────────────────────────────────────────────
// export default function CADViewer({ modelPath }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [modelError, setModelError] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const [canvasKey, setCanvasKey] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const contextLostRef = useRef(false);
//   const containerRef = useRef(null);
//   const controlsRef = useRef(null);

//   const DEFAULT_CAMERA_POSITION = [0, 6, 0.1];
//   const DEFAULT_TARGET = [0, 0, 0];

//   // Mount + model existence check
//   useEffect(() => {
//     setIsMounted(true);

//     const checkModel = async () => {
//       try {
//         const response = await fetch(modelPath);
//         if (!response.ok) {
//           console.warn('⚠️ Model file not found, using fallback');
//           setModelError(true);
//         } else {
//           console.log('✅ Model found:', modelPath);
//           setModelError(false);
//         }
//       } catch {
//         console.warn('⚠️ Error checking model, using fallback');
//         setModelError(true);
//       }
//     };

//     checkModel();
//   }, [modelPath]);

//   // Clear GLTF cache on unmount
//   useEffect(() => {
//     return () => {
//       useGLTF.clear(modelPath);
//     };
//   }, [modelPath]);

//   // Track fullscreen state
//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(document.fullscreenElement !== null);
//     };
//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
//   }, []);

//   // WebGL context loss recovery
//   const handleContextLost = () => {
//     if (contextLostRef.current) return;
//     contextLostRef.current = true;
//     console.warn('WebGL context lost — remounting canvas in 800ms...');
//     useGLTF.clear(modelPath);
//     setTimeout(() => {
//       contextLostRef.current = false;
//       setCanvasKey((k) => k + 1);
//     }, 800);
//   };

//   const toggleFullscreen = () => {
//     const container = containerRef.current;
//     if (!container) return;
//     if (!document.fullscreenElement) {
//       container.requestFullscreen?.().catch((err) =>
//         console.warn('Fullscreen error:', err)
//       );
//     } else {
//       document.exitFullscreen?.().catch((err) =>
//         console.warn('Exit fullscreen error:', err)
//       );
//     }
//   };

//   const resetCamera = () => {
//     if (!controlsRef.current) return;
//     controlsRef.current.target.set(...DEFAULT_TARGET);
//     controlsRef.current.object.position.set(...DEFAULT_CAMERA_POSITION);
//     controlsRef.current.update();
//   };

//   if (!isMounted) {
//     return (
//       <Box
//         sx={{
//           position: 'relative',
//           width: { xs: 280, sm: 360, md: 520 },
//           height: { xs: 280, sm: 360, md: 580 },
//           borderRadius: 4,
//           bgcolor: '#111827',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <div className="text-white/60">Initializing...</div>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         position: 'relative',
//         width: isFullscreen ? '100vw' : { xs: 280, sm: 360, md: 580 },
//         height: isFullscreen ? '100vh' : { xs: 280, sm: 360, md: 560 },
//         borderRadius: isFullscreen ? 0 : 4,
//         bgcolor: '#ffffff',
//         overflow: 'hidden',
//         cursor: 'pointer',
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Canvas
//         key={canvasKey}
//         camera={{ position: DEFAULT_CAMERA_POSITION, fov: 45 }}
//         className="w-full h-full"
//         dpr={[1, 2]}
//         gl={{
//           antialias: true,
//           alpha: false,
//           powerPreference: 'high-performance',
//           stencil: false,
//           depth: true,
//           failIfMajorPerformanceCaveat: false,
//         }}
//         onCreated={({ gl }) => {
//           gl.domElement.addEventListener('webglcontextlost', (e) => {
//             e.preventDefault();
//             handleContextLost();
//           });
//         }}
//       >
//         <color attach="background" args={['#fffdfd']} />

//         <ambientLight intensity={0.6} />
//         <directionalLight position={[5, 10, 7]} intensity={1.5} castShadow={false} />
//         <directionalLight position={[-5, 0, 5]} intensity={0.5} color="#4488ff" />
//         <directionalLight position={[0, -5, -5]} intensity={0.3} color="#f0f0f0" />
//         <pointLight position={[0, 3, 0]} intensity={0.4} color="#4ecdc4" />
//         <hemisphereLight skyColor="#4488ff" groundColor="#e2e2e2" intensity={0.3} />

//         <Suspense fallback={<Loader />}>
//           <Model
//             modelPath={modelPath}
//             autoRotate={!isHovered}
//             isHovered={isHovered}
//           />
//         </Suspense>

//         <OrbitControls
//           ref={controlsRef}
//           makeDefault
//           enableRotate
//           enableZoom
//           enablePan
//           rotateSpeed={0.8}
//           zoomSpeed={1.2}
//           panSpeed={0.8}
//           enableDamping
//           dampingFactor={0.05}
//           minDistance={1}
//           maxDistance={50}
//           minPolarAngle={0}
//           maxPolarAngle={Math.PI}
//           minAzimuthAngle={-Infinity}
//           maxAzimuthAngle={Infinity}
//           target={[0, 0, 0]}
//         />
//       </Canvas>

//       {/* Fullscreen button */}
//       <IconButton
//         onClick={toggleFullscreen}
//         sx={{
//           position: 'absolute',
//           top: 12, right: 12,
//           zIndex: 10,
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           backdropFilter: 'blur(8px)',
//           color: 'white',
//           borderRadius: '8px',
//           padding: '8px',
//           border: '1px solid rgba(255,255,255,0.1)',
//           '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
//         }}
//       >
//         {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
//       </IconButton>

//       {/* Reset camera button */}
//       <IconButton
//         onClick={resetCamera}
//         sx={{
//           position: 'absolute',
//           top: 12, right: 58,
//           zIndex: 10,
//           height: 42, width: 42,
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           backdropFilter: 'blur(8px)',
//           color: 'white',
//           borderRadius: '8px',
//           padding: '8px',
//           border: '1px solid rgba(255,255,255,0.1)',
//           '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
//         }}
//       >
//         ⟲
//       </IconButton>
//     </Box>
//   );
// }




















// // components/CADViewer.jsx
// 'use client';

// import { Suspense, useRef, useState, useEffect, useMemo, Component } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import {
//   OrbitControls,
//   Center,
//   useGLTF,
//   Html,
//   useProgress,
// } from '@react-three/drei';
// import * as THREE from 'three';
// import { Box, IconButton } from '@mui/material';
// import FullscreenIcon from '@mui/icons-material/Fullscreen';
// import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

// // ─── Loader ───────────────────────────────────────────────────────────────────
// function Loader() {
//   const { progress } = useProgress();
//   return (
//     <Html center>
//       <div className="flex flex-col items-center">
//         <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//         <p className="text-white mt-4 text-lg">{Math.round(progress)}% loaded</p>
//       </div>
//     </Html>
//   );
// }

// // ─── Fallback Model ───────────────────────────────────────────────────────────
// function FallbackModel({ isHovered }) {
//   const ref = useRef();

//   useFrame((_, delta) => {
//     if (ref.current && !isHovered) {
//       ref.current.rotation.z -= delta * 0.5;
//     }
//   });

//   return (
//     <group ref={ref} position={[0, 0, 0]}>
//       <mesh>
//         <torusKnotGeometry args={[1.2, 0.4, 100, 16]} />
//         <meshStandardMaterial
//           color="#4ecdc4"
//           roughness={0.2}
//           metalness={0.8}
//           emissive="#1a3a3a"
//           emissiveIntensity={0.3}
//         />
//       </mesh>

//       {[0, 60, 120, 180, 240, 300].map((angle, i) => {
//         const rad = (angle * Math.PI) / 180;
//         return (
//           <mesh
//             key={i}
//             position={[
//               Math.cos(rad) * 2.2,
//               Math.sin(rad * 0.5) * 0.8,
//               Math.sin(rad) * 2.2,
//             ]}
//           >
//             <sphereGeometry args={[0.12, 16, 16]} />
//             <meshStandardMaterial
//               color={new THREE.Color().setHSL(i / 6, 1, 0.5)}
//               emissive={new THREE.Color().setHSL(i / 6, 1, 0.3)}
//               emissiveIntensity={0.5}
//               roughness={0.1}
//               metalness={0.9}
//             />
//           </mesh>
//         );
//       })}
//     </group>
//   );
// }

// // ─── Model Inner ──────────────────────────────────────────────────────────────
// function ModelInner({ modelPath, autoRotate }) {
//   const { scene } = useGLTF(modelPath);

//   const clonedScene = useMemo(() => scene.clone(true), [scene]);

//   useEffect(() => {
//     return () => {
//       clonedScene.traverse((obj) => {
//         if (obj.isMesh) {
//           obj.geometry?.dispose();
//           if (Array.isArray(obj.material)) {
//             obj.material.forEach((m) => m.dispose());
//           } else {
//             obj.material?.dispose();
//           }
//         }
//       });
//     };
//   }, [clonedScene]);

//   const groupRef = useRef();

//   useFrame((_, delta) => {
//     if (groupRef.current && autoRotate) { 
//       groupRef.current.rotation.z -= delta * 0.3;
//     }
//   });

//   return (
//     <group position={[0.7, 0, 0]}>
//       <Center>
//         <group ref={groupRef}>
//           <primitive object={clonedScene} scale={1.5} />
//         </group>
//       </Center>
//     </group>
//   );
// }

// // ─── Error Boundary ───────────────────────────────────────────────────────────
// class ModelErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error) {
//     console.warn('Model boundary caught:', error.message);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.modelPath !== this.props.modelPath && this.state.hasError) {
//       this.setState({ hasError: false });
//     }
//   }

//   render() {
//     if (this.state.hasError) {
//       return <FallbackModel isHovered={this.props.isHovered} />;
//     }
//     return this.props.children;
//   }
// }

// // ─── Model ────────────────────────────────────────────────────────────────────
// function Model({ modelPath, autoRotate = true, isHovered = false }) {
//   return (
//     <ModelErrorBoundary modelPath={modelPath} isHovered={isHovered}>
//       <ModelInner modelPath={modelPath} autoRotate={autoRotate} />
//     </ModelErrorBoundary>
//   );
// }

// // ─── CADViewer (default export) ───────────────────────────────────────────────
// export default function CADViewer({ modelPath }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [modelError, setModelError] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const [canvasKey, setCanvasKey] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const contextLostRef = useRef(false);
//   const containerRef = useRef(null);
//   const controlsRef = useRef(null);
//   //  console.log("camera position",controlsRef.current?.object.position)

//   const DEFAULT_CAMERA_POSITION = [0, 6, 0.1]; // KEPT ORIGINAL
//   const DEFAULT_TARGET = [0, 0, 0];

//   useEffect(() => {
//     setIsMounted(true);

//     const checkModel = async () => {
//       try {
//         const response = await fetch(modelPath);
//         if (!response.ok) {
//           console.warn('⚠️ Model file not found, using fallback');
//           setModelError(true);
//         } else {
//           console.log('✅ Model found:', modelPath);
//           setModelError(false);
//         }
//       } catch {
//         console.warn('⚠️ Error checking model, using fallback');
//         setModelError(true);
//       }
//     };

//     checkModel();
//   }, [modelPath]);

//   useEffect(() => {
//     return () => {
//       useGLTF.clear(modelPath);
//     };
//   }, [modelPath]);

 

//   // Track fullscreen state - ADDED reset logic
//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       const isNowFullscreen = document.fullscreenElement !== null;
//       setIsFullscreen(isNowFullscreen);
      
//       // Auto-reset camera when exiting fullscreen
//       if (!isNowFullscreen && controlsRef.current) {
//         controlsRef.current.target.set(...DEFAULT_TARGET);
//         controlsRef.current.object.position.set(...DEFAULT_CAMERA_POSITION);
//         controlsRef.current.object.zoom = 1; // Reset zoom
//         controlsRef.current.update();
//       }
//     };
//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
//   }, []);

//   const handleContextLost = () => {
//     if (contextLostRef.current) return;
//     contextLostRef.current = true;
//     console.warn('WebGL context lost — remounting canvas in 800ms...');
//     useGLTF.clear(modelPath);
//     setTimeout(() => {
//       contextLostRef.current = false;
//       setCanvasKey((k) => k + 1);
//     }, 800);
//   };

//   const toggleFullscreen = () => {
//     const container = containerRef.current;
//     if (!container) return;
//     if (!document.fullscreenElement) {
//       container.requestFullscreen?.().catch((err) =>
//         console.warn('Fullscreen error:', err)
//       );
//     } else {
//       document.exitFullscreen?.().catch((err) =>
//         console.warn('Exit fullscreen error:', err)
//       );
//     }
//   };

//   const resetCamera = () => {
//     if (!controlsRef.current) return;
//     controlsRef.current.target.set(...DEFAULT_TARGET);
//     controlsRef.current.object.position.set(...DEFAULT_CAMERA_POSITION);
//     controlsRef.current.object.zoom = 1;
//     controlsRef.current.update();
//   };

//   if (!isMounted) {
//     return (
//       <Box
//         sx={{
//           position: 'relative',
//           width: { xs: 280, sm: 360, md: 520 },
//           height: { xs: 280, sm: 360, md: 580 },
//           borderRadius: 4,
//           bgcolor: '#f3f3f3',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <div className="text-gray/60">Initializing...</div>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         position: 'relative',
//         width: isFullscreen ? '100vw' : { xs: 280, sm: 360, md: 580 },
//         height: isFullscreen ? '100vh' : { xs: 280, sm: 360, md: 560 },
//         borderRadius: isFullscreen ? 0 : 4,
//         bgcolor: 'transparent',
//         overflow: 'hidden',
//         cursor: 'pointer',
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Canvas
//         key={canvasKey}
//         camera={{ position: DEFAULT_CAMERA_POSITION, fov: 45 }}
//         className="w-full h-full"
//         dpr={[1, 2]}
//         gl={{
//           antialias: true,
//           alpha: true, // CHANGED: false to true
//           powerPreference: 'high-performance',
//           stencil: false,
//           depth: true,
//           failIfMajorPerformanceCaveat: false,
//         }}
//         onCreated={({ gl }) => {
//           gl.domElement.addEventListener('webglcontextlost', (e) => {
//             e.preventDefault();
//             handleContextLost();
//           });
//         }}
//       >

//         <ambientLight intensity={0.6} />
//         <directionalLight position={[5, 10, 7]} intensity={1.5} castShadow={false} />
//         <directionalLight position={[-5, 0, 5]} intensity={0.5} color="#4488ff" />
//         <directionalLight position={[0, -5, -5]} intensity={0.3} color="#f0f0f0" />
//         <pointLight position={[0, 3, 0]} intensity={0.4} color="#4ecdc4" />
//         <hemisphereLight skyColor="#4488ff" groundColor="#e2e2e2" intensity={0.3} />

//         <Suspense fallback={<Loader />}>
//           <Model
//             modelPath={modelPath}
//             autoRotate={!isFullscreen} // CHANGED: only auto-rotate when not in fullscreen
//             isHovered={isHovered}
//           />
//         </Suspense>

//         <OrbitControls
//           ref={controlsRef}
//           makeDefault
//           enableRotate={true} // CHANGED: always true
//           enableZoom={isFullscreen} // CHANGED: only in fullscreen
//           enablePan={isFullscreen} // CHANGED: only in fullscreen
//           rotateSpeed={0.8}
//           zoomSpeed={1.2}
//           panSpeed={0.8}
//           enableDamping
//           dampingFactor={0.05}
//           minDistance={1}
//           maxDistance={50}
//           minPolarAngle={0}
//           maxPolarAngle={Math.PI}
//           minAzimuthAngle={-Infinity}
//           maxAzimuthAngle={Infinity}
//           target={[0, 0, 0]}
//         />
//       </Canvas>

//       <IconButton
//         onClick={toggleFullscreen}
//         sx={{
//           position: 'absolute',
//           top: 12, right: 12,
//           zIndex: 10,
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           backdropFilter: 'blur(8px)',
//           color: 'white',
//           borderRadius: '8px',
//           padding: '8px',
//           border: '1px solid rgba(255,255,255,0.1)',
//           '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
//         }}
//       >
//         {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
//       </IconButton>

//       <IconButton
//         onClick={resetCamera}
//         sx={{
//           position: 'absolute',
//           top: 12, right: 58,
//           zIndex: 10,
//           height: 42, width: 42,
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           backdropFilter: 'blur(8px)',
//           color: 'white',
//           borderRadius: '8px',
//           padding: '8px',
//           border: '1px solid rgba(255,255,255,0.1)',
//           '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
//         }}
//       >
//         ⟲
//       </IconButton>
//     </Box>
//   );
// } 





// components/PoleViewer.jsx
'use client';

import { Suspense, useRef, useState, useEffect, useMemo, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Center,
  useGLTF,
  Html,
  useProgress,
} from '@react-three/drei';
import * as THREE from 'three';
import { Box, IconButton } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

// ─── Loader ───────────────────────────────────────────────────────────────────
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white mt-4 text-lg">{Math.round(progress)}% loaded</p>
      </div>
    </Html>
  );
}

// ─── Fallback Model ───────────────────────────────────────────────────────────
function FallbackModel({ isHovered }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current && !isHovered) {
      ref.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <torusKnotGeometry args={[0.8, 0.3, 64, 8]} />
        <meshStandardMaterial
          color="#4ecdc4"
          roughness={0.2}
          metalness={0.8}
          emissive="#1a3a3a"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

// ─── Model Inner ──────────────────────────────────────────────────────────────
function ModelInner({ modelPath, autoRotate, isInteracting, onModelReady }) {
  const { scene } = useGLTF(modelPath);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const groupRef = useRef();
  const isReadyRef = useRef(false);
  const hasSetDefaultRotation = useRef(false);

  const lastLoggedPositionRef = useRef(null);
  const lastLoggedRotationRef = useRef(null);
  const logCounterRef = useRef(0);

  // Auto-rotation oscillation settings
  const timeRef = useRef(0);
  const DEFAULT_ROTATION_Y_DEGREES = 0;
  const DEFAULT_ROTATION_Y_RADIANS = (DEFAULT_ROTATION_Y_DEGREES * Math.PI) / 180;
  const OSCILLATION_ANGLE = 0.5; // Maximum rotation angle in radians (about 28.6 degrees)
  const OSCILLATION_SPEED = 0.8; // Speed of oscillation

  useEffect(() => {
    return () => {
      clonedScene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });
      console.log('🛑 Model tracking stopped');
    };
  }, [clonedScene, modelPath]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Set default rotation on first frame
      if (!hasSetDefaultRotation.current) {
        hasSetDefaultRotation.current = true;
        groupRef.current.rotation.y = DEFAULT_ROTATION_Y_RADIANS;

        const position = groupRef.current.position;
        const rotation = groupRef.current.rotation;
        const scale = groupRef.current.scale;

        if (onModelReady) {
          onModelReady({
            position: position,
            rotation: rotation,
            scale: scale,
            ref: groupRef.current
          });
        }
      }

      // Auto-rotate with oscillation (back and forth)
      // if (autoRotate && !isInteracting) {
      //   // Update time
      //   timeRef.current += delta * OSCILLATION_SPEED;

      //   // Calculate oscillation using sine wave
      //   // This creates a smooth back-and-forth motion
      //   const oscillationValue = Math.sin(timeRef.current) * OSCILLATION_ANGLE;

      //   // Apply rotation - start from default and oscillate
      //   groupRef.current.rotation.y = DEFAULT_ROTATION_Y_RADIANS + oscillationValue;
      // }

      if (isInteracting) {
        const position = groupRef.current.position;
        const rotation = groupRef.current.rotation;
        const scale = groupRef.current.scale;

        const posStr = `${position.x.toFixed(4)},${position.y.toFixed(4)},${position.z.toFixed(4)}`;
        const rotStr = `${rotation.x.toFixed(4)},${rotation.y.toFixed(4)},${rotation.z.toFixed(4)}`;

        if (lastLoggedPositionRef.current !== posStr || lastLoggedRotationRef.current !== rotStr) {
          lastLoggedPositionRef.current = posStr;
          lastLoggedRotationRef.current = rotStr;
          logCounterRef.current += 1;
        }
      }
    }
  });

  return (
    <Center>
      <group ref={groupRef}>
        <primitive object={clonedScene} scale={1.5} />
      </group>
    </Center>
  );
}

// ─── Error Boundary ───────────────────────────────────────────────────────────
class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn('Model boundary caught:', error.message);
  }

  render() {
    if (this.state.hasError) {
      return <FallbackModel isHovered={this.props.isHovered} />;
    }
    return this.props.children;
  }
}

// ─── Model ────────────────────────────────────────────────────────────────────
function Model({ modelPath, autoRotate = true, isHovered = false, isInteracting = false, onModelReady }) {
  return (
    <ModelErrorBoundary modelPath={modelPath} isHovered={isHovered}>
      <ModelInner
        modelPath={modelPath}
        autoRotate={autoRotate}
        isInteracting={isInteracting}
        onModelReady={onModelReady}
      />
    </ModelErrorBoundary>
  );
}

// ─── NeonatalViewer (default export) ───────────────────────────────────────────────
export default function NeonatalViewer({ modelPath }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [canvasKey, setCanvasKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const contextLostRef = useRef(false);
  const containerRef = useRef(null);
  const controlsRef = useRef(null);
  const interactionCountRef = useRef(0);

 const DEFAULT_CAMERA_POSITION = [0, 0.5, 4];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      useGLTF.clear(modelPath);
    };
  }, [modelPath]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreenNow = document.fullscreenElement !== null;
      setIsFullscreen(isFullscreenNow);

      // Reset camera when exiting fullscreen
      if (!isFullscreenNow && controlsRef.current) {
        resetCamera();
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleContextLost = () => {
    if (contextLostRef.current) return;
    contextLostRef.current = true;
    console.warn('WebGL context lost — remounting canvas...');
    useGLTF.clear(modelPath);
    setTimeout(() => {
      contextLostRef.current = false;
      setCanvasKey((k) => k + 1);
    }, 800);
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.().catch((err) =>
        console.warn('Fullscreen error:', err)
      );
    } else {
      document.exitFullscreen?.().catch((err) =>
        console.warn('Exit fullscreen error:', err)
      );
    }
  };

  const resetCamera = () => {
    if (!controlsRef.current) return;

    // Reset target
    controlsRef.current.target.set(0, 0, 0);

    // Reset camera position (this also resets zoom)
    controlsRef.current.object.position.set(...DEFAULT_CAMERA_POSITION);

    // Reset zoom level explicitly
    controlsRef.current.object.zoom = 1;

    // Update controls
    controlsRef.current.update();

    console.log('🔄 Camera reset to default position and zoom');
  };

  const handleInteractionStart = () => {
    setIsInteracting(true);
    interactionCountRef.current += 1;
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
  };

  const handleModelReady = (modelData) => {
    // Store model data if needed
  };

  if (!isMounted) {
    return (
      <Box
        sx={{
          position: 'relative',
          width: { xs: 280, sm: 360, md: 520 },
          height: { xs: 280, sm: 360, md: 580 },
          borderRadius: 4,
          bgcolor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="text-white/60">Initializing...</div>
      </Box>
    );
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
      width: isFullscreen ? '100vw' :  "100%",
        height: isFullscreen ? '100vh' : { xs: 280, sm: 550, md: 760 },
        borderRadius: isFullscreen ? 0 : 4,
        bgcolor: 'white',
        overflow: 'hidden',
        cursor: isFullscreen ? 'grab' : 'default',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        key={canvasKey}
        camera={{ position: DEFAULT_CAMERA_POSITION, fov: 45 }}
        className="w-full h-full"
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
            handleContextLost();
          });
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 7]} intensity={1.5} />
        {/* <directionalLight position={[-5, 0, 5]} intensity={0.5} color="#4488ff" /> */}
        <hemisphereLight skyColor="#4488ff" groundColor="#e2e2e2" intensity={0.3} />

        <Suspense fallback={<Loader />}>
          <Model
            modelPath={modelPath}
            autoRotate={!isHovered && !isFullscreen}
            isHovered={isHovered}
            isInteracting={isInteracting}
            onModelReady={handleModelReady}
          />
        </Suspense>



        <OrbitControls
          ref={controlsRef}
          makeDefault

          // Enable only rotation
          enableRotate={true}
          enableZoom={false} // or isFullscreen if you want zoom in fullscreen
          enablePan={false}

          // Lock vertical rotation
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}

          // Unlimited left/right rotation
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}

          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.8}

          onStart={handleInteractionStart}
          onEnd={handleInteractionEnd}
        />
      </Canvas>


    </Box>
  );
}

