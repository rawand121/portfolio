import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

class ThreeBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch (e) {
    return false;
  }
}

/* Scroll-driven architectural Toxic Violet silk contour wave */
function SilkWaveMesh({ theme }) {
  const meshRef = useRef();
  const dark = theme === "dark";
  const scrollSmooth = useRef(0);

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(34, 3.2, 110, 16);
  }, []);

  const basePos = useMemo(() => {
    return new Float32Array(geometry.attributes.position.array);
  }, [geometry]);

  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: dark ? "#FFC93C" : "#b88200",
        wireframe: true,
        transparent: true,
        opacity: dark ? 0.22 : 0.2,
      }),
    [dark],
  );

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state, dt) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const targetScroll = window.scrollY * 0.0038;
    scrollSmooth.current = THREE.MathUtils.damp(
      scrollSmooth.current,
      targetScroll,
      4.5,
      dt,
    );
    const s = scrollSmooth.current;

    const pos = geometry.attributes.position;
    const arr = pos.array;
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const x = basePos[ix];
      const y = basePos[ix + 1];
      const wave1 = Math.sin(x * 0.52 + t * 0.55 + s * 1.6) * 0.36;
      const wave2 = Math.cos(x * 0.28 - y * 0.9 - s * 1.1 + t * 0.35) * 0.22;
      arr[ix + 2] = wave1 + wave2;
    }
    pos.needsUpdate = true;

    meshRef.current.rotation.x = -0.92 + Math.sin(s * 0.6) * 0.08;
    meshRef.current.rotation.z = Math.sin(s * 0.4 + t * 0.15) * 0.035;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} position={[0, 0, 0]} />
  );
}

export function ScrollRibbon({ theme }) {
  const supported = useMemo(() => hasWebGL(), []);
  if (!supported) return null;
  return (
    <ThreeBoundary>
      <div className="rx-ribbon-wrap" aria-hidden="true">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.3, 4.6], fov: 38 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        >
          <SilkWaveMesh theme={theme} />
        </Canvas>
      </div>
    </ThreeBoundary>
  );
}
