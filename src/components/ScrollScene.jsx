import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/* Section anchors the 3D object travels between while scrolling */
const SECTION_IDS = ["about", "projects", "skills", "contact"];

/* Keyframes per section: x, y, scale, opacity */
const KEYS_DESKTOP = [
  { x: 3.35, y: 0.0, s: 0.95, o: 1 },
  { x: -3.9, y: 0.3, s: 0.62, o: 0.9 },
  { x: 3.7, y: 0.0, s: 0.8, o: 0.95 },
  { x: -3.4, y: 0.0, s: 0.9, o: 0.95 },
];
const KEYS_MOBILE = [
  { x: 0, y: 1.9, s: 0.5, o: 0.95 },
  { x: 0, y: 3.2, s: 0.36, o: 0.35 },
  { x: 0, y: 3.2, s: 0.36, o: 0.35 },
  { x: 0, y: 3.0, s: 0.4, o: 0.4 },
];

const ease = (t) => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a + (b - a) * t;

/* Image based lighting generated locally (no network request) */
function Environment() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const room = new RoomEnvironment();
    const target = pmrem.fromScene(room, 0.04);
    scene.environment = target.texture;
    return () => {
      scene.environment = null;
      target.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);
  return null;
}

function Emblem({ theme, rtl }) {
  const { size } = useThree();
  const group = useRef();
  const knot = useRef();
  const shell = useRef();
  const rings = [useRef(), useRef(), useRef()];
  const cache = useRef({ tops: [0, 1, 2, 3], timer: 0 });
  const pointer = useRef({ x: 0, y: 0 });
  const mobile = size.width < 1000;
  const dark = theme === "dark";

  const palette = useMemo(
    () =>
      dark
        ? { metal: "#d9b56c", line: "#f3dca2", ring: "#e9cf94" }
        : { metal: "#a67c2a", line: "#8a6620", ring: "#a67c2a" },
    [dark],
  );

  /* Section positions are re-measured because images change page height */
  useEffect(() => {
    const measure = () => {
      cache.current.tops = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + window.scrollY : 0;
      });
    };
    measure();
    const timer = setInterval(measure, 700);
    window.addEventListener("resize", measure);
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", measure);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const materials = useMemo(
    () => ({
      knot: new THREE.MeshPhysicalMaterial({
        color: palette.metal,
        metalness: 1,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        transparent: true,
      }),
      shell: new THREE.MeshBasicMaterial({
        color: palette.line,
        wireframe: true,
        transparent: true,
      }),
      ring: new THREE.MeshBasicMaterial({
        color: palette.ring,
        transparent: true,
      }),
    }),
    [palette],
  );

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const keys = mobile ? KEYS_MOBILE : KEYS_DESKTOP;
    const { tops } = cache.current;
    const y = window.scrollY + window.innerHeight * 0.45;

    let i = 0;
    for (let k = 0; k < tops.length; k++) if (y >= tops[k]) i = k;
    const next = Math.min(i + 1, keys.length - 1);
    const span = (tops[next] || tops[i] + 1) - tops[i];
    const t = next === i ? 0 : ease(Math.min(1, Math.max(0, (y - tops[i]) / span)));

    const a = keys[i];
    const b = keys[next];
    const dir = rtl ? -1 : 1;
    const tx = lerp(a.x, b.x, t) * dir;
    const ty = lerp(a.y, b.y, t);
    const ts = lerp(a.s, b.s, t);
    const to = lerp(a.o, b.o, t);

    g.position.x = THREE.MathUtils.damp(g.position.x, tx, 3.2, dt);
    g.position.y = THREE.MathUtils.damp(g.position.y, ty, 3.2, dt);
    const sc = THREE.MathUtils.damp(g.scale.x, ts, 3.2, dt);
    g.scale.setScalar(sc);

    const sy = window.scrollY;
    const time = state.clock.elapsedTime;
    const px = pointer.current.x;
    const py = pointer.current.y;

    knot.current.rotation.y = THREE.MathUtils.damp(
      knot.current.rotation.y,
      sy * 0.0042 + time * 0.12 + px * 0.5,
      4,
      dt,
    );
    knot.current.rotation.x = THREE.MathUtils.damp(
      knot.current.rotation.x,
      sy * 0.0016 + py * 0.4,
      4,
      dt,
    );
    shell.current.rotation.y = -sy * 0.0021 - time * 0.07;
    shell.current.rotation.z = sy * 0.0011;
    const expand = 1 + Math.sin(sy * 0.0035) * 0.06;
    shell.current.scale.setScalar(expand);

    rings[0].current.rotation.x = Math.PI / 2 + sy * 0.0026 + time * 0.18;
    rings[1].current.rotation.y = sy * 0.0032 + time * 0.22;
    rings[1].current.rotation.x = Math.PI / 3;
    rings[2].current.rotation.z = -sy * 0.0023 - time * 0.15;
    rings[2].current.rotation.x = Math.PI / 5;

    materials.knot.opacity = to;
    materials.shell.opacity = 0.17 * to;
    materials.ring.opacity = 0.55 * to;
  });

  return (
    <group ref={group} position={[mobile ? 0 : 3.35, mobile ? 1.9 : 0, 0]}>
      <mesh ref={knot} material={materials.knot}>
        <torusKnotGeometry args={[0.95, 0.27, 260, 36, 2, 3]} />
      </mesh>
      <mesh ref={shell} material={materials.shell}>
        <icosahedronGeometry args={[1.95, 1]} />
      </mesh>
      {[2.35, 2.7, 3.05].map((r, idx) => (
        <mesh key={r} ref={rings[idx]} material={materials.ring}>
          <torusGeometry args={[r, 0.006, 8, 220]} />
        </mesh>
      ))}
    </group>
  );
}

class SceneBoundary extends React.Component {
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

export default function ScrollScene({ theme, rtl }) {
  const supported = useMemo(() => hasWebGL(), []);
  if (!supported) return null;
  return (
    <SceneBoundary>
      <div className="rx-canvas" aria-hidden="true">
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 7.5], fov: 40 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        >
          <Environment />
          <ambientLight intensity={0.25} />
          <pointLight position={[4, 3, 5]} intensity={18} color="#ffe2a8" />
          <pointLight position={[-5, -2, 3]} intensity={10} color="#8fb0ff" />
          <Emblem theme={theme} rtl={rtl} />
        </Canvas>
      </div>
    </SceneBoundary>
  );
}
