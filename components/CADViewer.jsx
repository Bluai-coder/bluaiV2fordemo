



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
import { Box } from '@mui/material';

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
  const hasSetDefaultRotation = useRef(false);

  const lastLoggedPositionRef = useRef(null);
  const lastLoggedRotationRef = useRef(null);
  const logCounterRef = useRef(0);

  // Auto-rotation oscillation settings
  const DEFAULT_ROTATION_Y_DEGREES = 0;
  const DEFAULT_ROTATION_Y_RADIANS = (DEFAULT_ROTATION_Y_DEGREES * Math.PI) / 180;
 

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

// ─── CADViewer (default export) ───────────────────────────────────────────────
export default function CADViewer({ modelPath }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [canvasKey, setCanvasKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const contextLostRef = useRef(false);
  const containerRef = useRef(null);
  const controlsRef = useRef(null);
  const interactionCountRef = useRef(0);

 const DEFAULT_CAMERA_POSITION = [0, 0.5, 5];

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
          height: { xs: 280, sm: 360, md: 700 },
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
        <directionalLight position={[-5, 0, 5]} intensity={0.5} color="#4488ff" />
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

